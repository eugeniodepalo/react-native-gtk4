import React from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { PrintUnixDialog } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

export default forwardRef<
  Gtk.PrintUnixDialog,
  JSX.IntrinsicElements["PrintUnixDialog"]
>(function PrintUnixDialogComponent(props, ref) {
  return createPortal(<PrintUnixDialog ref={ref} {...props} />)
})
