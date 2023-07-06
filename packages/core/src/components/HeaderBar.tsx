import React from "react"
import { useState, useCallback, forwardRef } from "react"
const HeaderBar = "HeaderBar"

export default forwardRef<any, JSX.IntrinsicElements["HeaderBar"]>(
  function HeaderBarComponent({ titleWidget, ...props }, ref) {
    const [titleWidgetRef, setTitleWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setTitleWidgetRef(node)
    }, [])
    return (
      <>
        {titleWidget}
        <HeaderBar ref={ref} titleWidget={titleWidgetRef} {...props} />
      </>
    )
  }
)
