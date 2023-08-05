import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Frame } from "../generated/intrinsics.js"
import { useForwardedRef } from "../utils.js"

type Props = Omit<JSX.IntrinsicElements["Frame"], "labelWidget" | "label"> & {
  label?:
    | string
    | ((React.ReactElement & React.RefAttributes<Gtk.Widget>) | null)
}

export default forwardRef<Gtk.Frame, Props>(function FrameComponent(
  { label, ...props },
  ref
) {
  const [labelWidget, setLabelWidget] = useState<Gtk.Widget | null>(null)
  const labelElement = typeof label !== "string" ? label : null
  const [, setLabelRef] = useForwardedRef(labelElement?.ref, setLabelWidget)

  return (
    <Frame
      ref={ref}
      label={typeof label === "string" ? label : null}
      labelWidget={labelWidget}
      {...props}
    >
      {labelElement
        ? React.cloneElement(labelElement, {
            ref: setLabelRef,
          })
        : null}
    </Frame>
  )
})
