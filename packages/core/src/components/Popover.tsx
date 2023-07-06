import React from "react"
import { useState, useCallback, forwardRef } from "react"
const Popover = "Popover"

export default forwardRef<any, JSX.IntrinsicElements["Popover"]>(
  function PopoverComponent({ defaultWidget, ...props }, ref) {
    const [defaultWidgetRef, setDefaultWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setDefaultWidgetRef(node)
    }, [])
    return (
      <>
        {defaultWidget}
        <Popover ref={ref} defaultWidget={defaultWidgetRef} {...props} />
      </>
    )
  }
)
