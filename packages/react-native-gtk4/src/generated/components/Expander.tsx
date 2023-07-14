import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = JSX.IntrinsicElements["Expander"] & {
  labelWidget?: React.ReactElement
}

const Expander = "Expander"

export default forwardRef<Gtk.Expander, Props>(function ExpanderComponent(
  { labelWidget, ...props },
  ref
) {
  const [labelWidgetNode, setLabelWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const labelWidgetRef = useCallback((node: Gtk.Widget) => {
    setLabelWidgetNode(node)
  }, [])
  const labelWidgetElement = labelWidget
    ? React.cloneElement(labelWidget, {
        ref: labelWidgetRef,
      })
    : null
  return (
    <>
      {labelWidgetElement}
      <Expander ref={ref} labelWidget={labelWidgetNode} {...props} />
    </>
  )
})
