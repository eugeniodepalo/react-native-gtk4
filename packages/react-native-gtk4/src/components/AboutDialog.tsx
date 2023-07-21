import React, { useCallback, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import useApplication from "../hooks/useApplication.js"
import { AboutDialog } from "../generated/intrinsics.js"

export interface AboutDialogCreditSection {
  sectionName: string
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
  const { application } = useApplication()

  const setAboutDialogRef = useCallback((node: Gtk.AboutDialog | null) => {
    aboutDialogRef.current = node

    if (!node) {
      return
    }

    for (const { sectionName, people } of creditSections) {
      node.addCreditSection(sectionName, people)
    }

    const activeWindow = application.getActiveWindow()

    if (activeWindow) {
      node.setDestroyWithParent(true)
      node.setModal(true)
      node.setTransientFor(activeWindow)
    }

    node.present()
  }, [])

  useImperativeHandle(ref, () => aboutDialogRef.current!)

  return <AboutDialog ref={setAboutDialogRef} {...props} />
})
