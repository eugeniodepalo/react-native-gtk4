import React from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import AbstractPopover, { AbstractPopoverProps } from "./AbstractPopover.js"

type Props = Omit<AbstractPopoverProps<"PopoverMenu">, "elementType">

export default forwardRef<Gtk.PopoverMenu, Props>(
  function PopoverComponent(props, ref) {
    return <AbstractPopover {...props} ref={ref} elementType="PopoverMenu" />
  }
)
