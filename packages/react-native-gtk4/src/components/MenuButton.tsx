import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { MenuButton } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import Gio from "@girs/node-gio-2.0"

type Props = Omit<
  JSX.IntrinsicElements["MenuButton"],
  "popover" | "children"
> & {
  actionGroup?: Gio.ActionGroup
  actionPrefix?: string
  popover?: React.ReactElement<JSX.IntrinsicElements["Popover"]>
}

export default forwardRef<Gtk.MenuButton, Props>(function MenuButtonComponent(
  { popover, actionGroup, actionPrefix, ...props },
  ref
) {
  const innerRef = useRef<Gtk.MenuButton | null>(null)
  const [popoverNode, setPopoverNode] = useState<Gtk.Popover | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    const menuButton = innerRef.current

    if (!menuButton || !actionGroup) {
      return
    }

    menuButton.insertActionGroup(actionPrefix ?? null, actionGroup)

    return () => {
      menuButton.insertActionGroup(actionPrefix ?? null, null)
    }
  }, [actionGroup, actionPrefix])

  const popoverRef = useCallback((node: Gtk.Popover | null) => {
    setPopoverNode(node)
  }, [])

  return (
    <>
      {popover
        ? createPortal(
            React.cloneElement(popover, {
              ref: popoverRef,
            })
          )
        : null}
      <MenuButton
        ref={innerRef}
        popover={popoverNode ?? undefined}
        {...props}
      />
    </>
  )
})
