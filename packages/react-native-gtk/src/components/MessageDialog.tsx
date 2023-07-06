import React from "react"
import { useState, useCallback, forwardRef } from "react"

const MessageDialog = "MessageDialog"

export default forwardRef<any, JSX.IntrinsicElements["MessageDialog"]>(
  function MessageDialogComponent({ messageArea, ...props }, ref) {
    const [messageAreaRef, setMessageAreaRef] = useState<any>(null)
    useCallback((node: any) => {
      setMessageAreaRef(node)
    }, [])
    return (
      <>
        {messageArea}
        <MessageDialog ref={ref} messageArea={messageAreaRef} {...props} />
      </>
    )
  }
)
