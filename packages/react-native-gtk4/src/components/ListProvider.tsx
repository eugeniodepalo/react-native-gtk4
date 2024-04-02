import Gtk from "@girs/node-gtk-4.0"
import React, { createContext, useContext, useEffect, useMemo } from "react"
import ListModelProvider from "./ListModelProvider.js"
import useListModel from "../hooks/useListModel.js"

interface ContainerProps {
  children: React.ReactNode
}

const Container = function ListProviderContainer({ children }: ContainerProps) {
  const model = useMemo(() => new Gtk.StringList(), [])
  return <ListModelProvider model={model}>{children}</ListModelProvider>
}

interface ListProps {
  children: React.ReactNode
}

const List = function ListProviderList({ children }: ListProps) {
  const { model } = useListModel()

  if (!(model instanceof Gtk.StringList)) {
    throw new Error(
      "ListProvider.List must be used within a ListProvider.Container"
    )
  }

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
  value: T
}

const ItemContext = createContext<number | null>(null)

const Item = function ListProviderItem<T>({ value }: ItemProps<T>) {
  const { model, setItems } = useListModel()
  const index = useContext(ItemContext)

  if (!(model instanceof Gtk.StringList) || index === null) {
    throw new Error(
      "ListProvider.Item must be used within a ListProvider.Container"
    )
  }

  useEffect(() => {
    const id = typeof value === "string" ? value : index.toString()

    setItems((items) => {
      items[id] = value
      return items
    })

    model.splice(index, 0, [id])

    return () => {
      if (model.getItem(index)) {
        model.remove(index)
      }

      setItems((items) => {
        delete items[id]
        return items
      })
    }
  }, [value, index])

  return null
}
export default {
  Container,
  Item,
  List,
}
