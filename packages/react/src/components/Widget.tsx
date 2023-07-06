import React from "react"
import { useState, useCallback, forwardRef } from "react"

const Widget = "Widget"

export default forwardRef<any, JSX.IntrinsicElements["Widget"]>(
  function WidgetComponent({ parent, ...props }, ref) {
    const [parentRef, setParentRef] = useState<any>(null)
    useCallback((node: any) => {
      setParentRef(node)
    }, [])
    return (
      <>
        {parent}
        <Widget ref={ref} parent={parentRef} {...props} />
      </>
    )
  }
)
