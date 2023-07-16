import React, { useImperativeHandle, useState } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Paned = "Paned"

type Props = Omit<JSX.IntrinsicElements["Paned"], "children"> & {
  children: [
    React.ReactElement<JSX.IntrinsicElements["Widget"]>,
    React.ReactElement<JSX.IntrinsicElements["Widget"]>,
  ]
}

export default forwardRef<Gtk.Paned, Props>(function PanedComponent(
  { children, ...props },
  ref
) {
  const [panedNode, setPanedNode] = useState<Gtk.Paned | null>(null)
  const [startChildNode, setStartChildNode] = useState<Gtk.Widget | null>(null)
  const [endChildNode, setEndChildNode] = useState<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => panedNode!)

  const [startChild, endChild] = children

  const startChildRef = (node: Gtk.Widget | null) => {
    setStartChildNode(node)
  }

  const endChildRef = (node: Gtk.Widget | null) => {
    setEndChildNode(node)
  }

  const startChildWithRef = React.cloneElement(startChild, {
    ref: startChildRef,
  })

  const endChildWithRef = React.cloneElement(endChild, {
    ref: endChildRef,
  })

  const panedRef = (node: Gtk.Paned | null) => {
    setPanedNode(node)
  }

  return (
    <Paned
      ref={panedRef}
      startChild={startChildNode ?? undefined}
      endChild={endChildNode ?? undefined}
      {...props}
    >
      {startChildWithRef}
      {endChildWithRef}
    </Paned>
  )
})
