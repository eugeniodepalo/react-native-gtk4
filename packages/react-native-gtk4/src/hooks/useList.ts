import { useMemo } from "react"
import {
  ListContext,
  ListProviderItemRecord,
} from "../components/ListProvider.js"
import Gtk from "@girs/node-gtk-4.0"

export default function useList<T>(): ListContext<T> {
  const items = useMemo<ListProviderItemRecord<T>>(() => ({}), [])
  const model = useMemo<Gtk.StringList>(() => new Gtk.StringList(), [])
  return useMemo<ListContext<T>>(() => ({ items, model }), [])
}
