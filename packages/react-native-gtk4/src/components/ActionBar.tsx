import React, {
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ActionBar } from "../generated/intrinsics.js"

const ActionBarContext = React.createContext<Gtk.ActionBar | null>(null)

type Props = JSX.IntrinsicElements["ActionBar"] & {
  children: React.ReactNode
}

const ActionBarContainer = forwardRef<Gtk.ActionBar, Props>(
  function ActionBarContainer({ children, ...props }, ref) {
    const [actionBarNode, setActionBarNode] = useState<Gtk.ActionBar | null>(
      null
    )

    useImperativeHandle(ref, () => actionBarNode!)

    const actionBarRef = useCallback((node: Gtk.ActionBar | null) => {
      setActionBarNode(node)
    }, [])

    return (
      <ActionBarContext.Provider value={actionBarNode}>
        <ActionBar ref={actionBarRef} {...props}>
          {children}
        </ActionBar>
      </ActionBarContext.Provider>
    )
  }
)

interface SectionProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  align?: "start" | "center" | "end"
}

const ActionBarSection = function ActionBarSection({
  children,
  align = "start",
}: SectionProps) {
  const actionBarNode = useContext(ActionBarContext)
  const childRef = useRef<Gtk.Widget | null>(null)

  const setChildRef = useCallback(
    (node: Gtk.Widget | null) => {
      const prevNode = childRef.current

      childRef.current = node

      if (!actionBarNode) {
        return
      }

      if (prevNode) {
        actionBarNode.remove(prevNode)
      }

      if (node) {
        switch (align) {
          case "start":
            actionBarNode.packStart(node)
            break
          case "center":
            actionBarNode.setCenterWidget(node)
            break
          case "end":
            actionBarNode.packEnd(node)
            break
        }
      }
    },
    [actionBarNode, align]
  )

  return React.cloneElement(children, {
    ref: setChildRef,
  })
}

export default {
  Container: ActionBarContainer,
  Section: ActionBarSection,
}
