import React, { useImperativeHandle, useState } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const CenterBox = "CenterBox"

type Props = Omit<
  JSX.IntrinsicElements["CenterBox"],
  "startWidget" | "endWidget" | "centerWidget"
> & {
  start?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  end?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  children?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { start, end, children, ...props },
  ref
) {
  const [centerBoxNode, setCenterBoxNode] = useState<Gtk.CenterBox | null>(null)
  const [startChildNode, setStartChildNode] = useState<Gtk.Widget | null>(null)

  const [centerChildNode, setCenterChildNode] = useState<Gtk.Widget | null>(
    null
  )

  const [endChildNode, setEndChildNode] = useState<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => centerBoxNode!)

  const startChildRef = (node: Gtk.Widget | null) => {
    setStartChildNode(node)
  }

  const endChildRef = (node: Gtk.Widget | null) => {
    setEndChildNode(node)
  }

  const centerChildRef = (node: Gtk.Widget | null) => {
    setCenterChildNode(node)
  }

  const startChildWithRef = start
    ? React.cloneElement(start, {
        ref: startChildRef,
      })
    : null

  const endChildWithRef = end
    ? React.cloneElement(end, {
        ref: endChildRef,
      })
    : null

  const centerChildWithRef = children
    ? React.cloneElement(children, {
        ref: centerChildRef,
      })
    : null

  const centerBoxRef = (node: Gtk.CenterBox | null) => {
    setCenterBoxNode(node)
  }

  return (
    <CenterBox
      ref={centerBoxRef}
      centerWidget={centerChildNode ?? undefined}
      startWidget={startChildNode ?? undefined}
      endWidget={endChildNode ?? undefined}
      {...props}
    >
      {startChildWithRef}
      {centerChildWithRef}
      {endChildWithRef}
    </CenterBox>
  )
})
