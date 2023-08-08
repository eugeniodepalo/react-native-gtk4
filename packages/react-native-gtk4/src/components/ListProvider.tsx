import React, { createContext, useEffect, useMemo, useState } from "react"
import _ from "lodash"
import Gtk from "@girs/node-gtk-4.0"
import useList from "../hooks/useList.js"

export interface ListContext<T = unknown> {
  items: T[]
  setItems: React.Dispatch<React.SetStateAction<T[]>>
  model: Gtk.StringList
}

export const ListContext = createContext<ListContext | null>(null)

interface ContainerProps {
  children: React.ReactNode
}

const Container = function ListProviderContainer<T>({
  children,
}: ContainerProps) {
  const [items, setItems] = useState<T[]>([])
  const model = useMemo(() => new Gtk.StringList(), [])

  const value = useMemo(
    () => ({
      items,
      setItems,
      model,
    }),
    [items, setItems]
  )

  return (
    <ListContext.Provider value={value as ListContext<unknown>}>
      {children}
    </ListContext.Provider>
  )
}

interface ItemProps<T> {
  value: T
  index: number
}

const Item = React.memo(function ListProviderItem<T>({
  value,
  index,
}: ItemProps<T>) {
  const { model, setItems } = useList()

  useEffect(() => {
    setItems((items) => {
      items.splice(index, 0, value)
      return items
    })

    model.splice(index, 0, [""])

    return () => {
      model.remove(index)

      setItems((items) => {
        items.splice(index, 1)
        return items
      })
    }
  }, [value, index])

  return null
}, _.isEqual)

export default {
  Container,
  Item,
}
