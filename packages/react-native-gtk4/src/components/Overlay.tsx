import React, { useCallback, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Overlay } from "../generated/intrinsics.js"
import usePortal from "../hooks/usePortal.js"

type Props = JSX.IntrinsicElements["Overlay"] & {
  children: React.ReactNode
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.Overlay, Props>(function OverlayComponent(
  { children, content, ...props },
  ref
) {
  const overlayRef = useRef<Gtk.Overlay | null>(null)
  const contentRef = useRef<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => overlayRef.current!)

  const setContentRef = useCallback((node: Gtk.Widget | null) => {
    contentRef.current = node
    commitMount()
  }, [])

  const setOverlayRef = useCallback((node: Gtk.Overlay | null) => {
    overlayRef.current = node
    commitMount()
  }, [])

  usePortal(React.cloneElement(content, { ref: setContentRef }))

  const commitMount = useCallback(() => {
    if (!overlayRef.current) {
      return
    }

    overlayRef.current.setChild(contentRef.current)
  }, [])

  return (
    <Overlay ref={setOverlayRef} {...props}>
      {children}
    </Overlay>
  )
})
