import React from "react"
import { useState, useCallback, forwardRef } from "react"
const Label = "Label"

export default forwardRef<any, JSX.IntrinsicElements["Label"]>(
  function LabelComponent({ mnemonicWidget, ...props }, ref) {
    const [mnemonicWidgetRef, setMnemonicWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setMnemonicWidgetRef(node)
    }, [])
    return (
      <>
        {mnemonicWidget}
        <Label ref={ref} mnemonicWidget={mnemonicWidgetRef} {...props} />
      </>
    )
  }
)
