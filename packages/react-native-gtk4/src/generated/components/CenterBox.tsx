import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = Omit<
  JSX.IntrinsicElements["CenterBox"],
  "centerWidget" | "endWidget" | "startWidget" | "ref"
> & {
  centerWidget?: React.ReactElement
  endWidget?: React.ReactElement
  startWidget?: React.ReactElement
}

const CenterBox = "CenterBox"

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { centerWidget, endWidget, startWidget, ...props },
  ref
) {
  const [centerWidgetNode, setCenterWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const centerWidgetRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setCenterWidgetNode(node))
  }, [])
  const centerWidgetElement = centerWidget
    ? React.cloneElement(centerWidget, {
        ref: centerWidgetRef,
      })
    : null
  const [endWidgetNode, setEndWidgetNode] = useState<Gtk.Widget | undefined>()
  const endWidgetRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setEndWidgetNode(node))
  }, [])
  const endWidgetElement = endWidget
    ? React.cloneElement(endWidget, {
        ref: endWidgetRef,
      })
    : null
  const [startWidgetNode, setStartWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const startWidgetRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setStartWidgetNode(node))
  }, [])
  const startWidgetElement = startWidget
    ? React.cloneElement(startWidget, {
        ref: startWidgetRef,
      })
    : null
  return (
    <>
      {centerWidgetElement}
      {endWidgetElement}
      {startWidgetElement}
      <CenterBox
        ref={ref}
        centerWidget={centerWidgetNode}
        endWidget={endWidgetNode}
        startWidget={startWidgetNode}
        {...props}
      />
    </>
  )
})
