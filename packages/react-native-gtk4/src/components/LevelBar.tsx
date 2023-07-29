import React, { useEffect, useRef, useImperativeHandle } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { LevelBar } from "../generated/intrinsics.js"

type Props = Omit<JSX.IntrinsicElements["LevelBar"], "children"> & {
  offsets?: Record<string, number>
}

export const DEFAULT_OFFSETS = {
  [Gtk.LEVEL_BAR_OFFSET_LOW!]: 0.25,
  [Gtk.LEVEL_BAR_OFFSET_HIGH!]: 0.75,
  [Gtk.LEVEL_BAR_OFFSET_FULL!]: 1.0,
}

export default forwardRef<Gtk.LevelBar | null, Props>(
  function LevelBarComponent({ offsets, ...props }, ref) {
    const innerRef = useRef<Gtk.LevelBar | null>(null)

    useImperativeHandle(ref, () => innerRef.current!)

    useEffect(() => {
      const levelBar = innerRef.current

      if (!levelBar || !offsets) {
        return
      }

      const names = Object.keys(offsets)

      for (const offset of Object.keys(DEFAULT_OFFSETS)) {
        levelBar.removeOffsetValue(offset)
      }

      for (const name of names) {
        levelBar.addOffsetValue(name, offsets[name])
      }

      return () => {
        for (const name of names) {
          levelBar.removeOffsetValue(name)
        }

        for (const offset of Object.keys(DEFAULT_OFFSETS)) {
          levelBar.addOffsetValue(offset, DEFAULT_OFFSETS[offset])
        }
      }
    }, [offsets])

    return <LevelBar ref={innerRef} {...props}></LevelBar>
  }
)
