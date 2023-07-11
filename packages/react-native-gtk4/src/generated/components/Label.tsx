import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const Label = "Label"

export default forwardRef<Gtk.Label, JSX.IntrinsicElements["Label"]>(
  function LabelComponent({ mnemonicWidget, ...props }, ref) {
    const [mnemonicWidgetRef, setMnemonicWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setMnemonicWidgetRef(node)
    }, [])
    return (
      <>
        {mnemonicWidget}
        <Label ref={ref} mnemonicWidget={mnemonicWidgetRef} {...props} />
      </>
    )
  }
)
