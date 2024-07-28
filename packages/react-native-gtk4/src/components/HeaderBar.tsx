import React, { createContext, useContext, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { HeaderBar } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

type Position = "start" | "end"

type Props = Omit<React.JSX.IntrinsicElements["HeaderBar"], "titleWidget"> & {
  title?: (React.ReactElement & { ref?: React.Ref<Gtk.Widget> }) | null
}

const Context = createContext<Gtk.HeaderBar | null>(null)
const PositionContext = createContext<Position>("end")

const Container = forwardRef<Gtk.HeaderBar, Props>(function HeaderBarContainer(
  { children, title, ...props },
  ref
) {
  const [headerBar, setHeaderBar] = useState<Gtk.HeaderBar | null>(null)
  const [, setInnerRef] = useForwardedRef(ref, setHeaderBar)
  const [titleWidget, setTitleWidget] = useState<Gtk.Widget | null>(null)
  const [, setTitleRef] = useForwardedRef(title?.ref, setTitleWidget)

  return (
    <HeaderBar ref={setInnerRef} {...props} titleWidget={titleWidget}>
      {headerBar ? (
        <Context.Provider value={headerBar}>
          {title
            ? createPortal(
                React.cloneElement(title, {
                  ref: setTitleRef,
                })
              )
            : null}
          {children}
        </Context.Provider>
      ) : null}
    </HeaderBar>
  )
})

interface SectionProps {
  children: React.ReactNode
  position?: Position
}

const Section = function HeaderBarSection({
  children,
  position = "start",
}: SectionProps) {
  return (
    <PositionContext.Provider value={position}>
      {children}
    </PositionContext.Provider>
  )
}

interface ItemProps {
  children: React.ReactElement & { ref?: React.Ref<Gtk.Widget> }
}

const Item = function HeaderBarItem({ children }: ItemProps) {
  const headerBar = useContext(Context)
  const [childRef, setChildRef] = useForwardedRef(children.ref)
  const position = useContext(PositionContext)

  if (!headerBar) {
    throw new Error("HeaderBar.Item must be a child of HeaderBar.Container")
  }

  React.useEffect(() => {
    if (!childRef.current) {
      return
    }

    const child = childRef.current

    switch (position) {
      case "start":
        headerBar.packStart(child)
        break
      case "end":
        headerBar.packEnd(child)
        break
    }

    return () => {
      headerBar.remove(child)
    }
  }, [childRef.current, position])

  return createPortal(
    React.cloneElement(children, {
      ref: setChildRef,
    })
  )
}

export default {
  Container,
  Section,
  Item,
}
