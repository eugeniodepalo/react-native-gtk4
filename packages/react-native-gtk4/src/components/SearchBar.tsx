import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../index.js"

const SearchBar = "SearchBar"

export default forwardRef<Gtk.SearchBar, JSX.IntrinsicElements["SearchBar"]>(
  function SearchBarComponent({ keyCaptureWidget, ...props }, ref) {
    const [keyCaptureWidgetRef, setKeyCaptureWidgetRef] = useState<
      Gtk.SearchBar | undefined
    >()
    useCallback((node: Gtk.SearchBar) => {
      setKeyCaptureWidgetRef(node)
    }, [])
    return (
      <>
        {keyCaptureWidget}
        <SearchBar
          ref={ref}
          keyCaptureWidget={keyCaptureWidgetRef}
          {...props}
        />
      </>
    )
  }
)
