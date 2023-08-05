import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { HeaderBar } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import { useForwardedRef } from "../utils.js"

type Props = Omit<JSX.IntrinsicElements["HeaderBar"], "titleWidget"> & {
  title?: (React.ReactElement & React.RefAttributes<Gtk.Widget>) | null
}

export default forwardRef<Gtk.HeaderBar, Props>(function HeaderBarComponent(
  { title, ...props },
  ref
) {
  const [titleWidget, setTitleWidget] = useState<Gtk.Widget | null>(null)
  const [, setTitleRef] = useForwardedRef(title?.ref, setTitleWidget)

  return (
    <>
      {title
        ? createPortal(
            React.cloneElement(title, {
              ref: setTitleRef,
            })
          )
        : null}
      <HeaderBar ref={ref} titleWidget={titleWidget} {...props} />
    </>
  )
})
