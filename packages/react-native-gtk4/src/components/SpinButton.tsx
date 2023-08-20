import React, { useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { SpinButton } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import _ from "lodash"

type Props = JSX.IntrinsicElements["SpinButton"] & {
  range?: [number, number]
}

export default React.memo(
  forwardRef<Gtk.SpinButton, Props>(function SpinButtonComponent(
    { range = [], ...props },
    ref
  ) {
    const [innerRef, setInnerRef] = useForwardedRef(ref)

    useEffect(() => {
      const spinButton = innerRef.current

      if (!spinButton) {
        return
      }

      spinButton.setRange(range[0] ?? 0, range[1] ?? 0)

      return () => {
        spinButton.setRange(0, 0)
      }
    }, [range])

    return <SpinButton ref={setInnerRef} {...props} />
  }),
  _.isEqual
)
