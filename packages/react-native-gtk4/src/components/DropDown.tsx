import React, { ForwardedRef, useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { DropDown } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"
import useList from "../hooks/useList.js"

type Props<T> = Omit<
  JSX.IntrinsicElements["DropDown"],
  | "itemFactory"
  | "popoverItemFactory"
  | "model"
  | "selectedItem"
  | "selected"
  | "onNotifySelectedItem"
  | "onNotifySelectedItemChanged"
> & {
  renderPopoverItem?: ListItemFactoryRenderFunction<T>
  renderItem?: ListItemFactoryRenderFunction<T>
  onSelectedItemChanged?: (index: number, item: T) => void
  selectedItem?: number
}

export default forwardRef<Gtk.DropDown, Props<any>>(function DropDownComponent<
  T,
>(
  {
    renderItem,
    renderPopoverItem = renderItem,
    onSelectedItemChanged,
    selectedItem = -1,
    ...props
  }: Props<T>,
  ref: ForwardedRef<Gtk.DropDown>
) {
  const [innerRef, setInnerRef] = useForwardedRef(ref)
  const itemFactory = useListItemFactory<T>(renderItem)
  const popoverItemFactory = useListItemFactory<T>(renderPopoverItem)
  const { items, model } = useList<T>()

  useEffect(() => {
    const dropDown = innerRef.current

    if (!dropDown) {
      return
    }

    dropDown.setSelected(selectedItem)
  }, [selectedItem, items])

  return (
    <DropDown
      model={model}
      ref={setInnerRef}
      factory={renderItem ? itemFactory : null}
      listFactory={renderPopoverItem ? popoverItemFactory : null}
      onNotifySelected={(node) => {
        onSelectedItemChanged?.(node.selected, items[node.selected])
      }}
      {...props}
    />
  )
})
