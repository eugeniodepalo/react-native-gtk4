import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = Omit<
  JSX.IntrinsicElements["Window"],
  "defaultWidget" | "titlebar" | "ref"
> & {
  defaultWidget?: React.ReactElement
  titlebar?: React.ReactElement
}

const Window = "Window"

export default forwardRef<Gtk.Window, Props>(function WindowComponent(
  { defaultWidget, titlebar, ...props },
  ref
) {
  const [defaultWidgetNode, setDefaultWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const defaultWidgetRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setDefaultWidgetNode(node))
  }, [])
  const defaultWidgetElement = defaultWidget
    ? React.cloneElement(defaultWidget, {
        ref: defaultWidgetRef,
      })
    : null
  const [titlebarNode, setTitlebarNode] = useState<Gtk.Widget | undefined>()
  const titlebarRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setTitlebarNode(node))
  }, [])
  const titlebarElement = titlebar
    ? React.cloneElement(titlebar, {
        ref: titlebarRef,
      })
    : null
  return (
    <>
      {defaultWidgetElement}
      {titlebarElement}
      <Window
        ref={ref}
        defaultWidget={defaultWidgetNode}
        titlebar={titlebarNode}
        {...props}
      />
    </>
  )
})
