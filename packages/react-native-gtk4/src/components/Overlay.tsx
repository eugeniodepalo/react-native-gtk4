import React, { useEffect, useImperativeHandle, useState } from "react"
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
  const [overlayNode, setOverlayNode] = useState<Gtk.Overlay | null>(null)
  const [contentNode, setContentNode] = useState<Gtk.Widget | null>(null)

  const contentRef = (node: Gtk.Widget | null) => {
    setContentNode(node)
  }

  const contentWithRef = React.cloneElement(content, { ref: contentRef })

  useImperativeHandle(ref, () => overlayNode!)

  const overlayRef = (node: Gtk.Overlay | null) => {
    setOverlayNode(node)
  }

  useEffect(() => {
    if (overlayNode && contentNode) {
      contentNode.unparent()
      overlayNode.setChild(contentNode)
    }

    return () => {
      if (overlayNode && contentNode) {
        overlayNode.setChild(null)
      }
    }
  }, [overlayNode, contentNode])

  return (
    <>
      <Overlay ref={overlayRef} {...props}>
        {children}
      </Overlay>
      {contentWithRef}
    </>
  )
})
