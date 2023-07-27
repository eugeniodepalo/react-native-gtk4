import React, {
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Stack, StackSidebar } from "../generated/intrinsics.js"
import usePortal from "../hooks/usePortal.js"

interface Context {
  node: Gtk.Stack | null
  visibleChildName?: string
}

const Context = React.createContext<Context | null>(null)

type Props = JSX.IntrinsicElements["Stack"] & {
  children: React.ReactNode
}

const Container = forwardRef<Gtk.Stack, Props>(function Container(
  { children, visibleChildName, ...props },
  ref
) {
  const [stackNode, setStackNode] = useState<Gtk.Stack | null>(null)

  useImperativeHandle(ref, () => stackNode!)

  const stackRef = useCallback((node: Gtk.Stack | null) => {
    setStackNode(node)
  }, [])

  return (
    <Context.Provider
      value={{
        node: stackNode,
        visibleChildName,
      }}
    >
      <Stack ref={stackRef} {...props} />
      {children}
    </Context.Provider>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  name: string
  title?: string
}

const Item = function Item({ children, name, title }: ItemProps) {
  const stack = useContext(Context)
  const childRef = useRef<Gtk.Widget | null>(null)

  const setChildRef = useCallback(
    (node: Gtk.Widget | null) => {
      const prevNode = childRef.current

      childRef.current = node

      if (!stack || !stack.node) {
        return
      }

      if (prevNode) {
        stack.node.remove(prevNode)
      }

      if (node) {
        stack.node.addTitled(node, name, title ?? name)

        if (stack.visibleChildName === name) {
          stack.node.setVisibleChildName(name)
        }
      }
    },
    [stack, name, title]
  )

  usePortal(
    React.cloneElement(children, {
      ref: setChildRef,
    })
  )

  return null
}

type SidebarProps = Omit<JSX.IntrinsicElements["StackSidebar"], "stack">

const Sidebar = forwardRef<Gtk.StackSidebar, SidebarProps>(
  function Sidebar(props, ref) {
    const stack = useContext(Context)

    if (!stack || !stack.node) {
      return null
    }

    return <StackSidebar ref={ref} stack={stack.node} {...props} />
  }
)

export default {
  Container,
  Item,
  Sidebar,
}
