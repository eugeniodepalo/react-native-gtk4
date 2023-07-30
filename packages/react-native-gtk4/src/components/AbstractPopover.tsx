import React, { useEffect, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { createPortal } from "../portal.js"

type ElementType = "Popover" | "PopoverMenu" | "EmojiChooser"

export type AbstractPopoverProps<T extends ElementType> = Omit<
  JSX.IntrinsicElements[T],
  "children"
> & {
  elementType: T
  children?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  content?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

export default forwardRef<Gtk.Popover, AbstractPopoverProps<ElementType>>(
  function AbstractPopoverComponent(
    { content, elementType, open, children, ...props },
    ref
  ) {
    const childRef = useRef<Gtk.Widget | null>(null)
    const innerRef = useRef<Gtk.Popover | null>(null)
    const contentRef = useRef<Gtk.Widget | null>(null)

    useImperativeHandle(ref, () => innerRef.current!)

    useEffect(() => {
      const content = contentRef.current
      const popover = innerRef.current
      const child = childRef.current

      if (!popover || !child) {
        return
      }

      popover.unparent()
      popover.setParent(child)

      if (content) {
        content.unparent()
        popover.setChild(content)
      }
    }, [])

    useEffect(() => {
      const popover = innerRef.current

      if (!popover) {
        return
      }

      if (open) {
        popover.popup()
      } else {
        popover.popdown()
      }
    }, [open])

    return (
      <>
        {createPortal(
          <>
            {React.createElement(elementType, {
              ref: innerRef,
              ...props,
            })}
            {content
              ? React.cloneElement(content, {
                  ref: contentRef,
                })
              : null}
          </>
        )}
        {children
          ? React.cloneElement(children, {
              ref: childRef,
            })
          : null}
      </>
    )
  }
)
