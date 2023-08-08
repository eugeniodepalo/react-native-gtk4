import Gtk from "@girs/node-gtk-4.0"
import { useMemo, useCallback, useEffect } from "react"
import useList from "./useList.js"

interface Props<T> {
  selectionMode: Gtk.SelectionMode
  onSelectionChanged?: (selection: number[], values: T[]) => void
  selection: number[]
}

export default function useSelection<T>({
  selectionMode,
  selection = [],
  onSelectionChanged,
}: Props<T>): Gtk.SelectionModel | null {
  const { model, items } = useList<T>()

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
    if (!onSelectionChanged) {
      return
    }

    const bitset = selectionModel.getSelection()
    const [, iter] = Gtk.bitsetIterInitFirst(bitset)
    const newSelection: number[] = []

    while (iter.isValid()) {
      newSelection.push(iter.getValue())
      iter.next()
    }

    onSelectionChanged(
      newSelection,
      newSelection.map((index) => items[index])
    )
  }, [selectionModel])

  useEffect(() => {
    if (!selectionModel) {
      return
    }

    selectionModel.unselectAll()

    for (const index of selection) {
      selectionModel.selectItem(index, false)
    }

    selectionModel.on("selection-changed", handleSelectionChanged)

    return () => {
      selectionModel.off("selection-changed", handleSelectionChanged)
    }
  }, [selection, selectionModel])

  return selectionModel
}
