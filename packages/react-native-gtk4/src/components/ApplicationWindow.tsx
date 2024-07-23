import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { ApplicationWindow } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import { createPortal } from "../portal.js"

type Props = Omit<JSX.IntrinsicElements["ApplicationWindow"], "titlebar"> & {
  titlebar?: (React.ReactElement & { ref?: React.Ref<Gtk.Widget> }) | null
}

export default forwardRef<Gtk.ApplicationWindow, Props>(
  function ApplicationWindowComponent({ titlebar, ...props }, ref) {
    const [titlebarWidget, setTitlebarWidget] = useState<Gtk.Widget | null>(
      null
    )

    const [, setTitlebarRef] = useForwardedRef(titlebar?.ref, setTitlebarWidget)

    return (
      <>
        {titlebar
          ? createPortal(
              React.cloneElement(titlebar, {
                ref: setTitlebarRef,
              })
            )
          : null}
        <ApplicationWindow
          ref={ref}
          key={titlebarWidget ? "with-titlebar" : "without-titlebar"}
          titlebar={titlebarWidget}
          {...props}
        />
      </>
    )
  }
)
