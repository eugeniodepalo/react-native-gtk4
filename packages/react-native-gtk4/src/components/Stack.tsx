import React, { useContext, useEffect, useMemo, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Stack, StackSidebar } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import { useForwardedRef } from "../utils.js"

interface Context {
  stack: Gtk.Stack | null
  visibleChildName?: string | null
}

const Context = React.createContext<Context | null>(null)

type Props = JSX.IntrinsicElements["Stack"] & {
  children: React.ReactNode
}

const Container = forwardRef<Gtk.Stack, Props>(function StackContainer(
  { children, visibleChildName, ...props },
  ref
) {
  const [stack, setStack] = useState<Gtk.Stack | null>(null)
  const [, setInnerRef] = useForwardedRef(ref, setStack)

  const value = useMemo(
    () => ({ stack, visibleChildName }),
    [stack, visibleChildName]
  )

  return (
    <>
      {stack ? (
        <Context.Provider value={value}>{children}</Context.Provider>
      ) : null}
      <Stack ref={setInnerRef} {...props} />
    </>
  )
})

interface ItemProps {
  children: React.ReactElement & React.RefAttributes<Gtk.Widget>
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
    const stack = context.stack

    if (!node || !stack) {
      return
    }

    stack.addTitled(node, name, title ?? name)

    return () => {
      if (node.getParent() === stack) {
        stack.remove(node)
      }
    }
  }, [context, name, title])

  useEffect(() => {
    if (visibleChildName === name) {
      stack?.setVisibleChildName(name)
    }
  }, [context, name])

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

export default {
  Container,
  Item,
  Sidebar,
}
