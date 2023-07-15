import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Paned = "Paned"

type Props = Omit<JSX.IntrinsicElements["Paned"], "children"> & {
  children: [
    React.ReactElement<JSX.IntrinsicElements["Widget"]>,
    React.ReactElement<JSX.IntrinsicElements["Widget"]>,
  ]
}

export default forwardRef<Gtk.Paned, Props>(function PanedComponent(
  { children, ...props },
  ref
) {
  const [panedNode, setPanedNode] = useState<Gtk.Paned | null>(null)
  const [startChildNode, setStartChildNode] = useState<Gtk.Widget | null>(null)
  const [endChildNode, setEndChildNode] = useState<Gtk.Widget | null>(null)

  useImperativeHandle(ref, () => panedNode!)

  const [startChild, endChild] = children

  const startChildRef = useCallback((node: Gtk.Widget | null) => {
    setStartChildNode(node)
  }, [])

  const endChildRef = useCallback((node: Gtk.Widget | null) => {
    setEndChildNode(node)
  }, [])

  const startChildWithRef = React.cloneElement(startChild, {
    ref: startChildRef,
  })

  const endChildWithRef = React.cloneElement(endChild, {
    ref: endChildRef,
  })

  const panedRef = useCallback((node: Gtk.Paned | null) => {
    setPanedNode(node)
  }, [])

  useEffect(() => {
    if (!panedNode || !startChildNode || !endChildNode) {
      return
    }

    panedNode.setStartChild(startChildNode)
    panedNode.setEndChild(endChildNode)

    return () => {
      panedNode.setStartChild(null)
      panedNode.setEndChild(null)
    }
  }, [panedNode, startChildNode, endChildNode])

  return (
    <Paned ref={panedRef} {...props}>
      {startChildWithRef}
      {endChildWithRef}
    </Paned>
  )
})
