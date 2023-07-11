import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const Paned = "Paned"

export default forwardRef<Gtk.Paned, JSX.IntrinsicElements["Paned"]>(
  function PanedComponent({ endChild, startChild, ...props }, ref) {
    const [endChildRef, setEndChildRef] = useState<Gtk.Widget | undefined>()
    useCallback((node: Gtk.Widget) => {
      setEndChildRef(node)
    }, [])
    const [startChildRef, setStartChildRef] = useState<Gtk.Widget | undefined>()
    useCallback((node: Gtk.Widget) => {
      setStartChildRef(node)
    }, [])
    return (
      <>
        {endChild}
        {startChild}
        <Paned
          ref={ref}
          endChild={endChildRef}
          startChild={startChildRef}
          {...props}
        />
      </>
    )
  }
)
