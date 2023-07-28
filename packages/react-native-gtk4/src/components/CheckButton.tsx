import React, { useEffect, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { CheckButton } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

type Props = Omit<
  JSX.IntrinsicElements["CheckButton"],
  "group" | "children"
> & {
  radio?: boolean
}

export default forwardRef<Gtk.CheckButton, Props>(function CheckButtonComponent(
  { radio, active, ...props },
  ref
) {
  const groupRef = useRef<Gtk.CheckButton | null>(null)
  const innerRef = useRef<Gtk.CheckButton | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    const checkButton = innerRef.current

    if (!checkButton) {
      return
    }

    if (radio) {
      checkButton.setGroup(groupRef.current)
    } else {
      checkButton.setGroup(null)
    }

    return () => {
      checkButton.setGroup(null)
    }
  }, [radio])

  useEffect(() => {
    const checkButton = innerRef.current

    if (!checkButton) {
      return
    }

    checkButton.setActive(active ?? false)

    return () => {
      checkButton.setActive(false)
    }
  }, [active])

  return (
    <>
      {radio
        ? createPortal(<CheckButton ref={groupRef} visible={false} />)
        : null}
      <CheckButton ref={innerRef} active={active} {...props} />
    </>
  )
})
