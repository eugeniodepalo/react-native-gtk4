import React, { useCallback, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Overlay = "Overlay"

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
    const prevNode = contentRef.current

    contentRef.current = node

    if (prevNode) {
      prevNode.unparent()
    }

    if (!overlayRef.current) {
      return
    }

    if (node) {
      node.unparent()
      overlayRef.current.setChild(node)
    } else {
      overlayRef.current.setChild(null)
    }
  }, [])

  return (
    <>
      <Overlay ref={overlayRef} {...props}>
        {children}
      </Overlay>
      {React.cloneElement(content, { ref: setContentRef })}
    </>
  )
})
