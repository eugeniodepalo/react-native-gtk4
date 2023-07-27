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
import usePortal from "../hooks/usePortal.js"

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
  const [group, setGroup] = useState<Gtk.CheckButton | null>(null)
  const innerRef = useRef<Gtk.CheckButton | null>(null)

  const groupRef = useCallback((node: Gtk.CheckButton | null) => {
    setGroup(node)
  }, [])

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    const checkButton = innerRef.current

    if (!checkButton) {
      return
    }

    if (radio) {
      checkButton.setGroup(group)
    } else {
      checkButton.setGroup(null)
    }

    return () => {
      checkButton.setGroup(null)
    }
  }, [group])

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

  usePortal(radio ? <CheckButton ref={groupRef} visible={false} /> : null)

  return <CheckButton ref={innerRef} active={active} {...props} />
})
