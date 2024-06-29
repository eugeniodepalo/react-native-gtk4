import React, { useContext, useEffect, useState } from "react"
import { forwardRef, createContext } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { Stack, StackSidebar, StackSwitcher } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

interface Context {
  stack: Gtk.Stack
  visibleChildName?: string
}

const Context = createContext<Context | null>(null)

const Container = forwardRef<Gtk.Stack, JSX.IntrinsicElements["Stack"]>(
  function StackContainer({ children, visibleChildName, ...props }, ref) {
    const [stack, setStack] = useState<Gtk.Stack | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setStack)

    return (
      <>
        {stack ? (
          <Context.Provider
            value={{
              stack,
              visibleChildName: visibleChildName ?? undefined,
            }}
          >
            {children}
          </Context.Provider>
        ) : null}
        <Stack ref={setInnerRef} {...props} />
      </>
    )
  }
)

interface ItemProps {
  children: React.ReactElement & { ref?: React.Ref<Gtk.Widget> }
  name: string
  title?: string
}

const Item = function StackItem({ children, name, title }: ItemProps) {
  const context = useContext(Context)

  if (!context) {
    throw new Error("Stack.Item must be a child of Stack.Container")
  }

  const { stack, visibleChildName } = context
  const [innerRef, setInnerRef] = useForwardedRef(children.ref)

  useEffect(() => {
    const node = innerRef.current

    if (!node) {
      return
    }

    stack.addTitled(node, name, title ?? name)

    return () => {
      if (node.getParent() === stack) {
        stack.remove(node)
      }
    }
  }, [stack, name, title])

  useEffect(() => {
    if (!stack) {
      return
    }

    if (visibleChildName === name) {
      stack.setVisibleChildName(name)
    }
  }, [visibleChildName, name])

  return createPortal(
    React.cloneElement(children, {
      ref: setInnerRef,
    })
  )
}

type SidebarProps = Omit<JSX.IntrinsicElements["StackSidebar"], "stack">

const Sidebar = forwardRef<Gtk.StackSidebar, SidebarProps>(
  function StackSidebarComponent(props, ref) {
    const context = useContext(Context)

    if (!context || !context.stack) {
      throw new Error("Stack.Sidebar must be a child of Stack.Container")
    }

    return <StackSidebar ref={ref} stack={context.stack} {...props} />
  }
)

type SwitcherProps = Omit<JSX.IntrinsicElements["StackSwitcher"], "stack">

export const Switcher = forwardRef<Gtk.StackSwitcher, SwitcherProps>(
  function StackSwitcherComponent(props, ref) {
    const context = useContext(Context)

    if (!context || !context.stack) {
      throw new Error("Stack.Switcher must be a child of Stack.Container")
    }

    return <StackSwitcher ref={ref} stack={context.stack} {...props} />
  }
)

export default {
  Container,
  Item,
  Sidebar,
  Switcher,
}
