import React from "react"
import { useState, useCallback, forwardRef } from "react"

const Paned = "Paned"

export default forwardRef<any, JSX.IntrinsicElements["Paned"]>(
  function PanedComponent({ endChild, startChild, ...props }, ref) {
    const [endChildRef, setEndChildRef] = useState<any>(null)
    useCallback((node: any) => {
      setEndChildRef(node)
    }, [])
    const [startChildRef, setStartChildRef] = useState<any>(null)
    useCallback((node: any) => {
      setStartChildRef(node)
    }, [])
    return (
      <>
        {endChild}
        {startChild}
        <Paned
          ref={ref}
          endChild={endChildRef}
          startChild={startChildRef}
          {...props}
        />
      </>
    )
  }
)
