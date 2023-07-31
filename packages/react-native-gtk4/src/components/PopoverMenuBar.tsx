import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { createPortal } from "../portal.js"
import { PopoverMenuBar } from "../generated/intrinsics.js"

type Props = Omit<JSX.IntrinsicElements["PopoverMenuBar"], "children"> & {
  children?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const Context = createContext<Gtk.PopoverMenuBar | null>(null)

const Container = forwardRef<Gtk.PopoverMenuBar, Props>(
  function PopoverMenuBarComponent({ children, ...props }, ref) {
    const [popover, setPopover] = useState<Gtk.PopoverMenuBar | null>(null)

    const innerRef = useCallback((node: Gtk.PopoverMenuBar | null) => {
      setPopover(node)
    }, [])

    useImperativeHandle(ref, () => popover!)

    return (
      <>
        <PopoverMenuBar ref={innerRef} {...props} />
        {popover ? (
          <Context.Provider value={popover}>{children}</Context.Provider>
        ) : null}
      </>
    )
  }
)

interface ItemProps {
  id: string
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const Item = forwardRef<Gtk.Widget, ItemProps>(
  function PopoverMenuBarItemComponent({ children, id, ...props }, ref) {
    const popover = useContext(Context)
    const innerRef = useRef<Gtk.Widget | null>(null)

    useImperativeHandle(ref, () => innerRef.current!)

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
        ref: innerRef,
        ...props,
      })
    )
  }
)

export default {
  Container,
  Item,
}
