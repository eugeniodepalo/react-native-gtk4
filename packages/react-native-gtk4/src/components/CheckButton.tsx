import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
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

const CheckButtonComponent = forwardRef<Gtk.CheckButton, Props>(
  function CheckButtonComponent({ radio, active, ...props }, ref) {
    const checkButtonNode = useRef<Gtk.CheckButton | null>(null)
    const groupButtonNode = useRef<Gtk.CheckButton | null>(null)

    useImperativeHandle(ref, () => checkButtonNode.current!)

    const commitMount = () => {
      if (!checkButtonNode.current) {
        return
      }

      if (radio) {
        checkButtonNode.current.setGroup(groupButtonNode.current)
      } else {
        checkButtonNode.current.setGroup(null)
      }

      checkButtonNode.current.setActive(active ?? false)
    }

    const checkButtonRef = useCallback((node: Gtk.CheckButton | null) => {
      checkButtonNode.current = node
      commitMount()
    }, [])

    const groupButtonRef = useCallback((node: Gtk.CheckButton | null) => {
      groupButtonNode.current = node
      commitMount()
    }, [])

    useEffect(() => {
      commitMount()

      return () => {
        checkButtonNode.current?.setActive(false)
      }
    }, [radio, active])

    usePortal(
      radio ? <CheckButton ref={groupButtonRef} visible={false} /> : null
    )

    return <CheckButton ref={checkButtonRef} active={active} {...props} />
  }
)

export default CheckButtonComponent
