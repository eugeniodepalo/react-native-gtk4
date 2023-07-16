import React from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Frame = "Frame"

type Props = Omit<JSX.IntrinsicElements["Frame"], "labelWidget" | "label"> & {
  children: React.ReactNode
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.Frame, Props>(function FrameComponent(
  { label, ...props },
  ref
) {
  const [labelNode, setLabelNode] = React.useState<Gtk.Widget | null>(null)

  const labelRef = (node: Gtk.Widget | null) => {
    setLabelNode(node)
  }

  const labelWithRef =
    label && typeof label !== "string"
      ? React.cloneElement(label, {
          ref: labelRef,
        })
      : null

  return (
    <Frame
      ref={ref}
      label={typeof label === "string" ? label : undefined}
      labelWidget={labelNode ?? undefined}
      {...props}
    >
      {labelWithRef}
    </Frame>
  )
})
