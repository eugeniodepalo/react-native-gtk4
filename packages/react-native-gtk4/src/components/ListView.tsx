import React, { ForwardedRef } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { ListView } from "../generated/intrinsics.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"
import useSelection from "../hooks/useSelection.js"

type Props<T> = Omit<
  JSX.IntrinsicElements["ListView"],
  "factory" | "headerFactory" | "model"
> & {
  selectionMode?: Gtk.SelectionMode
  selection?: number[]
  onSelectionChanged?: (indexes: number[], selection: unknown[]) => void
  renderItem?: ListItemFactoryRenderFunction<T> | null
}

export default forwardRef<Gtk.ListView, Props<any>>(function ListViewComponent<
  T,
>(
  {
    renderItem,
    selectionMode = Gtk.SelectionMode.NONE,
    selection = [],
    onSelectionChanged,
    ...props
  }: Props<T>,
  ref: ForwardedRef<Gtk.ListView>
) {
  const itemFactory = useListItemFactory(renderItem)

  const selectionModel = useSelection({
    selectionMode,
    selection,
    onSelectionChanged,
  })

  return (
    <ListView
      model={selectionModel}
      ref={ref}
      factory={itemFactory}
      {...props}
    />
  )
})
