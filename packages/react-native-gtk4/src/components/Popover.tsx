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

export type BasePopoverProps = Omit<
  JSX.IntrinsicElements["Popover"],
  "children"
> & {
  elementType: "Popover" | "PopoverMenu"
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  content: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  open?: boolean
}

type PortalProps = Omit<BasePopoverProps, "children"> & {
  child: Gtk.Widget
}

const Portal = forwardRef<Gtk.Popover, PortalProps>(function Portal(
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
  }, [child])

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
})

export const BasePopover = forwardRef<Gtk.Popover, BasePopoverProps>(
  function PopoverComponent({ children, content, ...props }, ref) {
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

type Props = Omit<BasePopoverProps, "elementType">

export default forwardRef<Gtk.Popover, Props>(
  function PopoverComponent(props, ref) {
    return <BasePopover {...props} ref={ref} elementType="Popover" />
  }
)
