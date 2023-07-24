import React, { useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { BasePopover, BasePopoverProps } from "./Popover.js"

type Props = Omit<
  JSX.IntrinsicElements["PopoverMenu"] & BasePopoverProps,
  "elementType"
>

export default forwardRef<Gtk.PopoverMenu, Props>(
  function PopoverMenuComponent(props, ref) {
    const popoverRef = useRef<Gtk.PopoverMenu | null>(null)
    useImperativeHandle(ref, () => popoverRef.current!)
    return <BasePopover {...props} ref={popoverRef} elementType="PopoverMenu" />
  }
)
