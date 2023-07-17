import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const CenterBox = "CenterBox"

type Props = Omit<
  JSX.IntrinsicElements["CenterBox"],
  "startWidget" | "endWidget" | "centerWidget" | "children"
> & {
  start?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  end?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  children?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { start, end, children, ...props },
  ref
) {
  const centerBoxRef = useRef<Gtk.CenterBox | null>(null)
  const [startNode, setStartNode] = useState<Gtk.Widget | null>(null)
  const [centerNode, setCenterNode] = useState<Gtk.Widget | null>(null)
  const [endNode, setEndNode] = useState<Gtk.Widget | null>(null)

  const startChildRef = useCallback((node: Gtk.Widget | null) => {
    setStartNode(node)
  }, [])

  const endChildRef = useCallback((node: Gtk.Widget | null) => {
    setEndNode(node)
  }, [])

  const centerChildRef = useCallback((node: Gtk.Widget | null) => {
    setCenterNode(node)
  }, [])

  useImperativeHandle(ref, () => centerBoxRef.current!)

  return (
    <CenterBox
      ref={centerBoxRef}
      centerWidget={centerNode ?? undefined}
      startWidget={startNode ?? undefined}
      endWidget={endNode ?? undefined}
      {...props}
    >
      {start
        ? React.cloneElement(start, {
            ref: startChildRef,
          })
        : null}
      {children
        ? React.cloneElement(children, {
            ref: centerChildRef,
          })
        : null}
      {end
        ? React.cloneElement(end, {
            ref: endChildRef,
          })
        : null}
    </CenterBox>
  )
})
