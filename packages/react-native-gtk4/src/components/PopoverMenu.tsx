import React from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { BasePopover, BasePopoverProps } from "./Popover.js"

type Props = Omit<BasePopoverProps, "elementType">

export default forwardRef<Gtk.Popover, Props>(
  function PopoverComponent(props, ref) {
    return <BasePopover {...props} ref={ref} elementType="PopoverMenu" />
  }
)
