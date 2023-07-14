import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = Omit<
  JSX.IntrinsicElements["Paned"],
  "endChild" | "startChild" | "ref"
> & {
  endChild?: React.ReactElement
  startChild?: React.ReactElement
}

const Paned = "Paned"

export default forwardRef<Gtk.Paned, Props>(function PanedComponent(
  { endChild, startChild, ...props },
  ref
) {
  const [endChildNode, setEndChildNode] = useState<Gtk.Widget | undefined>()
  const endChildRef = useCallback((node: Gtk.Widget) => {
    setEndChildNode(node)
  }, [])
  const endChildElement = endChild
    ? React.cloneElement(endChild, {
        ref: endChildRef,
      })
    : null
  const [startChildNode, setStartChildNode] = useState<Gtk.Widget | undefined>()
  const startChildRef = useCallback((node: Gtk.Widget) => {
    setStartChildNode(node)
  }, [])
  const startChildElement = startChild
    ? React.cloneElement(startChild, {
        ref: startChildRef,
      })
    : null
  return (
    <Paned
      ref={ref}
      endChild={endChildNode}
      startChild={startChildNode}
      {...props}
    >
      {endChildElement}
      {startChildElement}
    </Paned>
  )
})
