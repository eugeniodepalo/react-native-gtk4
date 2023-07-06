import React from "react"
import { useState, useCallback, forwardRef } from "react"
const SearchBar = "SearchBar"

export default forwardRef<any, JSX.IntrinsicElements["SearchBar"]>(
  function SearchBarComponent({ keyCaptureWidget, ...props }, ref) {
    const [keyCaptureWidgetRef, setKeyCaptureWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
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
