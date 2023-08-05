import React, { createContext, useContext, useEffect, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { createPortal } from "../portal.js"
import { PopoverMenuBar } from "../generated/intrinsics.js"
import { useForwardedRef } from "../utils.js"

type Props = Omit<JSX.IntrinsicElements["PopoverMenuBar"], "children"> & {
  children?: React.ReactElement & React.RefAttributes<Gtk.Widget>
}

const Context = createContext<Gtk.PopoverMenuBar | null>(null)

const Container = forwardRef<Gtk.PopoverMenuBar, Props>(
  function PopoverMenuBarComponent({ children, ...props }, ref) {
    const [popover, setPopover] = useState<Gtk.PopoverMenuBar | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setPopover)

    return (
      <PopoverMenuBar ref={setInnerRef} {...props}>
        {popover ? (
          <Context.Provider value={popover}>{children}</Context.Provider>
        ) : null}
      </PopoverMenuBar>
    )
  }
)

interface ItemProps {
  id: string
  children: React.ReactElement & React.RefAttributes<Gtk.Widget>
}

const Item = function PopoverMenuBarItemComponent({
  children,
  id,
  ...props
}: ItemProps) {
  const popover = useContext(Context)
  const [innerRef, setInnerRef] = useForwardedRef(children.ref)

  useEffect(() => {
    const child = innerRef.current

    if (!popover || !child) {
      return
    }

    popover.addChild(child, id)

    return () => {
      popover.removeChild(child)
    }
  }, [popover, id])

  return createPortal(
    React.cloneElement(children, {
      ref: setInnerRef,
      ...props,
    })
  )
}

export default {
  Container,
  Item,
}
