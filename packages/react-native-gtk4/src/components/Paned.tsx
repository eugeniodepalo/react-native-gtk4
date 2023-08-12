import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Paned } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

type Props = Omit<
  JSX.IntrinsicElements["Paned"],
  "children" | "startChild" | "endChild"
> & {
  children: [
    React.ReactElement & React.RefAttributes<Gtk.Widget>,
    React.ReactElement & React.RefAttributes<Gtk.Widget>,
  ]
}

export default forwardRef<Gtk.Paned, Props>(function PanedComponent(
  { children, ...props },
  ref
) {
  const [startChild, setStartChild] = useState<Gtk.Widget | null>(null)
  const [endChild, setEndChild] = useState<Gtk.Widget | null>(null)
  const [, setStartChildRef] = useForwardedRef(children[0].ref, setStartChild)
  const [, setEndChildRef] = useForwardedRef(children[1].ref, setEndChild)

  return (
    <Paned
      ref={ref}
      startChild={startChild ?? undefined}
      endChild={endChild ?? undefined}
      {...props}
    >
      {React.cloneElement(children[0], {
        ref: setStartChildRef,
      })}
      {React.cloneElement(children[1], {
        ref: setEndChildRef,
      })}
    </Paned>
  )
})
