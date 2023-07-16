import React, { useEffect, useImperativeHandle } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const HeaderBar = "HeaderBar"

type Props = Omit<JSX.IntrinsicElements["HeaderBar"], "title"> & {
  children: React.ReactNode
  title?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.HeaderBar, Props>(function HeaderBarComponent(
  { title, ...props },
  ref
) {
  const [titleNode, setTitleNode] = React.useState<Gtk.Widget | null>(null)

  const [headerBarNode, setHeaderBarNode] =
    React.useState<Gtk.HeaderBar | null>(null)

  const titleRef = (node: Gtk.Widget | null) => {
    setTitleNode(node)
  }

  const headerBarRef = (node: Gtk.HeaderBar | null) => {
    setHeaderBarNode(node)
  }

  useImperativeHandle(ref, () => headerBarNode!)

  const titleWithRef = title
    ? React.cloneElement(title, {
        ref: titleRef,
      })
    : null

  useEffect(() => {
    if (!titleNode || !headerBarNode) {
      return
    }

    titleNode.unparent()
    headerBarNode.setTitleWidget(titleNode)
  }, [titleNode, headerBarNode])

  return (
    <HeaderBar ref={headerBarRef} {...props}>
      {titleWithRef}
    </HeaderBar>
  )
})
