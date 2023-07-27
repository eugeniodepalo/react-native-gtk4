import React, { useEffect, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { AboutDialog } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"

export interface AboutDialogCreditSection {
  name: string
  people: string[]
}

type Props = JSX.IntrinsicElements["AboutDialog"] & {
  creditSections?: AboutDialogCreditSection[]
}

const Portal = forwardRef<Gtk.AboutDialog, Props>(function AboutDialogPortal(
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
    return createPortal(<Portal ref={ref} {...props} />)
  }
)
