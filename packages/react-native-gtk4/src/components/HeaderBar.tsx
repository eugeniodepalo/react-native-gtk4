import React, {
  useCallback,
  useEffect,
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
  const [titleWidget, setTitleWidget] = useState<Gtk.Widget | null>(null)
  const innerRef = useRef<Gtk.HeaderBar | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    const headerBar = innerRef.current

    if (!headerBar) {
      return
    }

    headerBar.setTitleWidget(titleWidget)

    return () => {
      headerBar.setTitleWidget(null)
    }
  }, [titleWidget])

  const titleRef = useCallback((node: Gtk.Widget | null) => {
    setTitleWidget(node)
  }, [])

  return (
    <>
      {createPortal(
        title
          ? React.cloneElement(title, {
              ref: titleRef,
            })
          : null
      )}
      <HeaderBar ref={innerRef} {...props} />{" "}
    </>
  )
})
