import React, {
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Stack = "Stack"

interface StackContext {
  node: Gtk.Stack | null
  visibleChildName?: string
}

const StackContext = React.createContext<StackContext | null>(null)

type Props = JSX.IntrinsicElements["Stack"] & {
  children: React.ReactNode
}

const StackContainer = forwardRef<Gtk.Stack, Props>(function StackContainer(
  { children, visibleChildName, ...props },
  ref
) {
  const [stackNode, setStackNode] = React.useState<Gtk.Stack | null>(null)

  useImperativeHandle(ref, () => stackNode!)

  const stackRef = useCallback((node: Gtk.Stack | null) => {
    setStackNode(node)
  }, [])

  return (
    <StackContext.Provider
      value={{
        node: stackNode,
        visibleChildName,
      }}
    >
      <Stack ref={stackRef} {...props}>
        {children}
      </Stack>
    </StackContext.Provider>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  name: string
  title?: string
}

const StackItem = function StackItem({ children, name, title }: ItemProps) {
  const stack = useContext(StackContext)
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

  return React.cloneElement(children, {
    ref: setChildRef,
  })
}

export default {
  Container: StackContainer,
  Item: StackItem,
}
