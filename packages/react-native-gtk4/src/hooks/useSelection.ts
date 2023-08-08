import Gtk from "@girs/node-gtk-4.0"
import { useMemo, useCallback, useEffect } from "react"
import { ListItemRecord } from "./useList.js"

interface Props<T> {
  selectionMode: Gtk.SelectionMode
  model: Gtk.StringList
  itemsRef: React.RefObject<ListItemRecord<T>>
  onSelectionChanged?: (selection: string[], values: T[]) => void
  selection: string[]
}

export default function useSelection<T>({
  selectionMode,
  model,
  selection = [],
  itemsRef,
  onSelectionChanged,
}: Props<T>): Gtk.SelectionModel | null {
  const selectionModel = useMemo<Gtk.SelectionModel>(() => {
    switch (selectionMode) {
      case Gtk.SelectionMode.SINGLE:
        return new Gtk.SingleSelection({ model, autoselect: false })
      case Gtk.SelectionMode.MULTIPLE:
        return new Gtk.MultiSelection({ model })
      default:
        return new Gtk.NoSelection({ model })
    }
  }, [selectionMode])

  const handleSelectionChanged = useCallback(() => {
    const items = itemsRef.current

    if (!onSelectionChanged || !items) {
      return
    }

    const bitset = selectionModel.getSelection()
    const [, iter] = Gtk.bitsetIterInitFirst(bitset)
    const newSelection: string[] = []

    while (iter.isValid()) {
      const index = iter.getValue()
      const id = Object.keys(items).find((id) => items[id].index === index)

      if (!id) {
        continue
      }

      newSelection.push(id)
      iter.next()
    }

    onSelectionChanged(
      newSelection,
      newSelection.map((id) => items[id].value)
    )
  }, [selectionModel])

  useEffect(() => {
    const items = itemsRef.current

    if (!selectionModel || !items) {
      return
    }

    selectionModel.unselectAll()

    for (const id of selection) {
      selectionModel.selectItem(items[id].index, false)
    }

    selectionModel.on("selection-changed", handleSelectionChanged)

    return () => {
      selectionModel.off("selection-changed", handleSelectionChanged)
    }
  }, [selection, selectionModel])

  return selectionModel
}
