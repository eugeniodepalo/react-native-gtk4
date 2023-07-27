import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { createPortal } from "../portal.js"

type ElementType = "Popover" | "PopoverMenu" | "EmojiChooser"

export type AbstractPopoverProps<T extends ElementType> = Omit<
  JSX.IntrinsicElements[T],
  "children"
> & {
  elementType: T
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  content?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

type PortalProps<T extends ElementType> = Omit<
  AbstractPopoverProps<T>,
  "children"
> & {
  child: Gtk.Widget
}

const Portal = forwardRef<Gtk.Popover, PortalProps<ElementType>>(
  function AbstractPopoverPortal(
    { content, elementType, open, child, ...props },
    ref
  ) {
    const innerRef = useRef<Gtk.Popover | null>(null)
    const contentRef = useRef<Gtk.Widget | null>(null)

    useImperativeHandle(ref, () => innerRef.current!)

    useEffect(() => {
      const content = contentRef.current
      const popover = innerRef.current

      if (!popover) {
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
    )
  }
)

export default forwardRef<Gtk.Popover, AbstractPopoverProps<ElementType>>(
  function AbstractPopoverComponent({ children, content, ...props }, ref) {
    const [child, setChild] = useState<Gtk.Widget | null>(null)

    const childRef = useCallback((node: Gtk.Widget | null) => {
      setChild(node)
    }, [])

    return (
      <>
        {createPortal(
          child ? (
            <Portal content={content} child={child} ref={ref} {...props} />
          ) : null
        )}
        {React.cloneElement(children, {
          ref: childRef,
        })}
      </>
    )
  }
)
