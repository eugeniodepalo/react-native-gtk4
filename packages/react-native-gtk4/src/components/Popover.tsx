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

const PopoverContext = React.createContext<Gtk.Popover | null>(null)

type Props = JSX.IntrinsicElements["Popover"] & {
  children: React.ReactNode
  open?: boolean
}

const PopoverComponent = forwardRef<Gtk.Popover, Props>(
  function PopoverComponent({ children, open = false, ...props }, ref) {
    const [popoverNode, setPopoverNode] = useState<Gtk.Popover | null>(null)

    useImperativeHandle(ref, () => popoverNode!)

    const popoverRef = useCallback((node: Gtk.Popover | null) => {
      setPopoverNode(node)
    }, [])

    useEffect(() => {
      if (!popoverNode || !popoverNode.child || !popoverNode.parent) {
        return
      }

      if (open) {
        popoverNode.popup()
      } else {
        popoverNode.popdown()
      }
    }, [popoverNode, open])

    return (
      <PopoverContext.Provider value={popoverNode}>
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
  const popoverNode = useContext(PopoverContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | null>(null)

  const childRef = useCallback((node: Gtk.Widget | null) => {
    setChildNode(node)
  }, [])

  useEffect(() => {
    if (!popoverNode || !childNode) {
      return
    }

    childNode.unparent()
    popoverNode.setChild(childNode)
  }, [popoverNode, childNode])

  const childWithRef = React.cloneElement(children, {
    ref: childRef,
  })

  return childWithRef
}

interface ParentProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const PopoverParent = function PopoverParent({ children }: ParentProps) {
  const popover = useContext(PopoverContext)
  const [parentNode, setParentNode] = useState<Gtk.Widget | null>(null)

  const childRef = useCallback((node: Gtk.Widget | null) => {
    setParentNode(node)
  }, [])

  useEffect(() => {
    if (!popover || !parentNode) {
      return
    }

    popover.setParent(parentNode)
  }, [popover, parentNode])

  const childWithRef = React.cloneElement(children, {
    ref: childRef,
  })

  return childWithRef
}

export default {
  Container: PopoverComponent,
  Child: PopoverChild,
  Parent: PopoverParent,
}
