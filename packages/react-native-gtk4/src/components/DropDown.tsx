import React, { ForwardedRef, useEffect, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { DropDown } from "../generated/intrinsics.js"
import { useForwardedRef } from "../utils.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "../hooks/useListItemFactory.js"
import useListContext from "../hooks/useListContext.js"
import ListProvider from "./ListProvider.js"

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
  onSelectedItemChanged?: (id: string, item: T) => void
  selectedItem?: string | null
}

export default forwardRef<Gtk.DropDown, Props<any>>(function DropDownComponent<
  T,
>(
  {
    children,
    renderItem,
    renderPopoverItem = renderItem,
    onSelectedItemChanged,
    selectedItem,
    ...props
  }: Props<T>,
  ref: ForwardedRef<Gtk.DropDown>
) {
  const [dropDown, setDropDown] = useState<Gtk.DropDown | null>(null)
  const [, setInnerRef] = useForwardedRef(ref, setDropDown)
  const list = useListContext<T>()
  const { itemsRef, model } = list
  const itemFactory = useListItemFactory<T>({ render: renderItem, itemsRef })

  const popoverItemFactory = useListItemFactory<T>({
    render: renderPopoverItem,
    itemsRef,
  })

  useEffect(() => {
    const items = itemsRef.current

    if (!dropDown || !items) {
      return
    }

    const selected =
      selectedItem && items[selectedItem] ? items[selectedItem].index : -1

    dropDown.setSelected(selected)

    return () => {
      dropDown.setSelected(-1)
    }
  }, [selectedItem, dropDown, itemsRef])

  return (
    <DropDown
      model={model}
      ref={setInnerRef}
      factory={renderItem ? itemFactory : null}
      listFactory={renderPopoverItem ? popoverItemFactory : null}
      onNotifySelected={(node) => {
        const index = node.selected
        const items = itemsRef.current

        if (!items) {
          return
        }

        const id = Object.keys(items).find((id) => items[id].index === index)

        if (!id) {
          return
        }

        onSelectedItemChanged?.(id, items[id].value)
      }}
      {...props}
    >
      <ListProvider.Container value={list}>{children}</ListProvider.Container>
    </DropDown>
  )
})
