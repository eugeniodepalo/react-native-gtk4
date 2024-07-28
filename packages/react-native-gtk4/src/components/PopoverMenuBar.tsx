import React, { createContext, useContext, useEffect, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { createPortal } from "../portal.js"
import { PopoverMenuBar } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

type Props = Omit<React.JSX.IntrinsicElements["PopoverMenuBar"], "children"> & {
  children?: React.ReactElement & { ref?: React.Ref<Gtk.Widget> }
}

const Context = createContext<Gtk.PopoverMenuBar | null>(null)

const Container = forwardRef<Gtk.PopoverMenuBar, Props>(
  function PopoverMenuBarComponent({ children, ...props }, ref) {
    const [popover, setPopover] = useState<Gtk.PopoverMenuBar | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setPopover)

    return (
      <>
        {popover
          ? createPortal(
              <Context.Provider value={popover}>{children}</Context.Provider>
            )
          : null}
        <PopoverMenuBar ref={setInnerRef} {...props} />
      </>
    )
  }
)

interface ItemProps {
  id: string
  children: React.ReactElement & { ref?: React.Ref<Gtk.Widget> }
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

  return React.cloneElement(children, {
    ref: setInnerRef,
    ...props,
  })
}

export default {
  Container,
  Item,
}
