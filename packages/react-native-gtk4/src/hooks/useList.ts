import { useMemo, useRef, useState } from "react"
import Gtk from "@girs/node-gtk-4.0"

export type ListItem<T> = {
  value: T
  index: number
}

export type ListItemRecord<T> = Record<string, ListItem<T>>

export interface List<T = unknown> {
  itemsRef: React.RefObject<ListItemRecord<T>>
  setItems: (items: ListItemRecord<T>) => void
  model: Gtk.StringList
}

export default function useList<T>(): List<T> {
  const itemsRef = useRef<ListItemRecord<T>>({})
  const [, setItems] = useState<ListItemRecord<T>>({})
  const model = useMemo(() => new Gtk.StringList(), [])

  return useMemo(
    () => ({
      itemsRef,
      setItems: (value) => {
        itemsRef.current = value
        setItems(value)
      },
      model,
    }),
    [itemsRef, setItems, model]
  )
}
