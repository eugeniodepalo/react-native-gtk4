import React, { useEffect, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import usePortal from "../hooks/usePortal.js"
import Gtk from "@girs/node-gtk-4.0"
import { AboutDialog } from "../generated/intrinsics.js"

export interface AboutDialogCreditSection {
  name: string
  people: string[]
}

type Props = JSX.IntrinsicElements["AboutDialog"] & {
  creditSections?: AboutDialogCreditSection[]
}

const Portal = forwardRef<Gtk.AboutDialog, Props>(function Portal(
  { creditSections = [], ...props },
  ref
) {
  const innerRef = useRef<Gtk.AboutDialog | null>(null)

  useImperativeHandle(ref, () => innerRef.current!)

  useEffect(() => {
    if (!innerRef.current) {
      return
    }

    for (const { name, people } of creditSections) {
      innerRef.current.addCreditSection(name, people)
    }
  }, [])

  return <AboutDialog ref={innerRef} {...props} />
})

export default forwardRef<Gtk.AboutDialog, Props>(
  function AboutDialogComponent(props, ref) {
    usePortal(<Portal ref={ref} {...props} />)
    return null
  }
)
