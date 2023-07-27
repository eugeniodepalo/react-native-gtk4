import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ActionBar } from "../generated/intrinsics.js"

type Position = "start" | "center" | "end"

const Context = React.createContext<Gtk.ActionBar | null>(null)
const PositionContext = React.createContext<Position | null>(null)

type Props = JSX.IntrinsicElements["ActionBar"] & {
  children: React.ReactNode
}

const Container = forwardRef<Gtk.ActionBar, Props>(function ActionBarContainer(
  { children, ...props },
  ref
) {
  const [node, setNode] = useState<Gtk.ActionBar | null>(null)

  useImperativeHandle(ref, () => node!)

  const innerRef = useCallback((node: Gtk.ActionBar | null) => {
    setNode(node)
  }, [])

  return (
    <Context.Provider value={node}>
      <ActionBar ref={innerRef} {...props}>
        {node ? children : null}
      </ActionBar>
    </Context.Provider>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const Item = forwardRef<Gtk.Widget, ItemProps>(function Item(
  { children },
  ref
) {
  const actionBar = useContext(Context)
  const position = useContext(PositionContext) ?? "start"
  const innerRef = useRef<Gtk.Widget | null>(null)

  if (!actionBar) {
    throw new Error("Item must be a child of ActionBar.Container")
  }

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    if (!innerRef.current) {
      return
    }

    const node = innerRef.current

    switch (position) {
      case "start":
        actionBar.packStart(node)
        break
      case "center":
        actionBar.setCenterWidget(node)
        break
      case "end":
        actionBar.packEnd(node)
        break
    }

    return () => {
      actionBar.remove(node)
    }
  }, [])

  return React.cloneElement(children, {
    ref: innerRef,
  })
})

interface SectionProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  position?: Position
}

const Section = function Section({ children, position }: SectionProps) {
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
