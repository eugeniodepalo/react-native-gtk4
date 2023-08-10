import Gtk from "@girs/node-gtk-4.0"
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import ListModelProvider from "./ListModelProvider.js"
import useListModel from "../hooks/useListModel.js"
import _ from "lodash"

interface Node {
  value: unknown
  path: string
  children: Node[]
}

interface Context {
  rootModel: Gtk.StringList
  rootList: Node[]
  parent: Node | null
}

const Context = createContext<Context | null>(null)

interface Props {
  children: React.ReactNode
  autoexpand?: boolean
}

function getNode(rootList: Node[], path: string): Node | null {
  const parts = path.split(".")

  let node = rootList[Number(parts[0])]

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

const Container = function TreeProvider({
  children,
  autoexpand = true,
}: Props) {
  const rootModel = useMemo(() => new Gtk.StringList(), [])
  const rootList = useMemo(() => [], [])

  const model = useMemo(
    () =>
      Gtk.TreeListModel.new(rootModel, false, autoexpand, (item) => {
        const path = item.getProperty("string") as string
        const node = getNode(rootList, path)

        if (!node || node.children.length === 0) {
          return null
        }

        const childPaths = node.children.map((_, index) => `${path}.${index}`)
        const children = new Gtk.StringList()

        for (const path of childPaths) {
          children.append(path)
        }

        return children
      }),
    []
  )

  return (
    <Context.Provider value={{ rootModel, rootList, parent: null }}>
      <ListModelProvider model={model}>{children}</ListModelProvider>
    </Context.Provider>
  )
}

interface ListProps {
  children: React.ReactNode
}

const List = function TreeList({ children }: ListProps) {
  return React.Children.map(children, (child, index) => {
    if (React.isValidElement<OrderedItemProps>(child)) {
      return (
        <OrderedItem key={index} value={child.props.value} index={index}>
          <List>{child.props.children}</List>
        </OrderedItem>
      )
    }

    return child
  })
}

interface OrderedItemProps {
  value: unknown
  index: number
  children?: React.ReactNode
}

const OrderedItem = function TreeOrderedItem({
  children,
  index,
  value,
}: OrderedItemProps) {
  const { model, setItems } = useListModel()
  const context = useContext(Context)

  const depsRef = useRef<{
    value: unknown
    index: number
    parent: Node | null
  } | null>(null)

  if (!context || !(model instanceof Gtk.TreeListModel)) {
    throw new Error(
      "TreeProvider.Item must be used inside a TreeProvider.Container"
    )
  }

  const [node, setNode] = useState<Node | null>(null)
  const unmountedRef = useRef(false)
  const { rootModel, rootList, parent } = context

  useEffect(() => {
    return () => {
      unmountedRef.current = true
    }
  }, [])

  useEffect(() => {
    if (_.isEqual(depsRef.current, { value, index, parent })) {
      return
    }

    depsRef.current = { value, index, parent }

    const path = parent ? `${parent.path}.${index}` : index.toString()
    const updatedNode = node || { value: null, path: "", children: [] }

    updatedNode.value = value
    updatedNode.path = path

    if (!parent) {
      rootList.splice(index, 0, updatedNode)
      rootModel.splice(index, 0, [path])
    } else {
      parent.children.splice(index, 0, updatedNode)
      rootModel.itemsChanged(Number(path.split(".")[0]), 1, 1)
    }

    setNode(updatedNode)

    setItems((items) => {
      items[path] = value
      return items
    })

    return () => {
      if (
        _.isEqual(depsRef.current, { value, index, parent }) &&
        !unmountedRef.current
      ) {
        return
      }

      if (!parent) {
        rootList.splice(index, 1)
        rootModel.splice(index, 1, [])
      } else {
        parent.children.splice(index, 1)
        rootModel.itemsChanged(Number(path.split(".")[0]), 1, 1)
      }

      setItems((items) => {
        delete items[path]
        return items
      })
    }
  }, [value, index, parent])

  return node ? (
    <Context.Provider value={{ rootList, rootModel, parent: node }}>
      {children}
    </Context.Provider>
  ) : null
}

interface ItemProps {
  children?: React.ReactNode
  value: unknown
}

const Item = function TreeItem(_props: ItemProps) {
  return null
}

export default {
  Container,
  Item,
  List,
}
