import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const HeaderBar = "HeaderBar"

export default forwardRef<Gtk.HeaderBar, JSX.IntrinsicElements["HeaderBar"]>(
  function HeaderBarComponent({ titleWidget, ...props }, ref) {
    const [titleWidgetRef, setTitleWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setTitleWidgetRef(node)
    }, [])
    return (
      <>
        {titleWidget}
        <HeaderBar ref={ref} titleWidget={titleWidgetRef} {...props} />
      </>
    )
  }
)
