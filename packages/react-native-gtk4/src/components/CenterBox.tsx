import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { CenterBox } from "../generated/intrinsics.js"
import usePortal from "../hooks/usePortal.js"

type Props = Omit<
  JSX.IntrinsicElements["CenterBox"],
  "startWidget" | "endWidget" | "centerWidget" | "children"
> & {
  start?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  end?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  children?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
}

type PortalProps = {
  start?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  end?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  center?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  centerBox: Gtk.CenterBox
}

const Portal = function Portal({ start, end, center, centerBox }: PortalProps) {
  const startRef = useRef<Gtk.Widget | null>(null)
  const centerRef = useRef<Gtk.Widget | null>(null)
  const endRef = useRef<Gtk.Widget | null>(null)

  useEffect(() => {
    centerBox.setStartWidget(startRef.current)
    centerBox.setCenterWidget(centerRef.current)
    centerBox.setEndWidget(endRef.current)
  }, [start, end, center, centerBox])

  return (
    <>
      {start
        ? React.cloneElement(start, {
            ref: startRef,
          })
        : null}
      {center
        ? React.cloneElement(center, {
            ref: centerRef,
          })
        : null}
      {end
        ? React.cloneElement(end, {
            ref: endRef,
          })
        : null}
    </>
  )
}

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { start, end, children, ...props },
  ref
) {
  const [centerBox, setCenterBox] = useState<Gtk.CenterBox | null>(null)

  const innerRef = useCallback((node: Gtk.CenterBox | null) => {
    setCenterBox(node)
  }, [])

  usePortal(
    centerBox ? (
      <Portal start={start} end={end} center={children} centerBox={centerBox} />
    ) : null
  )

  useImperativeHandle(ref, () => centerBox!)

  return <CenterBox ref={innerRef} {...props} />
})
