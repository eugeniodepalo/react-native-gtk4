import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const Stack = "Stack"

export default forwardRef<Gtk.Stack, JSX.IntrinsicElements["Stack"]>(
  function StackComponent({ visibleChild, ...props }, ref) {
    const [visibleChildRef, setVisibleChildRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setVisibleChildRef(node)
    }, [])
    return (
      <>
        {visibleChild}
        <Stack ref={ref} visibleChild={visibleChildRef} {...props} />
      </>
    )
  }
)
