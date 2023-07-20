import React, { useCallback, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"

const Frame = "Frame"

type Props = Omit<JSX.IntrinsicElements["Frame"], "labelWidget" | "label"> & {
  children: React.ReactNode
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.Frame, Props>(function FrameComponent(
  { label, ...props },
  ref
) {
  const [labelNode, setLabelNode] = useState<Gtk.Widget | null>(null)

  const labelRef = useCallback((node: Gtk.Widget | null) => {
    setLabelNode(node)
  }, [])

  return (
    <Frame
      ref={ref}
      label={typeof label === "string" ? label : undefined}
      labelWidget={labelNode ?? undefined}
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
