import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { Frame } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import { createPortal } from "../portal.js"

type Props = Omit<
  React.JSX.IntrinsicElements["Frame"],
  "labelWidget" | "label"
> & {
  label?: string | (React.ReactElement & { ref?: React.Ref<Gtk.Widget> }) | null
}

export default forwardRef<Gtk.Frame, Props>(function FrameComponent(
  { label, ...props },
  ref
) {
  const [labelWidget, setLabelWidget] = useState<Gtk.Widget | null>(null)
  const labelElement = typeof label !== "string" ? label : null
  const [, setLabelRef] = useForwardedRef(labelElement?.ref, setLabelWidget)

  return (
    <>
      {labelElement
        ? createPortal(
            React.cloneElement(labelElement, {
              ref: setLabelRef,
            })
          )
        : null}
      <Frame
        ref={ref}
        {...(typeof label === "string" ? { label } : { labelWidget })}
        {...props}
      />
    </>
  )
})
