import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = Omit<JSX.IntrinsicElements["Frame"], "labelWidget" | "ref"> & {
  labelWidget?: React.ReactElement
}

const Frame = "Frame"

export default forwardRef<Gtk.Frame, Props>(function FrameComponent(
  { labelWidget, ...props },
  ref
) {
  const [labelWidgetNode, setLabelWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const labelWidgetRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setLabelWidgetNode(node))
  }, [])
  const labelWidgetElement = labelWidget
    ? React.cloneElement(labelWidget, {
        ref: labelWidgetRef,
      })
    : null
  return (
    <>
      {labelWidgetElement}
      <Frame ref={ref} labelWidget={labelWidgetNode} {...props} />
    </>
  )
})
