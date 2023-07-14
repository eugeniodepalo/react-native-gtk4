import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = Omit<JSX.IntrinsicElements["Label"], "mnemonicWidget" | "ref"> & {
  mnemonicWidget?: React.ReactElement
}

const Label = "Label"

export default forwardRef<Gtk.Label, Props>(function LabelComponent(
  { mnemonicWidget, ...props },
  ref
) {
  const [mnemonicWidgetNode, setMnemonicWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const mnemonicWidgetRef = useCallback((node: Gtk.Widget) => {
    setMnemonicWidgetNode(node)
  }, [])
  const mnemonicWidgetElement = mnemonicWidget
    ? React.cloneElement(mnemonicWidget, {
        ref: mnemonicWidgetRef,
      })
    : null
  return (
    <Label ref={ref} mnemonicWidget={mnemonicWidgetNode} {...props}>
      {mnemonicWidgetElement}
    </Label>
  )
})
