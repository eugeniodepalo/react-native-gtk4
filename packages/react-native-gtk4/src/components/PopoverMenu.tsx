import React, { useEffect, useImperativeHandle, useState } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const PopoverMenu = "PopoverMenu"

type Props = JSX.IntrinsicElements["PopoverMenu"] & {
  children: React.ReactNode
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

export default forwardRef<Gtk.PopoverMenu, Props>(function PopoverMenuComponent(
  { children, content, open = false, ...props },
  ref
) {
  const [popoverMenuNode, setPopoverMenuNode] =
    useState<Gtk.PopoverMenu | null>(null)

  const [contentNode, setContentNode] = useState<Gtk.Widget | null>(null)

  const contentRef = (node: Gtk.Widget | null) => {
    setContentNode(node)
  }

  const contentWithRef = React.cloneElement(content, {
    ref: contentRef,
  })

  useImperativeHandle(ref, () => popoverMenuNode!)

  const popoverMenuRef = (node: Gtk.PopoverMenu | null) => {
    setPopoverMenuNode(node)
  }

  useEffect(() => {
    if (!popoverMenuNode || !contentNode || !popoverMenuNode.child) {
      return
    }

    if (open) {
      popoverMenuNode.popup()
    } else {
      popoverMenuNode.popdown()
    }
  }, [popoverMenuNode, contentNode, open])

  return (
    <>
      <PopoverMenu ref={popoverMenuRef} {...props}>
        {children}
      </PopoverMenu>
      {contentWithRef}
    </>
  )
})
