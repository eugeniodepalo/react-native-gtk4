import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const Frame = "Frame"

export default forwardRef<Gtk.Frame, JSX.IntrinsicElements["Frame"]>(
  function FrameComponent({ labelWidget, ...props }, ref) {
    const [labelWidgetRef, setLabelWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setLabelWidgetRef(node)
    }, [])
    return (
      <>
        {labelWidget}
        <Frame ref={ref} labelWidget={labelWidgetRef} {...props} />
      </>
    )
  }
)
