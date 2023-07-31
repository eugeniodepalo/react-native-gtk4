import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { HeaderBar } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

type Props = Omit<JSX.IntrinsicElements["HeaderBar"], "title"> & {
  children: React.ReactNode
  title?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
}

export default forwardRef<Gtk.HeaderBar, Props>(function HeaderBarComponent(
  { title, ...props },
  ref
) {
  const [titleNode, setTitleNode] = useState<Gtk.Widget | null>(null)
  const innerRef = useRef<Gtk.HeaderBar | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  const titleRef = useCallback((node: Gtk.Widget | null) => {
    setTitleNode(node)
  }, [])

  return (
    <>
      {title
        ? createPortal(
            React.cloneElement(title, {
              ref: titleRef,
            })
          )
        : null}
      <HeaderBar
        ref={innerRef}
        titleWidget={titleNode ?? undefined}
        {...props}
      />
    </>
  )
})
