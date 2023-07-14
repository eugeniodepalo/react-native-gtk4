import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = Omit<JSX.IntrinsicElements["HeaderBar"], "titleWidget" | "ref"> & {
  titleWidget?: React.ReactElement
}

const HeaderBar = "HeaderBar"

export default forwardRef<Gtk.HeaderBar, Props>(function HeaderBarComponent(
  { titleWidget, ...props },
  ref
) {
  const [titleWidgetNode, setTitleWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const titleWidgetRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setTitleWidgetNode(node))
  }, [])
  const titleWidgetElement = titleWidget
    ? React.cloneElement(titleWidget, {
        ref: titleWidgetRef,
      })
    : null
  return (
    <>
      {titleWidgetElement}
      <HeaderBar ref={ref} titleWidget={titleWidgetNode} {...props} />
    </>
  )
})
