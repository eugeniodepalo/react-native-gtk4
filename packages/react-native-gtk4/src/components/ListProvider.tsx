import Gtk from "@girs/node-gtk-4.0"
import React, { useEffect, useMemo, useRef } from "react"
import ListModelProvider from "./ListModelProvider.js"
import useListModel from "../hooks/useListModel.js"
import _ from "lodash"

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
      return <OrderedItem key={index} value={child.props.value} index={index} />
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
  const depsRef = useRef<{ value: unknown; index: number } | null>(null)
  const unmountedRef = useRef(false)

  if (!(model instanceof Gtk.StringList)) {
    throw new Error(
      "ListProvider.Item must be used within a ListProvider.Container"
    )
  }

  useEffect(() => {
    return () => {
      unmountedRef.current = true
    }
  }, [])

  useEffect(() => {
    if (_.isEqual(depsRef.current, { value, index })) {
      return
    }

    depsRef.current = { value, index }

    const id = index.toString()

    setItems((items) => {
      items[id] = value
      return items
    })

    model.splice(index, 0, [id])

    return () => {
      if (
        _.isEqual(depsRef.current, { value, index }) &&
        !unmountedRef.current
      ) {
        return
      }

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
