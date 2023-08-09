import Gtk from "@girs/node-gtk-4.0"
import React, { useEffect, useMemo, useRef } from "react"
import ListModelProvider from "./ListModelProvider.js"
import useListModel from "../hooks/useListModel.js"
import _ from "lodash"

interface Props {
  children: React.ReactNode
}

const Container = function ListProviderContainer({ children }: Props) {
  const model = useMemo(
    () =>
      new Gtk.SortListModel({
        model: new Gtk.StringList(),
        sorter: new Gtk.StringSorter(),
      }),
    []
  )

  return <ListModelProvider model={model}>{children}</ListModelProvider>
}

interface ItemProps {
  value: unknown
  index: number
}

const Item = function ListProviderItem({ value, index }: ItemProps) {
  const { model: listModel, setItems } = useListModel()
  const valueRef = useRef<unknown>(null)

  if (
    !(listModel instanceof Gtk.SortListModel) ||
    !(listModel.getModel() instanceof Gtk.StringList)
  ) {
    throw new Error(
      "ListProvider.Item must be used within a ListProvider.Container"
    )
  }

  const model = listModel.getModel() as Gtk.StringList

  useEffect(() => {
    if (_.isEqual(value, valueRef.current)) {
      return
    }

    valueRef.current = value

    const id = index.toString()

    setItems((items) => {
      items[id] = value
      return items
    })

    model.append(id)

    return () => {
      if (_.isEqual(value, valueRef.current)) {
        return
      }

      for (let i = index + 1; i < model.getNItems(); i++) {
        const item = model.getItem(i)

        if (item) {
          const itemId = item.getProperty("string") as string

          if (itemId === id) {
            model.remove(i)
            break
          }
        }
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
}
