import React, { ForwardedRef, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ListView } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import ListProvider from "./ListProvider.js"
import useListContext from "../hooks/useListContext.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"
import useSelection from "../hooks/useSelection.js"

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
  const list = useListContext<T>()
  const { itemsRef, model } = list

  const itemFactory = useListItemFactory<T>({
    render: renderItem,
    itemsRef,
  })

  const selectionModel = useSelection({
    selectionMode,
    selection,
    model,
    onSelectionChanged,
    itemsRef,
  })

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
