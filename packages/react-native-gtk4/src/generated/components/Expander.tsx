import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const Expander = "Expander"

export default forwardRef<Gtk.Expander, JSX.IntrinsicElements["Expander"]>(
  function ExpanderComponent({ labelWidget, ...props }, ref) {
    const [labelWidgetRef, setLabelWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setLabelWidgetRef(node)
    }, [])
    return (
      <>
        {labelWidget}
        <Expander ref={ref} labelWidget={labelWidgetRef} {...props} />
      </>
    )
  }
)
