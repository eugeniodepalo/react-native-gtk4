import React, { useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { AboutDialog } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import { useForwardedRef } from "../utils.js"

export interface AboutDialogCreditSection {
  name: string
  people: string[]
}

type Props = JSX.IntrinsicElements["AboutDialog"] & {
  creditSections?: AboutDialogCreditSection[]
}

const Inner = forwardRef<Gtk.AboutDialog, Props>(
  function AboutDialogInnerComponent({ creditSections = [], ...props }, ref) {
    const [innerRef, setInnerRef] = useForwardedRef(ref)

    useEffect(() => {
      if (!innerRef.current) {
        return
      }

      for (const { name, people } of creditSections) {
        innerRef.current.addCreditSection(name, people)
      }
    }, [])

    return <AboutDialog ref={setInnerRef} {...props} />
  }
)

export default forwardRef<Gtk.AboutDialog, Props>(function AboutDialogComponent(
  { creditSections = [], ...props },
  ref
) {
  return createPortal(
    <Inner
      key={JSON.stringify(creditSections)}
      ref={ref}
      creditSections={creditSections}
      {...props}
    />
  )
})
