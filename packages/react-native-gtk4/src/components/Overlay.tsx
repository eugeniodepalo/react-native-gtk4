import React, { useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Overlay } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

type Props = JSX.IntrinsicElements["Overlay"] & {
  content: React.ReactElement & React.RefAttributes<Gtk.Widget>
}

export default forwardRef<Gtk.Overlay, Props>(function OverlayComponent(
  { content, ...props },
  ref
) {
  const [innerRef, setInnerRef] = useForwardedRef(ref)
  const [contentRef, setContentRef] = useForwardedRef(content.ref)

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
  }, [contentRef.current])

  return (
    <>
      {createPortal(React.cloneElement(content, { ref: setContentRef }))}
      <Overlay ref={setInnerRef} {...props} />
    </>
  )
})
