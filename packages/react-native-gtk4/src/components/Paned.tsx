import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Paned = "Paned"
const PanedContext = React.createContext<Gtk.Paned | undefined>(undefined)

type Props = JSX.IntrinsicElements["Paned"] & {
  children: React.ReactNode
}

const PanedComponent = forwardRef<Gtk.Paned, Props>(function PanedComponent(
  { children, ...props },
  ref
) {
  const [panedNode, setPanedNode] = useState<Gtk.Paned | undefined>(undefined)

  useImperativeHandle(ref, () => panedNode!)

  const panedRef = useCallback((node: Gtk.Paned) => {
    setPanedNode(node)
  }, [])

  return (
    <PanedContext.Provider value={panedNode}>
      <Paned ref={panedRef} {...props}>
        {children}
      </Paned>
    </PanedContext.Provider>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  start?: boolean
  end?: boolean
}

const PanedItem = function PanedItem({
  children,
  start = false,
  end = false,
}: ItemProps) {
  const panedNode = useContext(PanedContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | undefined>(undefined)

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      setChildNode(node)
    },
  })

  useEffect(() => {
    if (!panedNode || !childNode) {
      return
    }

    if (start) {
      panedNode.setStartChild(childNode)
    } else if (end) {
      panedNode.setEndChild(childNode)
    }

    return () => {
      if (start) {
        panedNode.setStartChild(null)
      } else if (end) {
        panedNode.setEndChild(null)
      }
    }
  }, [panedNode, childNode, start, end])

  return childWithRef
}

export default {
  Container: PanedComponent,
  Item: PanedItem,
}
