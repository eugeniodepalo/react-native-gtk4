import React, { ForwardedRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
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
  selection?: string[]
  onSelectionChanged?: (ids: string[], selection: unknown[]) => void
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
      factory={renderItem ? itemFactory : null}
      {...props}
    >
      {children}
    </ListView>
  )
})
