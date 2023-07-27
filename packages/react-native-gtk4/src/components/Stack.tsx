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
import { Stack, StackSidebar } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

interface Context {
  stack: Gtk.Stack | null
  visibleChildName?: string
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

  useImperativeHandle(ref, () => stack!)

  const stackRef = useCallback((node: Gtk.Stack | null) => {
    setStack(node)
  }, [])

  return (
    <>
      <Stack ref={stackRef} {...props} />
      {stack ? (
        <Context.Provider
          value={{
            stack,
            visibleChildName,
          }}
        >
          {children}
        </Context.Provider>
      ) : null}
    </>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  name: string
  title?: string
}

interface ItemPortalProps extends ItemProps {
  stack: Gtk.Stack
  visibleChildName?: string
}

const ItemPortal = forwardRef<Gtk.Widget, ItemPortalProps>(
  function StackItemPortal(
    { children, name, title, stack, visibleChildName },
    ref
  ) {
    const innerRef = useRef<Gtk.Widget | null>(null)

    useImperativeHandle(ref, () => innerRef.current!)

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
      if (visibleChildName === name) {
        stack.setVisibleChildName(name)
      }
    }, [stack, visibleChildName, name])

    return React.cloneElement(children, {
      ref: innerRef,
    })
  }
)

const Item = function StackItem(props: ItemProps) {
  const context = useContext(Context)

  if (!context || !context.stack) {
    throw new Error("Item must be a child of Stack.Container")
  }

  return createPortal(
    <ItemPortal
      stack={context.stack}
      visibleChildName={context.visibleChildName}
      {...props}
    />
  )
}

type SidebarProps = Omit<JSX.IntrinsicElements["StackSidebar"], "stack">

const Sidebar = forwardRef<Gtk.StackSidebar, SidebarProps>(
  function StackSidebarComponent(props, ref) {
    const context = useContext(Context)

    if (!context || !context.stack) {
      throw new Error("Sidebar must be a child of Stack.Container")
    }

    return <StackSidebar ref={ref} stack={context.stack} {...props} />
  }
)

export default {
  Container,
  Item,
  Sidebar,
}
