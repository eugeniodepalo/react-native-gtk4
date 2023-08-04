import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Stack, StackSidebar } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

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

  const value = useMemo(
    () => ({ stack, visibleChildName }),
    [stack, visibleChildName]
  )

  const stackRef = useCallback((node: Gtk.Stack | null) => {
    setStack(node)
  }, [])

  useImperativeHandle(ref, () => stack!)

  return (
    <>
      <Stack ref={stackRef} {...props} />
      {stack ? (
        <Context.Provider value={value}>{children}</Context.Provider>
      ) : null}
    </>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  name: string
  title?: string
}

const Item = forwardRef<Gtk.Widget, ItemProps>(function StackItem(
  { children, name, title }: ItemProps,
  ref
) {
  const context = useContext(Context)

  if (!context) {
    throw new Error("Stack.Item must be a child of Stack.Container")
  }

  const { stack, visibleChildName } = context
  const innerRef = useRef<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

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
      ref: innerRef,
    })
  )
})

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
