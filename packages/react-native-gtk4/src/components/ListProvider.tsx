import Gtk from "@girs/node-gtk-4.0"
import React, { createContext, useContext, useEffect } from "react"

export type ListProviderItem<T> = {
  value: T
  index: number
}

export type ListProviderItemRecord<T> = Record<string, ListProviderItem<T>>

export interface ListContext<T = unknown> {
  items: ListProviderItemRecord<T>
  model: Gtk.StringList
}

const ListContext = createContext<ListContext | null>(null)

interface ContainerProps<T> {
  value: ListContext<T>
  children: React.ReactNode
}

const Container = function ListProviderContainer<T>({
  value,
  children,
}: ContainerProps<T>) {
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}

interface ItemProps<T> {
  value: T
  id: string
}

const Item = function ListProviderItem<T>({ value, id }: ItemProps<T>) {
  const context = useContext(ListContext)

  if (!context) {
    throw new Error(
      "ListProvider.Item must be used inside a ListProvider.Container"
    )
  }

  useEffect(() => {
    const { items, model } = context

    items[id] = {
      value,
      index: model.getNItems(),
    }

    model.append(id)

    return () => {
      if (model.getString(items[id].index) === id) {
        model.remove(items[id].index)
      }

      delete items[id]
    }
  }, [value, id])

  return null
}

export default {
  Container,
  Item,
}
