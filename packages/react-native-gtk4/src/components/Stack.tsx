import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Stack = "Stack"
const StackContext = React.createContext<Gtk.Stack | undefined>(undefined)

type Props = JSX.IntrinsicElements["Stack"] & {
  children: React.ReactNode
}

const StackComponent = forwardRef<Gtk.Stack, Props>(function StackComponent(
  { children, visibleChildName: visibleChildNameProp, ...props },
  ref
) {
  const [stackNode, setStackNode] = useState<Gtk.Stack | undefined>(undefined)
  const [visibleChildName, setVisibleChildName] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    if (!stackNode) {
      return
    }

    setVisibleChildName(visibleChildNameProp)
  }, [children, stackNode, visibleChildNameProp])

  useImperativeHandle(ref, () => stackNode!)

  const stackRef = useCallback((node: Gtk.Stack) => {
    setStackNode(node)
  }, [])

  return (
    <StackContext.Provider value={stackNode}>
      <Stack
        ref={stackRef}
        {...props}
        {...(visibleChildName ? { visibleChildName } : {})}
      >
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
  const stackNode = useContext(StackContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | undefined>(undefined)

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      setChildNode(node)
    },
  })

  useEffect(() => {
    if (!stackNode || !childNode) {
      return
    }

    stackNode.addTitled(childNode, name, title ?? name)

    return () => {
      stackNode.remove(childNode)
    }
  }, [stackNode, childNode, name, title])

  return childWithRef
}

export default {
  Container: StackComponent,
  Item: StackItem,
}
