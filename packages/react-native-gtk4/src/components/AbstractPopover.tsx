import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import usePortal from "../hooks/usePortal.js"

export type AbstractPopoverProps = Omit<
  JSX.IntrinsicElements["Popover"],
  "children"
> & {
  elementType: "Popover" | "PopoverMenu" | "EmojiChooser"
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

type PortalProps = Omit<AbstractPopoverProps, "children"> & {
  child: Gtk.Widget
}

const Portal = forwardRef<Gtk.Popover, PortalProps>(
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

      if (!content || !popover) {
        return
      }

      popover.unparent()
      popover.setParent(child)
      content.unparent()
      popover.setChild(content)
    }, [child, content])

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
        {React.cloneElement(content, {
          ref: contentRef,
        })}
      </>
    )
  }
)

export default forwardRef<Gtk.Popover, AbstractPopoverProps>(
  function AbstractPopoverComponent({ children, content, ...props }, ref) {
    const [child, setChild] = useState<Gtk.Widget | null>(null)

    const childRef = useCallback((node: Gtk.Widget | null) => {
      setChild(node)
    }, [])

    usePortal(
      child ? (
        <Portal content={content} child={child} ref={ref} {...props} />
      ) : null
    )

    return React.cloneElement(children, {
      ref: childRef,
    })
  }
)
