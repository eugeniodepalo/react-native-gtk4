import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Paned } from "../generated/intrinsics.js"

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
  const panedRef = useRef<Gtk.Paned | null>(null)
  const [startChildNode, setStartChildNode] = useState<Gtk.Widget | null>(null)
  const [endChildNode, setEndChildNode] = useState<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => panedRef.current!)

  const [startChild, endChild] = children

  const startChildRef = useCallback((node: Gtk.Widget | null) => {
    setStartChildNode(node)
  }, [])

  const endChildRef = useCallback((node: Gtk.Widget | null) => {
    setEndChildNode(node)
  }, [])

  return (
    <Paned
      ref={panedRef}
      startChild={startChildNode ?? undefined}
      endChild={endChildNode ?? undefined}
      {...props}
    >
      {React.cloneElement(startChild, {
        ref: startChildRef,
      })}
      {React.cloneElement(endChild, {
        ref: endChildRef,
      })}
    </Paned>
  )
})
