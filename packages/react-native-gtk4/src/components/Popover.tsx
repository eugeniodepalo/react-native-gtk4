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
  node?: Gtk.Popover
  child?: Gtk.Widget
  parent?: Gtk.Widget
  setChildNode: (child: Gtk.Widget | undefined) => void
  setParentNode: (parent: Gtk.Widget | undefined) => void
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
    const [popoverNode, setPopoverNode] = useState<Gtk.Popover | undefined>(
      undefined
    )
    const [childNode, setChildNode] = useState<Gtk.Widget | undefined>(
      undefined
    )
    const [parentNode, setParentNode] = useState<Gtk.Widget | undefined>(
      undefined
    )

    useImperativeHandle(ref, () => popoverNode!)

    const popoverRef = useCallback((node: Gtk.Popover) => {
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
          node: popoverNode,
          child: childNode,
          parent: parentNode,
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
  const popoverNode = useContext(PopoverContext)!

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      popoverNode.setChildNode(node)
    },
  })

  return childWithRef
}

interface ParentProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const PopoverParent = function PopoverParent({ children }: ParentProps) {
  const popoverNode = useContext(PopoverContext)!

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      popoverNode.setParentNode(node)
    },
  })

  return childWithRef
}

export default {
  Container: PopoverComponent,
  Child: PopoverChild,
  Parent: PopoverParent,
}
