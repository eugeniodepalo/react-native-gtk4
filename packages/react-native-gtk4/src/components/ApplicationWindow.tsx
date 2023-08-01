import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ApplicationWindow } from "../generated/intrinsics.js"
import { useForwardedRef } from "../utils.js"
import { createPortal } from "../portal.js"

type Props = Omit<JSX.IntrinsicElements["ApplicationWindow"], "titlebar"> & {
  children: React.ReactNode
  titlebar?: React.ReactElement & React.RefAttributes<Gtk.Widget>
}

export default forwardRef<Gtk.ApplicationWindow, Props>(
  function ApplicationWindowComponent({ titlebar, ...props }, ref) {
    const [titlebarWidget, setTitlebarWidget] = useState<Gtk.Widget | null>(
      null
    )

    const [, setTitlebarRef] = useForwardedRef(titlebar?.ref, setTitlebarWidget)

    return (
      <>
        {createPortal(
          titlebar
            ? React.cloneElement(titlebar, {
                ref: setTitlebarRef,
              })
            : null
        )}
        <ApplicationWindow
          ref={ref}
          key={titlebarWidget ? "with-titlebar" : "without-titlebar"}
          titlebar={titlebarWidget ?? undefined}
          {...props}
        />
      </>
    )
  }
)
