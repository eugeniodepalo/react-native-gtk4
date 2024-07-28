import React from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { PageSetupUnixDialog } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

export default forwardRef<
  Gtk.PageSetupUnixDialog,
  React.JSX.IntrinsicElements["PageSetupUnixDialog"]
>(function PageSetupUnixDialogComponent(props, ref) {
  return createPortal(<PageSetupUnixDialog ref={ref} {...props} />)
})
