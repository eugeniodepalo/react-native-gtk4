import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { CenterBox } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

type Props = Omit<
  React.JSX.IntrinsicElements["CenterBox"],
  "startWidget" | "endWidget" | "centerWidget" | "children"
> & {
  start?: (React.ReactElement & { ref?: React.Ref<Gtk.Widget> }) | null
  end?: (React.ReactElement & { ref?: React.Ref<Gtk.Widget> }) | null
  children?: (React.ReactElement & { ref?: React.Ref<Gtk.Widget> }) | null
}

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { start, end, children, ...props },
  ref
) {
  const [startWidget, setStartWidget] = useState<Gtk.Widget | null>(null)
  const [endWidget, setEndWidget] = useState<Gtk.Widget | null>(null)
  const [centerWidget, setCenterWidget] = useState<Gtk.Widget | null>(null)
  const [, setStartRef] = useForwardedRef(start?.ref, setStartWidget)
  const [, setCenterRef] = useForwardedRef(children?.ref, setCenterWidget)
  const [, setEndRef] = useForwardedRef(end?.ref, setEndWidget)

  return (
    <>
      {createPortal(
        <>
          {start
            ? React.cloneElement(start, {
                ref: setStartRef,
              })
            : null}
          {children
            ? React.cloneElement(children, {
                ref: setCenterRef,
              })
            : null}
          {end
            ? React.cloneElement(end, {
                ref: setEndRef,
              })
            : null}
        </>
      )}
      <CenterBox
        ref={ref}
        {...props}
        startWidget={startWidget}
        endWidget={endWidget}
        centerWidget={centerWidget}
      />
    </>
  )
})
