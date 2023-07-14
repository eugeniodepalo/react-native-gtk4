import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = JSX.IntrinsicElements["Stack"] & {
  visibleChild?: React.ReactElement
}

const Stack = "Stack"

export default forwardRef<Gtk.Stack, Props>(function StackComponent(
  { visibleChild, ...props },
  ref
) {
  const [visibleChildNode, setVisibleChildNode] = useState<
    Gtk.Widget | undefined
  >()
  const visibleChildRef = useCallback((node: Gtk.Widget) => {
    setVisibleChildNode(node)
  }, [])
  const visibleChildElement = visibleChild
    ? React.cloneElement(visibleChild, {
        ref: visibleChildRef,
      })
    : null
  return (
    <>
      {visibleChildElement}
      <Stack ref={ref} visibleChild={visibleChildNode} {...props} />
    </>
  )
})
