import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { useMemo, useCallback, useEffect } from "react"
import useListModel from "./useListModel.js"

export type OnSelectionChanged = (
  selection: number[],
  values: unknown[]
) => void

interface Props {
  selectionMode: Gtk.SelectionMode
  onSelectionChanged?: OnSelectionChanged
  selection: number[]
}

export default function useSelection({
  selectionMode,
  selection = [],
  onSelectionChanged,
}: Props): Gtk.SelectionModel | null {
  const { model, items } = useListModel()

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
      newSelection.map((index) => {
        let item = model.getItem(index)

        if (!item) {
          return null
        }

        if (item instanceof Gtk.TreeListRow) {
          item = item.item
        }

        return items[item.getProperty("string") as string]
      })
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
  }, [selection, selectionModel, items])

  return selectionModel
}
