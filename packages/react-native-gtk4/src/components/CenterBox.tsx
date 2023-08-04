import React, { useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { CenterBox } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import { useForwardedRef } from "../utils.js"

type Props = Omit<
  JSX.IntrinsicElements["CenterBox"],
  "startWidget" | "endWidget" | "centerWidget" | "children"
> & {
  start?: (React.ReactElement & React.RefAttributes<Gtk.Widget>) | null
  end?: (React.ReactElement & React.RefAttributes<Gtk.Widget>) | null
  children?: (React.ReactElement & React.RefAttributes<Gtk.Widget>) | null
}

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { start, end, children, ...props },
  ref
) {
  const [innerRef, setInnerRef] = useForwardedRef(ref)
  const [startRef, setStartRef] = useForwardedRef(start?.ref)
  const [centerRef, setCenterRef] = useForwardedRef(children?.ref)
  const [endRef, setEndRef] = useForwardedRef(end?.ref)

  useEffect(() => {
    const centerBox = innerRef.current

    if (!centerBox) {
      return
    }

    centerBox.setStartWidget(startRef.current)
    centerBox.setCenterWidget(centerRef.current)
    centerBox.setEndWidget(endRef.current)

    return () => {
      centerBox.setStartWidget(null)
      centerBox.setCenterWidget(null)
      centerBox.setEndWidget(null)
    }
  }, [start, end, children])

  return (
    <>
      {createPortal(
        <>
          {start
            ? React.cloneElement(start, {
                ref: setStartRef,
              })
            : null}
          {children
            ? React.cloneElement(children, {
                ref: setCenterRef,
              })
            : null}
          {end
            ? React.cloneElement(end, {
                ref: setEndRef,
              })
            : null}
        </>
      )}
      <CenterBox ref={setInnerRef} {...props} />
    </>
  )
})
