import React, { useCallback, useEffect, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { CheckButton } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import { useForwardedRef } from "../utils.js"

type Props = Omit<JSX.IntrinsicElements["CheckButton"], "group"> & {
  radio?: boolean
}

export default forwardRef<Gtk.CheckButton, Props>(function CheckButtonComponent(
  { radio, active = false, ...props },
  ref
) {
  const [group, setGroup] = useState<Gtk.CheckButton | null>(null)
  const [innerRef, setInnerRef] = useForwardedRef(ref)

  const groupRef = useCallback((node: Gtk.CheckButton | null) => {
    setGroup(node)
  }, [])

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
      {radio ? createPortal(<CheckButton ref={groupRef} />) : null}
      <CheckButton ref={setInnerRef} group={group ?? undefined} {...props} />
    </>
  )
})
