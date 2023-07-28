import React, { useEffect, useImperativeHandle, useRef } from "react"
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
  const titleRef = useRef<Gtk.Widget | null>(null)
  const innerRef = useRef<Gtk.HeaderBar | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    const headerBar = innerRef.current

    if (!headerBar) {
      return
    }

    headerBar.setTitleWidget(titleRef.current)

    return () => {
      headerBar.setTitleWidget(null)
    }
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
      <HeaderBar ref={innerRef} {...props} />
    </>
  )
})
