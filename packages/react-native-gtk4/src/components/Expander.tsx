import React, { useCallback, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Expander } from "../generated/intrinsics.js"

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
  const labelRef = useRef<Gtk.Widget | null>(null)
  const expanderRef = useRef<Gtk.Expander | null>(null)

  useImperativeHandle(ref, () => expanderRef.current!)

  const commitMount = useCallback(() => {
    if (!expanderRef.current) {
      return
    }

    if (labelRef.current) {
      labelRef.current.unparent()
      expanderRef.current.setLabelWidget(labelRef.current)
    }
  }, [])

  const setLabelRef = useCallback((node: Gtk.Widget | null) => {
    labelRef.current = node
    commitMount()
  }, [])

  const setExpanderRef = useCallback((node: Gtk.Expander | null) => {
    expanderRef.current = node
    commitMount()
  }, [])

  return (
    <>
      {label && typeof label !== "string"
        ? React.cloneElement(label, {
            ref: setLabelRef,
          })
        : null}
      <Expander
        ref={setExpanderRef}
        label={typeof label === "string" ? label : undefined}
        {...props}
      />
    </>
  )
})
