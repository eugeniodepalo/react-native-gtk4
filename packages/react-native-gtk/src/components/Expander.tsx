import React from "react"
import { useState, useCallback, forwardRef } from "react"

const Expander = "Expander"

export default forwardRef<any, JSX.IntrinsicElements["Expander"]>(
  function ExpanderComponent({ labelWidget, ...props }, ref) {
    const [labelWidgetRef, setLabelWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setLabelWidgetRef(node)
    }, [])
    return (
      <>
        {labelWidget}
        <Expander ref={ref} labelWidget={labelWidgetRef} {...props} />
      </>
    )
  }
)
