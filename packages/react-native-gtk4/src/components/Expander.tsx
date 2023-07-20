import React, { useCallback, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"

const Expander = "Expander"

type Props = Omit<
  JSX.IntrinsicElements["Expander"],
  "labelWidget" | "label"
> & {
  children: React.ReactNode
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.Expander, Props>(function ExpanderComponent(
  { label, ...props },
  ref
) {
  const labelRef = useRef<Gtk.Widget | null>(null)
  const expanderRef = useRef<Gtk.Expander | null>(null)

  useImperativeHandle(ref, () => expanderRef.current!)

  const setLabelRef = useCallback((node: Gtk.Widget | null) => {
    labelRef.current = node

    if (!node || !expanderRef.current) {
      return
    }

    node.unparent()
    expanderRef.current.setLabelWidget(node)
  }, [])

  return (
    <>
      {label && typeof label !== "string"
        ? React.cloneElement(label, {
            ref: setLabelRef,
          })
        : null}
      <Expander
        ref={expanderRef}
        label={typeof label === "string" ? label : undefined}
        {...props}
      />
    </>
  )
})
