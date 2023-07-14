import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = JSX.IntrinsicElements["SearchBar"] & {
  keyCaptureWidget?: React.ReactElement
}

const SearchBar = "SearchBar"

export default forwardRef<Gtk.SearchBar, Props>(function SearchBarComponent(
  { keyCaptureWidget, ...props },
  ref
) {
  const [keyCaptureWidgetNode, setKeyCaptureWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const keyCaptureWidgetRef = useCallback((node: Gtk.Widget) => {
    setKeyCaptureWidgetNode(node)
  }, [])
  const keyCaptureWidgetElement = keyCaptureWidget
    ? React.cloneElement(keyCaptureWidget, {
        ref: keyCaptureWidgetRef,
      })
    : null
  return (
    <>
      {keyCaptureWidgetElement}
      <SearchBar ref={ref} keyCaptureWidget={keyCaptureWidgetNode} {...props} />
    </>
  )
})
