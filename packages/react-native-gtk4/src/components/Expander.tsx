import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Expander } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

type Props = Omit<
  JSX.IntrinsicElements["Expander"],
  "labelWidget" | "label"
> & {
  children: React.ReactNode
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
}

export default forwardRef<Gtk.Expander, Props>(function ExpanderComponent(
  { label, ...props },
  ref
) {
  const [labelWidget, setLabelWidget] = useState<Gtk.Widget | null>(null)
  const innerRef = useRef<Gtk.Expander | null>(null)

  useEffect(() => {
    const expander = innerRef.current

    if (!expander) {
      return
    }

    expander.setLabelWidget(labelWidget)
  }, [labelWidget])

  const labelRef = useCallback((node: Gtk.Widget | null) => {
    setLabelWidget(node)
  }, [])

  useImperativeHandle(ref, () => innerRef.current!)

  return (
    <>
      {createPortal(
        label && typeof label !== "string"
          ? React.cloneElement(label, {
              ref: labelRef,
            })
          : null
      )}
      <Expander
        ref={innerRef}
        label={typeof label === "string" ? label : undefined}
        {...props}
      />
    </>
  )
})
