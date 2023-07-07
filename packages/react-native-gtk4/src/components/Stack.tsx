import React from "react"
import { useState, useCallback, forwardRef } from "react"

const Stack = "Stack"

export default forwardRef<any, JSX.IntrinsicElements["Stack"]>(
  function StackComponent({ visibleChild, ...props }, ref) {
    const [visibleChildRef, setVisibleChildRef] = useState<any>(null)
    useCallback((node: any) => {
      setVisibleChildRef(node)
    }, [])
    return (
      <>
        {visibleChild}
        <Stack ref={ref} visibleChild={visibleChildRef} {...props} />
      </>
    )
  }
)
