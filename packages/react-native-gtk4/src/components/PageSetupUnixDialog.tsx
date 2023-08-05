import React from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { PageSetupUnixDialog } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

export default forwardRef<
  Gtk.PageSetupUnixDialog,
  JSX.IntrinsicElements["PageSetupUnixDialog"]
>(function PageSetupUnixDialogComponent(props, ref) {
  return createPortal(<PageSetupUnixDialog ref={ref} {...props} />)
})
