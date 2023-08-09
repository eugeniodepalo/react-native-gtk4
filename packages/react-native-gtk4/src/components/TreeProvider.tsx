import Gtk from "@girs/node-gtk-4.0"
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react"
import ListModelProvider from "./ListModelProvider.js"
import useListModel from "../hooks/useListModel.js"
import _ from "lodash"

interface Node {
  id: string
  value: unknown
  parent: Node | null
  children: Record<string, Node>
}

interface TreeContext {
  rootList: Gtk.StringList
  parent: Node
}

const TreeContext = createContext<TreeContext | null>(null)

interface Props {
  children: React.ReactNode
  autoexpand?: boolean
}

function getPath(node: Node): string {
  const path = []

  let current: Node | null = node

  while (current && current.parent) {
    path.push(current.id)
    current = current.parent
  }

  return path.reverse().join(".")
}

function getNode(root: Node | null, path: string): Node | null {
  if (!root) {
    return null
  }

  const parts = path.split(".")

  let node: Node = root

  for (const id of parts) {
    const child = node.children[id]

    if (!child) {
      return null
    }

    node = child
  }

  return node
}

const Container = function TreeProvider({
  children,
  autoexpand = true,
}: Props) {
  const rootList = useMemo(() => new Gtk.StringList(), [])

  const rootNode = useMemo<Node>(
    () => ({ value: null, parent: null, id: "", children: {} }),
    []
  )

  const model = useMemo(
    () =>
      Gtk.TreeListModel.new(
        new Gtk.SortListModel({
          model: rootList,
          sorter: new Gtk.StringSorter(),
        }),
        false,
        autoexpand,
        (item) => {
          const path = item.getProperty("string") as string
          const node = getNode(rootNode, path)

          if (!node) {
            return null
          }

          const childPaths = Object.values(node.children).map(getPath)
          const children = new Gtk.StringList()

          for (const path of childPaths) {
            children.append(path)
          }

          return new Gtk.SortListModel({
            model: children,
            sorter: new Gtk.StringSorter(),
          })
        }
      ),
    []
  )

  return (
    <TreeContext.Provider value={{ rootList, parent: rootNode }}>
      <ListModelProvider model={model}>{children}</ListModelProvider>
    </TreeContext.Provider>
  )
}

const Item = function TreeItem({
  children,
  index,
  value,
}: {
  children?: React.ReactNode
  index: number
  value: unknown
}) {
  const { model, setItems } = useListModel()
  const context = useContext(TreeContext)
  const valueRef = useRef<unknown>(null)

  if (!context || !(model instanceof Gtk.TreeListModel)) {
    throw new Error("TreeItem must be used inside a TreeProvider")
  }

  const { rootList, parent } = context

  const node = useMemo<Node>(
    () => ({ value, parent, id: index.toString(), children: {} }),
    [value, parent, index]
  )

  useEffect(() => {
    if (_.isEqual(value, valueRef.current)) {
      return
    }

    valueRef.current = value

    const id = getPath(node)

    parent.children[index.toString()] = node

    if (!parent.parent) {
      rootList.append(id)
    }

    setItems((items) => {
      items[id] = value
      return items
    })

    return () => {
      if (_.isEqual(value, valueRef.current)) {
        return
      }

      delete parent.children[index.toString()]

      setItems((items) => {
        delete items[id]
        return items
      })

      if (!parent.parent) {
        for (let i = index + 1; i < rootList.getNItems(); i++) {
          const item = rootList.getItem(i)

          if (item) {
            const itemId = item.getProperty("string") as string

            if (itemId === id) {
              rootList.remove(i)
              break
            }
          }
        }
      }
    }
  }, [value, index])

  return (
    <TreeContext.Provider value={{ rootList, parent: node }}>
      {children}
    </TreeContext.Provider>
  )
}

export default {
  Container,
  Item,
}
