import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import usePortal from "../hooks/usePortal.js"

export type BasePopoverProps = JSX.IntrinsicElements["Popover"] & {
  elementType: "Popover" | "PopoverMenu"
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

export const BasePopover = forwardRef<Gtk.Popover, BasePopoverProps>(
  function PopoverComponent(
    {
      children,
      content,
      elementType,
      open = false,
      ...props
    }: BasePopoverProps,
    ref: React.Ref<Gtk.Popover>
  ) {
    const popoverRef = useRef<Gtk.Popover | null>(null)
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

      contentRef.current?.unparent()
      popoverRef.current.setChild(contentRef.current)
    }, [])

    const setContentRef = useCallback((node: Gtk.Widget | null) => {
      contentRef.current = node
      commitMount()
    }, [])

    const setChildRef = useCallback((node: Gtk.Widget | null) => {
      childRef.current = node
      commitMount()
    }, [])

    const setPopoverRef = useCallback((node: Gtk.Popover | null) => {
      popoverRef.current = node
      commitMount()
    }, [])

    usePortal(
      <>
        {React.createElement(elementType, {
          ref: setPopoverRef,
          ...props,
        })}
        {React.cloneElement(content, {
          ref: setContentRef,
        })}
      </>
    )

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

    return React.cloneElement(children, {
      ref: setChildRef,
    })
  }
)

type Props = Omit<BasePopoverProps, "elementType">

export default forwardRef<Gtk.Popover, Props>(
  function PopoverComponent(props, ref) {
    const popoverRef = useRef<Gtk.Popover | null>(null)
    useImperativeHandle(ref, () => popoverRef.current!)
    return <BasePopover {...props} ref={popoverRef} elementType="Popover" />
  }
)
