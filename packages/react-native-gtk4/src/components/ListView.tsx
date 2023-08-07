import React, {
  ForwardedRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ListView } from "../generated/intrinsics.js"
import { useForwardedRef } from "../utils.js"
import ListProvider from "./ListProvider.js"
import useList from "../hooks/useList.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"

type Props<T> = Omit<
  JSX.IntrinsicElements["ListView"],
  "factory" | "headerFactory" | "model"
> & {
  selectionMode?: Gtk.SelectionMode
  selection?: string[]
  onSelectionChanged?: (ids: string[], selection: T[]) => void
  renderItem?: ListItemFactoryRenderFunction<T>
}

export default forwardRef<Gtk.ListView, Props<any>>(function ListViewComponent<
  T,
>(
  {
    children,
    renderItem,
    selectionMode = Gtk.SelectionMode.NONE,
    selection = [],
    onSelectionChanged,
    ...props
  }: Props<T>,
  ref: ForwardedRef<Gtk.ListView>
) {
  const [, setListView] = useState<Gtk.ListView | null>(null)
  const [, setInnerRef] = useForwardedRef(ref, setListView)
  const list = useList<T>()
  const { items, model } = list
  const itemFactory = useListItemFactory<T>({ render: renderItem, items })

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
    if (!selectionModel) {
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

  return (
    <ListView
      model={selectionModel}
      ref={setInnerRef}
      factory={renderItem ? itemFactory : null}
      {...props}
    >
      <ListProvider.Container value={list}>{children}</ListProvider.Container>
    </ListView>
  )
})
