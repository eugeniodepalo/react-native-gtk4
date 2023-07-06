import React from "react"
import { useState, useCallback, forwardRef } from "react"
const Frame = "Frame"

export default forwardRef<any, JSX.IntrinsicElements["Frame"]>(
  function FrameComponent({ labelWidget, ...props }, ref) {
    const [labelWidgetRef, setLabelWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setLabelWidgetRef(node)
    }, [])
    return (
      <>
        {labelWidget}
        <Frame ref={ref} labelWidget={labelWidgetRef} {...props} />
      </>
    )
  }
)
