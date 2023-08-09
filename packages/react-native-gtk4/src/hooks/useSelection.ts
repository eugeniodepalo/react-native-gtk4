import Gtk from "@girs/node-gtk-4.0"
import { useMemo, useCallback, useEffect } from "react"
import useListModel from "./useListModel.js"

export type OnSelectionChanged = (
  selection: string[],
  values: unknown[]
) => void

interface Props {
  selectionMode: Gtk.SelectionMode
  onSelectionChanged?: OnSelectionChanged
  selection: string[]
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
    const newSelection: string[] = []

    while (iter.isValid()) {
      const index = iter.getValue()
      let item = model.getItem(index)

      if (!item) {
        continue
      }

      if (item instanceof Gtk.TreeListRow) {
        item = item.item
      }

      newSelection.push(item.getProperty("string") as string)
      iter.next()
    }

    onSelectionChanged(
      newSelection,
      newSelection.map((id) => items[id])
    )
  }, [selectionModel])

  useEffect(() => {
    if (!selectionModel) {
      return
    }

    selectionModel.unselectAll()

    for (const id of selection) {
      let selectedItem

      for (let i = 0; i < model.getNItems(); i++) {
        let item = model.getItem(i)

        if (!item) {
          continue
        }

        if (item instanceof Gtk.TreeListRow) {
          item = item.item
        }

        if (item.getProperty("string") === id) {
          selectedItem = i
          break
        }
      }

      if (selectedItem === undefined) {
        continue
      }

      selectionModel.selectItem(selectedItem, false)
    }

    selectionModel.on("selection-changed", handleSelectionChanged)

    return () => {
      selectionModel.off("selection-changed", handleSelectionChanged)
    }
  }, [selection, selectionModel])

  return selectionModel
}
