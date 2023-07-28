import React, { useEffect, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { CenterBox } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

type Props = Omit<
  JSX.IntrinsicElements["CenterBox"],
  "startWidget" | "endWidget" | "centerWidget" | "children"
> & {
  start?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  end?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  children?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
}

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { start, end, children, ...props },
  ref
) {
  const innerRef = useRef<Gtk.CenterBox | null>(null)
  const startRef = useRef<Gtk.Widget | null>(null)
  const centerRef = useRef<Gtk.Widget | null>(null)
  const endRef = useRef<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    const centerBox = innerRef.current

    if (!centerBox) {
      return
    }

    centerBox.setStartWidget(startRef.current)
    centerBox.setCenterWidget(centerRef.current)
    centerBox.setEndWidget(endRef.current)

    return () => {
      centerBox.setStartWidget(null)
      centerBox.setCenterWidget(null)
      centerBox.setEndWidget(null)
    }
  }, [start, end, children])

  return (
    <>
      {createPortal(
        <>
          {start
            ? React.cloneElement(start, {
                ref: startRef,
              })
            : null}
          {children
            ? React.cloneElement(children, {
                ref: centerRef,
              })
            : null}
          {end
            ? React.cloneElement(end, {
                ref: endRef,
              })
            : null}
        </>
      )}
      <CenterBox ref={innerRef} {...props} />
    </>
  )
})
