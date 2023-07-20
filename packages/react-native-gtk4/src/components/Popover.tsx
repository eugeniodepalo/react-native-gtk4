import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"

const Popover = "Popover"

type Props = JSX.IntrinsicElements["Popover"] & {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

export default forwardRef<Gtk.Popover, Props>(function PopoverComponent(
  { children, content, open = false, ...props },
  ref
) {
  const popoverRef = useRef<Gtk.Popover | null>(null)
  const childRef = useRef<Gtk.Widget | null>(null)
  const contentRef = useRef<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => popoverRef.current!)

  const setContentRef = useCallback((node: Gtk.Widget | null) => {
    const prevNode = contentRef.current

    contentRef.current = node

    if (prevNode) {
      prevNode.unparent()
    }

    if (!popoverRef.current) {
      return
    }

    if (node) {
      node.unparent()
      popoverRef.current.setChild(node)
    } else {
      popoverRef.current.setChild(null)
    }
  }, [])

  const setChildRef = useCallback((node: Gtk.Widget | null) => {
    const prevNode = childRef.current

    childRef.current = node

    if (prevNode) {
      prevNode.unparent()
    }

    if (!popoverRef.current) {
      return
    }

    if (node) {
      popoverRef.current.setParent(node)
    }
  }, [])

  useEffect(() => {
    if (!popoverRef.current || !contentRef.current) {
      return
    }

    if (open) {
      popoverRef.current.popup()
    } else {
      popoverRef.current.popdown()
    }
  }, [open])

  return (
    <>
      {React.cloneElement(children, {
        ref: setChildRef,
      })}
      <Popover ref={popoverRef} {...props}>
        {React.cloneElement(content, {
          ref: setContentRef,
        })}
      </Popover>
    </>
  )
})
