import React, { ForwardedRef, useState } from "react"
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
  "itemFactory" | "popoverItemFactory" | "model"
> & {
  renderPopoverItem?: ListItemFactoryRenderFunction<T>
  renderItem?: ListItemFactoryRenderFunction<T>
}

export default forwardRef<Gtk.DropDown, Props<any>>(function DropDownComponent<
  T,
>(
  { children, renderItem, renderPopoverItem = renderItem, ...props }: Props<T>,
  ref: ForwardedRef<Gtk.DropDown>
) {
  const [, setDropDown] = useState<Gtk.DropDown | null>(null)
  const [, setInnerRef] = useForwardedRef(ref, setDropDown)
  const list = useListContext<T>()
  const { itemsRef, model } = list
  const itemFactory = useListItemFactory<T>({ render: renderItem, itemsRef })

  const popoverItemFactory = useListItemFactory<T>({
    render: renderPopoverItem,
    itemsRef,
  })

  return (
    <DropDown
      model={model}
      ref={setInnerRef}
      factory={renderItem ? itemFactory : null}
      listFactory={renderPopoverItem ? popoverItemFactory : null}
      {...props}
    >
      <ListProvider.Container value={list}>{children}</ListProvider.Container>
    </DropDown>
  )
})
