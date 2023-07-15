import React, { useEffect, useImperativeHandle, useState } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const AboutDialog = "AboutDialog"

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
  const [aboutDialogNode, setAboutDialogNode] =
    useState<Gtk.AboutDialog | null>(null)

  useImperativeHandle(ref, () => aboutDialogNode!)

  const aboutDialogRef = (node: Gtk.AboutDialog | null) => {
    setAboutDialogNode(node)
  }

  useEffect(() => {
    if (!aboutDialogNode) {
      return
    }

    for (const { sectionName, people } of creditSections) {
      aboutDialogNode.addCreditSection(sectionName, people)
    }

    aboutDialogNode.setFocus(aboutDialogNode)
    aboutDialogNode.present()
  }, [aboutDialogNode, creditSections])

  return <AboutDialog ref={aboutDialogRef} {...props} />
})
