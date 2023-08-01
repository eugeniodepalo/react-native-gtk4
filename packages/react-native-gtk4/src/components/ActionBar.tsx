import React, { useContext, useEffect, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ActionBar } from "../generated/intrinsics.js"
import { useForwardedRef } from "../utils.js"
import { createPortal } from "../portal.js"

type Position = "start" | "center" | "end"

const Context = React.createContext<Gtk.ActionBar | null>(null)
const PositionContext = React.createContext<Position | null>(null)

const Container = forwardRef<Gtk.ActionBar, JSX.IntrinsicElements["ActionBar"]>(
  function ActionBarContainer({ children, ...props }, ref) {
    const [actionBar, setActionBar] = useState<Gtk.ActionBar | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setActionBar)

    return (
      <ActionBar ref={setInnerRef} {...props}>
        {createPortal(
          actionBar ? (
            <Context.Provider value={actionBar}>{children}</Context.Provider>
          ) : null
        )}
      </ActionBar>
    )
  }
)

interface ItemProps {
  children: React.ReactElement & React.RefAttributes<Gtk.Widget>
}

const Item = function ActionBarItem({ children }: ItemProps) {
  const actionBar = useContext(Context)
  const position = useContext(PositionContext) ?? "start"
  const [childRef, setChildRef] = useForwardedRef(children.ref)

  if (!actionBar) {
    throw new Error("ActionBar.Item must be a child of ActionBar.Container")
  }

  useEffect(() => {
    if (!childRef.current) {
      return
    }

    const child = childRef.current

    switch (position) {
      case "start":
        actionBar.packStart(child)
        break
      case "center":
        actionBar.setCenterWidget(child)
        break
      case "end":
        actionBar.packEnd(child)
        break
    }

    return () => {
      actionBar.remove(child)
    }
  }, [])

  return React.cloneElement(children, {
    ref: setChildRef,
  })
}

interface SectionProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  position?: Position
}

const Section = function ActionBarSection({
  children,
  position,
}: SectionProps) {
  return (
    <PositionContext.Provider value={position ?? null}>
      {children}
    </PositionContext.Provider>
  )
}

export default {
  Container,
  Section,
  Item,
}
