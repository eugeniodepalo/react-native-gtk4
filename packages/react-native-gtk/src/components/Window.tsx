import React from "react"
import { useState, useCallback, forwardRef } from "react"
const Window = "Window"

export default forwardRef<any, JSX.IntrinsicElements["Window"]>(
  function WindowComponent(
    { defaultWidget, focusWidget, titlebar, ...props },
    ref
  ) {
    const [defaultWidgetRef, setDefaultWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setDefaultWidgetRef(node)
    }, [])
    const [focusWidgetRef, setFocusWidgetRef] = useState<any>(null)
    useCallback((node: any) => {
      setFocusWidgetRef(node)
    }, [])
    const [titlebarRef, setTitlebarRef] = useState<any>(null)
    useCallback((node: any) => {
      setTitlebarRef(node)
    }, [])
    return (
      <>
        {defaultWidget}
        {focusWidget}
        {titlebar}
        <Window
          ref={ref}
          defaultWidget={defaultWidgetRef}
          focusWidget={focusWidgetRef}
          titlebar={titlebarRef}
          {...props}
        />
      </>
    )
  }
)
