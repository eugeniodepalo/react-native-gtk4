import React, { useEffect, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Overlay } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

type Props = JSX.IntrinsicElements["Overlay"] & {
  children: React.ReactNode
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.Overlay, Props>(function OverlayComponent(
  { children, content, ...props },
  ref
) {
  const innerRef = useRef<Gtk.Overlay | null>(null)
  const contentRef = useRef<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    const overlay = innerRef.current
    const content = contentRef.current

    if (!overlay || !content) {
      return
    }

    overlay.setChild(content)

    return () => {
      overlay.setChild(null)
    }
  }, [])

  return (
    <>
      {createPortal(React.cloneElement(content, { ref: contentRef }))}
      <Overlay ref={innerRef} {...props}>
        {children}
      </Overlay>
    </>
  )
})
