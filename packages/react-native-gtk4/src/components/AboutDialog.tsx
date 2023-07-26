import React, { useCallback, useImperativeHandle, useRef } from "react"
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

export default forwardRef<Gtk.AboutDialog, Props>(function AboutDialogComponent(
  { creditSections = [], ...props },
  ref
) {
  const aboutDialogRef = useRef<Gtk.AboutDialog | null>(null)

  const setAboutDialogRef = useCallback((node: Gtk.AboutDialog | null) => {
    aboutDialogRef.current = node

    if (!node) {
      return
    }

    for (const { name, people } of creditSections) {
      node.addCreditSection(name, people)
    }
  }, [])

  usePortal(<AboutDialog ref={setAboutDialogRef} {...props} />)
  useImperativeHandle(ref, () => aboutDialogRef.current!)

  return null
})
