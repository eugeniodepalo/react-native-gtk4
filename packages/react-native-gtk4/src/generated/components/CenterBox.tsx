import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const CenterBox = "CenterBox"

export default forwardRef<Gtk.CenterBox, JSX.IntrinsicElements["CenterBox"]>(
  function CenterBoxComponent(
    { centerWidget, endWidget, startWidget, ...props },
    ref
  ) {
    const [centerWidgetRef, setCenterWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setCenterWidgetRef(node)
    }, [])
    const [endWidgetRef, setEndWidgetRef] = useState<Gtk.Widget | undefined>()
    useCallback((node: Gtk.Widget) => {
      setEndWidgetRef(node)
    }, [])
    const [startWidgetRef, setStartWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setStartWidgetRef(node)
    }, [])
    return (
      <>
        {centerWidget}
        {endWidget}
        {startWidget}
        <CenterBox
          ref={ref}
          centerWidget={centerWidgetRef}
          endWidget={endWidgetRef}
          startWidget={startWidgetRef}
          {...props}
        />
      </>
    )
  }
)
