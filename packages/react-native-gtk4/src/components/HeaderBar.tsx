import React, { useCallback, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { HeaderBar } from "../generated/intrinsics.js"

type Props = Omit<JSX.IntrinsicElements["HeaderBar"], "title"> & {
  children: React.ReactNode
  title?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
}

export default forwardRef<Gtk.HeaderBar, Props>(function HeaderBarComponent(
  { title, ...props },
  ref
) {
  const titleRef = useRef<Gtk.Widget | null>(null)
  const headerBarRef = useRef<Gtk.HeaderBar | null>(null)

  useImperativeHandle(ref, () => headerBarRef.current!)

  const setTitleRef = useCallback((node: Gtk.Widget | null) => {
    const prevNode = titleRef.current

    titleRef.current = node

    if (!node || !headerBarRef.current) {
      return
    }

    if (prevNode) {
      prevNode.unparent()
    }

    if (node) {
      node.unparent()
      headerBarRef.current.setTitleWidget(node)
    }
  }, [])

  return (
    <HeaderBar ref={headerBarRef} {...props}>
      {title
        ? React.cloneElement(title, {
            ref: setTitleRef,
          })
        : null}
    </HeaderBar>
  )
})
