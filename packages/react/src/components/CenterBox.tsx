import React from "react"
import { useState, useCallback, forwardRef } from "react"

const CenterBox = "CenterBox"

export default forwardRef<any, JSX.IntrinsicElements["CenterBox"]>(
  function CenterBoxComponent(
    { centerWidget, endWidget, startWidget, ...props },
    ref
  ) {
    const [centerWidgetRef, setCenterWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setCenterWidgetRef(node)
    }, [])
    const [endWidgetRef, setEndWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setEndWidgetRef(node)
    }, [])
    const [startWidgetRef, setStartWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setStartWidgetRef(node)
    }, [])
    return (
      <>
        {centerWidget}
        {endWidget}
        {startWidget}
        <CenterBox
          ref={ref}
          centerWidget={centerWidgetRef}
          endWidget={endWidgetRef}
          startWidget={startWidgetRef}
          {...props}
        />
      </>
    )
  }
)
