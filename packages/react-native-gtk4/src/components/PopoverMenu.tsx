import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { PopoverMenu } from "../generated/intrinsics.js"

type Props = JSX.IntrinsicElements["PopoverMenu"] & {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

export default forwardRef<Gtk.PopoverMenu, Props>(function PopoverMenuComponent(
  { children, content, open = false, ...props },
  ref
) {
  const popoverRef = useRef<Gtk.PopoverMenu | null>(null)
  const childRef = useRef<Gtk.Widget | null>(null)
  const contentRef = useRef<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => popoverRef.current!)

  const commitMount = useCallback(() => {
    if (!popoverRef.current) {
      return
    }

    if (childRef.current) {
      popoverRef.current.unparent()
      popoverRef.current.setParent(childRef.current)
    }

    if (contentRef.current) {
      popoverRef.current.setChild(contentRef.current)
    } else {
      popoverRef.current.setChild(null)
    }
  }, [])

  const setContentRef = useCallback((node: Gtk.Widget | null) => {
    const prevNode = contentRef.current
    contentRef.current = node
    prevNode?.unparent()
    commitMount()
  }, [])

  const setChildRef = useCallback((node: Gtk.Widget | null) => {
    const prevNode = childRef.current
    childRef.current = node
    prevNode?.unparent()
    commitMount()
  }, [])

  const setPopoverMenuRef = useCallback((node: Gtk.PopoverMenu | null) => {
    popoverRef.current = node
    commitMount()
  }, [])

  useEffect(() => {
    if (!popoverRef.current || !contentRef.current || !childRef.current) {
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
      <PopoverMenu ref={setPopoverMenuRef} {...props}>
        {React.cloneElement(content, {
          ref: setContentRef,
        })}
      </PopoverMenu>
    </>
  )
})
