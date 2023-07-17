import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

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
  const popoverMenuRef = useRef<Gtk.Popover | null>(null)
  const childRef = useRef<Gtk.Widget | null>(null)
  const contentRef = useRef<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => popoverMenuRef.current!)

  const setContentRef = useCallback((node: Gtk.Widget | null) => {
    const prevNode = contentRef.current

    contentRef.current = node

    if (prevNode) {
      prevNode.unparent()
    }

    if (!popoverMenuRef.current) {
      return
    }

    if (node) {
      node.unparent()
      popoverMenuRef.current.setChild(node)
    } else {
      popoverMenuRef.current.setChild(null)
    }
  }, [])

  const setChildRef = useCallback((node: Gtk.Widget | null) => {
    const prevNode = childRef.current

    childRef.current = node

    if (prevNode) {
      prevNode.unparent()
    }

    if (!popoverMenuRef.current) {
      return
    }

    if (node) {
      popoverMenuRef.current.setParent(node)
    }
  }, [])

  useEffect(() => {
    if (!popoverMenuRef.current || !contentRef.current) {
      return
    }

    if (open) {
      popoverMenuRef.current.popup()
    } else {
      popoverMenuRef.current.popdown()
    }
  }, [open])

  return (
    <>
      {React.cloneElement(children, {
        ref: setChildRef,
      })}
      <Popover ref={popoverMenuRef} {...props}>
        {React.cloneElement(content, {
          ref: setContentRef,
        })}
      </Popover>
    </>
  )
})
