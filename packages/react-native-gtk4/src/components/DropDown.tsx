import React, { ForwardedRef } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { DropDown } from "../generated/intrinsics.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"
import useListModel from "../hooks/useListModel.js"
import ListProvider from "./ListProvider.js"

type Props<T> = Omit<
  React.JSX.IntrinsicElements["DropDown"],
  | "itemFactory"
  | "popoverItemFactory"
  | "model"
  | "selectedItem"
  | "selected"
  | "onNotifySelectedItem"
  | "onNotifySelectedItemChanged"
> & {
  renderPopoverItem?: ListItemFactoryRenderFunction<T> | null
  renderItem?: ListItemFactoryRenderFunction<T> | null
  onSelectedItemChanged?: (index: number, item: T) => void
  selectedItem?: number
}

const Inner = React.forwardRef<Gtk.DropDown, Props<any>>(
  function DropDownInnerComponent<T>(
    {
      renderItem,
      renderPopoverItem = renderItem,
      onSelectedItemChanged,
      selectedItem = -1,
      ...props
    }: Props<T>,
    ref: ForwardedRef<Gtk.DropDown>
  ) {
    const itemFactory = useListItemFactory(renderItem)
    const popoverItemFactory = useListItemFactory(renderPopoverItem)
    const { items, model } = useListModel()

    return (
      <DropDown
        model={model}
        ref={ref}
        selected={selectedItem}
        onNotifySelected={(node) => {
          if (node.selected !== selectedItem) {
            const id = model
              .getItem(node.selected)
              ?.getProperty("string") as string

            onSelectedItemChanged?.(node.selected, items[id] as T)
          }
        }}
        factory={itemFactory}
        listFactory={popoverItemFactory}
        {...props}
      />
    )
  }
)

export default forwardRef<Gtk.DropDown, Props<any>>(function DropDownComponent<
  T,
>({ children, ...props }: Props<T>, ref: ForwardedRef<Gtk.DropDown>) {
  return (
    <ListProvider.Container>
      <Inner ref={ref} {...props} />
      <ListProvider.List>{children}</ListProvider.List>
    </ListProvider.Container>
  )
})
