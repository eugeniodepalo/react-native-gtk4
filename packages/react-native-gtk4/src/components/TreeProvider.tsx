import Gtk from "@/generated/girs/node-gtk-4.0.js"
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import ListModelProvider from "./ListModelProvider.js"
import useListModel from "../hooks/useListModel.js"

interface Node {
  value: unknown
  path: string
  children: Node[]
}

interface Context {
  rootModel: Gtk.StringList
  root: Node[]
  parent: Node | null
}

interface ContainerProps {
  children: React.ReactNode
  autoexpand?: boolean
}

const Context = createContext<Context | null>(null)

function getNode(root: Node[], path: string): Node | null {
  const parts = path.split(".")

  let node = root[Number(parts[0])]

  if (!node) {
    return null
  }

  for (const part of parts.slice(1)) {
    node = node.children[Number(part)]

    if (!node) {
      return null
    }
  }

  return node
}

const Container = function TreeProviderContainer({
  children,
  autoexpand = true,
}: ContainerProps) {
  const rootModel = useMemo(() => new Gtk.StringList(), [])
  const root = useMemo<Node[]>(() => [], [])

  const model = useMemo(
    () =>
      Gtk.TreeListModel.new(rootModel, false, autoexpand, (item) => {
        const path = item.getProperty("string") as string
        const node = getNode(root, path)

        if (!node || node.children.length === 0) {
          return null
        }

        const paths = node.children.map((child) => child.path)
        const model = new Gtk.StringList()

        for (const path of paths) {
          model.append(path)
        }

        return model
      }),
    []
  )

  return (
    <Context.Provider value={{ rootModel, root, parent: null }}>
      <ListModelProvider model={model}>{children}</ListModelProvider>
    </Context.Provider>
  )
}

interface ListProps {
  children: React.ReactNode
}

const List = function TreeProviderList({ children }: ListProps) {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }

    return (
      <ItemContext.Provider value={index} key={child.key ?? index}>
        {child}
      </ItemContext.Provider>
    )
  })
}

interface ItemProps<T> {
  children?: React.ReactNode
  value: T
}

const ItemContext = createContext<number | null>(null)

const Item = function TreeItem<T>({ children, value }: ItemProps<T>) {
  const { model, setItems } = useListModel()
  const context = useContext(Context)
  const index = useContext(ItemContext)

  if (!context || !(model instanceof Gtk.TreeListModel) || index === null) {
    throw new Error(
      "TreeProvider.Item must be used inside a TreeProvider.Container"
    )
  }

  const [node, setNode] = useState<Node | null>(null)
  const { rootModel, root, parent } = context
  const hasChildren = React.Children.count(children) > 0

  useEffect(() => {
    const path = parent ? `${parent.path}.${index}` : index.toString()
    const updatedNode = node ?? { value: null, path: "", children: [] }
    const rootIndex = Number(path.split(".")[0])

    updatedNode.value = value
    updatedNode.path = path

    if (!parent) {
      root.splice(index, 0, updatedNode)
      rootModel.splice(index, 0, [path])
    } else {
      parent.children.splice(index, 0, updatedNode)
      rootModel.itemsChanged(rootIndex, 1, 1)
    }

    setNode(updatedNode)

    setItems((items) => {
      items[path] = value
      return items
    })

    return () => {
      if (!parent) {
        root.splice(index, 1)

        if (rootModel.getItem(index)) {
          rootModel.splice(index, 1, [])
        }
      } else {
        parent.children.splice(index, 1)

        if (rootModel.getItem(rootIndex)) {
          rootModel.itemsChanged(rootIndex, 1, 1)
        }
      }

      setItems((items) => {
        delete items[path]
        return items
      })
    }
  }, [value, index, parent, hasChildren])

  return node ? (
    <Context.Provider value={{ root, rootModel, parent: node }}>
      {children ? <List>{children}</List> : null}
    </Context.Provider>
  ) : null
}

export default {
  Container,
  Item,
  List,
}
