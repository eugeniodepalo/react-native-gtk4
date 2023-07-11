import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const Popover = "Popover"

export default forwardRef<Gtk.Popover, JSX.IntrinsicElements["Popover"]>(
  function PopoverComponent({ defaultWidget, ...props }, ref) {
    const [defaultWidgetRef, setDefaultWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setDefaultWidgetRef(node)
    }, [])
    return (
      <>
        {defaultWidget}
        <Popover ref={ref} defaultWidget={defaultWidgetRef} {...props} />
      </>
    )
  }
)
