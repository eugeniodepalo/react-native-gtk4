import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
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
  const [contentWidget, setContentWidget] = useState<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  const contentRef = useCallback((node: Gtk.Widget | null) => {
    setContentWidget(node)
  }, [])

  useEffect(() => {
    const overlay = innerRef.current

    if (!overlay || !contentWidget) {
      return
    }

    overlay.setChild(contentWidget)

    return () => {
      overlay.setChild(null)
    }
  }, [innerRef, contentWidget])

  return (
    <>
      {createPortal(React.cloneElement(content, { ref: contentRef }))}
      <Overlay ref={innerRef} {...props}>
        {children}
      </Overlay>
    </>
  )
})
