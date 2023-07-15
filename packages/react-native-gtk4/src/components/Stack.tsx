import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Stack = "Stack"
const StackContext = React.createContext<Gtk.Stack | null>(null)

type Props = JSX.IntrinsicElements["Stack"] & {
  children: React.ReactNode
  onVisibleChildChanged?: (name: string | null) => void
}

const StackContainer = forwardRef<Gtk.Stack, Props>(function StackContainer(
  { children, visibleChildName, ...props },
  ref
) {
  const [stackNode, setStackNode] = useState<Gtk.Stack | null>(null)

  useImperativeHandle(ref, () => stackNode!)

  const stackRef = (node: Gtk.Stack | null) => {
    setStackNode(node)
  }

  useEffect(() => {
    if (!stackNode) {
      return
    }

    if (visibleChildName) {
      stackNode.setVisibleChildName(visibleChildName)
    }

    const onVisibleChildChanged = (name: string | null) => {
      props.onVisibleChildChanged?.(name)
    }

    stackNode.on("notify::visible-child-name", onVisibleChildChanged)

    return () => {
      stackNode.off("notify::visible-child-changed", onVisibleChildChanged)
    }
  }, [stackNode, visibleChildName])

  return (
    <StackContext.Provider value={stackNode}>
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
  const stackNode = useContext(StackContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | null>(null)

  const childRef = (node: Gtk.Widget | null) => {
    setChildNode(node)
  }

  const childWithRef = React.cloneElement(children, {
    ref: childRef,
  })

  useEffect(() => {
    if (!stackNode || !childNode) {
      return
    }

    const page = stackNode.addTitled(childNode, name, title ?? name)

    page.on("notify::visible-child", () => {
      stackNode.emit("visible-child-changed", name)
    })

    return () => {
      stackNode.remove(childNode)
    }
  }, [stackNode, childNode, name, title])

  return childWithRef
}

export default {
  Container: StackContainer,
  Item: StackItem,
}
