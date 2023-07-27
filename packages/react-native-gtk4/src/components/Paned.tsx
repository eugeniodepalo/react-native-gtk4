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
  const [startChild, setStartChild] = useState<Gtk.Widget | null>(null)
  const [endChild, setEndChild] = useState<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => panedRef.current!)

  const startChildRef = useCallback((node: Gtk.Widget | null) => {
    setStartChild(node)
  }, [])

  const endChildRef = useCallback((node: Gtk.Widget | null) => {
    setEndChild(node)
  }, [])

  return (
    <Paned
      ref={panedRef}
      startChild={startChild ?? undefined}
      endChild={endChild ?? undefined}
      {...props}
    >
      {React.cloneElement(children[0], {
        ref: startChildRef,
      })}
      {React.cloneElement(children[1], {
        ref: endChildRef,
      })}
    </Paned>
  )
})
