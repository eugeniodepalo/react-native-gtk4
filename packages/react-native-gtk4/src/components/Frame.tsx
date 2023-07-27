import React, { useCallback, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Frame } from "../generated/intrinsics.js"

type Props = Omit<JSX.IntrinsicElements["Frame"], "labelWidget" | "label"> & {
  children: React.ReactNode
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
}

export default forwardRef<Gtk.Frame, Props>(function FrameComponent(
  { label, ...props },
  ref
) {
  const [labelWidget, setLabelWidget] = useState<Gtk.Widget | null>(null)

  const labelRef = useCallback((node: Gtk.Widget | null) => {
    setLabelWidget(node)
  }, [])

  return (
    <Frame
      ref={ref}
      label={typeof label === "string" ? label : undefined}
      labelWidget={labelWidget ?? undefined}
      {...props}
    >
      {label && typeof label !== "string"
        ? React.cloneElement(label, {
            ref: labelRef,
          })
        : null}
    </Frame>
  )
})
