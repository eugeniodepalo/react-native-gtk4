import React, { useEffect, useRef, useImperativeHandle } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Scale } from "../generated/intrinsics.js"
import _ from "lodash"

interface ScaleMark {
  label: string
  value: number
  position?: Gtk.PositionType
}

type Props = Omit<JSX.IntrinsicElements["Scale"], "children"> & {
  marks?: ScaleMark[]
  value?: number
  range: [number, number]
}

export default React.memo(
  forwardRef<Gtk.Scale | null, Props>(function ScaleComponent(
    { marks, range, value, ...props },
    ref
  ) {
    const innerRef = useRef<Gtk.Scale | null>(null)

    useImperativeHandle(ref, () => innerRef.current!)

    useEffect(() => {
      const scale = innerRef.current

      if (!scale || !marks) {
        return
      }

      for (const mark of marks) {
        scale.addMark(
          mark.value,
          mark.position ?? Gtk.PositionType.BOTTOM,
          mark.label
        )
      }

      return () => {
        scale.clearMarks()
      }
    }, [marks])

    useEffect(() => {
      const scale = innerRef.current

      if (!scale) {
        return
      }

      scale.setRange(range[0], range[1])

      return () => {
        scale.setRange(0, 0)
      }
    }, [range[0], range[1]])

    useEffect(() => {
      const scale = innerRef.current

      if (!scale) {
        return
      }

      scale.setValue(value ?? 0)

      return () => {
        scale.setValue(0)
      }
    }, [value])

    return <Scale ref={innerRef} {...props}></Scale>
  }),
  _.isEqual
)
