import Gtk from "@girs/node-gtk-4.0"
import React, { useEffect, useMemo } from "react"
import ListModelProvider from "./ListModelProvider.js"
import useListModel from "../hooks/useListModel.js"

interface Props {
  children: React.ReactNode
}

const Container = function ListProviderContainer({ children }: Props) {
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
    if (React.isValidElement<ItemProps>(child)) {
      return (
        <OrderedItem
          key={child.key ?? index}
          value={child.props.value}
          index={index}
        />
      )
    }

    return child
  })
}

interface OrderedItemProps {
  value: unknown
  index: number
}

const OrderedItem = function ListProviderItem({
  value,
  index,
}: OrderedItemProps) {
  const { model, setItems } = useListModel()

  if (!(model instanceof Gtk.StringList)) {
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
      model.remove(index)

      setItems((items) => {
        delete items[id]
        return items
      })
    }
  }, [value, index])

  return null
}

interface ItemProps {
  value: unknown
}

const Item = function ListProviderItem(_props: ItemProps) {
  return null
}

export default {
  Container,
  Item,
  List,
}
