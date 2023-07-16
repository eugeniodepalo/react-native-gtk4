import React, { useEffect, useImperativeHandle } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Expander = "Expander"

type Props = Omit<
  JSX.IntrinsicElements["Expander"],
  "labelWidget" | "label"
> & {
  children: React.ReactNode
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.Expander, Props>(function ExpanderComponent(
  { label, ...props },
  ref
) {
  const [labelNode, setLabelNode] = React.useState<Gtk.Widget | null>(null)
  const [expanderNode, setExpanderNode] = React.useState<Gtk.Expander | null>(
    null
  )
  useImperativeHandle(ref, () => expanderNode!)

  const labelRef = (node: Gtk.Widget | null) => {
    setLabelNode(node)
  }

  const expanderRef = (node: Gtk.Expander | null) => {
    setExpanderNode(node)
  }

  const labelWithRef =
    label && typeof label !== "string"
      ? React.cloneElement(label, {
          ref: labelRef,
        })
      : null

  useEffect(() => {
    if (!labelNode || !expanderNode) {
      return
    }

    labelNode.unparent()
    expanderNode.setLabelWidget(labelNode)
  }, [labelNode])

  return (
    <Expander
      ref={expanderRef}
      label={typeof label === "string" ? label : undefined}
      {...props}
    >
      {labelWithRef}
    </Expander>
  )
})
