import { useMemo, useRef, useState } from "react"
import {
  ListContext,
  ListProviderItemRecord,
} from "../components/ListProvider.js"
import Gtk from "@girs/node-gtk-4.0"

export default function useListContext<T>(): ListContext<T> {
  const itemsRef = useRef<ListProviderItemRecord<T>>({})
  const [, setItems] = useState<ListProviderItemRecord<T>>({})
  const model = useMemo<Gtk.StringList>(() => new Gtk.StringList(), [])

  return useMemo<ListContext<T>>(
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
