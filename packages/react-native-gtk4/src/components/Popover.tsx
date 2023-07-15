import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Popover = "Popover"

interface PopoverContext {
  setChildNode: (node: Gtk.Widget | null) => void
  setParentNode: (node: Gtk.Widget | null) => void
}

const PopoverContext = React.createContext<PopoverContext | undefined>(
  undefined
)

type Props = JSX.IntrinsicElements["Popover"] & {
  children: React.ReactNode
  open?: boolean
}

const PopoverComponent = forwardRef<Gtk.Popover, Props>(
  function PopoverComponent({ children, open = false, ...props }, ref) {
    const [popoverNode, setPopoverNode] = useState<Gtk.Popover | null>(null)
    const [childNode, setChildNode] = useState<Gtk.Widget | null>(null)
    const [parentNode, setParentNode] = useState<Gtk.Widget | null>(null)

    useImperativeHandle(ref, () => popoverNode!)

    const popoverRef = useCallback((node: Gtk.Popover | null) => {
      setPopoverNode(node)
    }, [])

    useEffect(() => {
      if (!popoverNode || !childNode || !parentNode) {
        return
      }

      childNode.unparent()
      popoverNode.setParent(parentNode)
      popoverNode.setChild(childNode)
    }, [popoverNode, childNode, parentNode])

    useEffect(() => {
      if (!popoverNode || !childNode || !parentNode) {
        return
      }

      if (open) {
        popoverNode.popup()
      } else {
        popoverNode.popdown()
      }
    }, [popoverNode, childNode, parentNode, open])

    return (
      <PopoverContext.Provider
        value={{
          setChildNode,
          setParentNode,
        }}
      >
        <Popover ref={popoverRef} {...props} />
        {children}
      </PopoverContext.Provider>
    )
  }
)

interface ChildProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const PopoverChild = function PopoverChild({ children }: ChildProps) {
  const popover = useContext(PopoverContext)

  if (!popover) {
    throw new Error("Popover child must be inside a popover container")
  }

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget | null) => {
      popover.setChildNode(node)
    },
  })

  return childWithRef
}

interface ParentProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const PopoverParent = function PopoverParent({ children }: ParentProps) {
  const popover = useContext(PopoverContext)

  if (!popover) {
    throw new Error("Popover parent must be inside a popover container")
  }

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget | null) => {
      popover.setParentNode(node)
    },
  })

  return childWithRef
}

export default {
  Container: PopoverComponent,
  Child: PopoverChild,
  Parent: PopoverParent,
}
