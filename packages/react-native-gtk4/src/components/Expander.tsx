import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../index.js"

const Expander = "Expander"

export default forwardRef<Gtk.Expander, JSX.IntrinsicElements["Expander"]>(
  function ExpanderComponent({ labelWidget, ...props }, ref) {
    const [labelWidgetRef, setLabelWidgetRef] = useState<
      Gtk.Expander | undefined
    >()
    useCallback((node: Gtk.Expander) => {
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
