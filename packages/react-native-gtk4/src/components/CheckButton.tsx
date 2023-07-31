import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
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
  { radio, active = false, ...props },
  ref
) {
  const [group, setGroup] = useState<Gtk.CheckButton | null>(null)
  const innerRef = useRef<Gtk.CheckButton | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  const groupRef = useCallback((node: Gtk.CheckButton | null) => {
    setGroup(node)
  }, [])

  useEffect(() => {
    const checkButton = innerRef.current

    if (!checkButton) {
      return
    }

    checkButton.setActive(active)

    return () => {
      checkButton.setActive(false)
    }
  }, [active])

  return (
    <>
      {radio ? createPortal(<CheckButton ref={groupRef} />) : null}
      <CheckButton ref={innerRef} group={group ?? undefined} {...props} />
    </>
  )
})
