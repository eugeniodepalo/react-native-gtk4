import React, { useCallback, useState } from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"
import useApplication from "../hooks/useApplication.js"

const ApplicationWindow = "ApplicationWindow"

type Props = Omit<JSX.IntrinsicElements["ApplicationWindow"], "titlebar"> & {
  children: React.ReactNode
  titlebar?: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

export default forwardRef<Gtk.ApplicationWindow, Props>(
  function ApplicationWindowComponent({ titlebar, ...props }, ref) {
    const application = useApplication()
    const [titlebarNode, setTitlebarNode] = useState<Gtk.Widget | null>(null)

    const titlebarRef = useCallback((node: Gtk.Widget | null) => {
      setTitlebarNode(node)
    }, [])

    return (
      <>
        {titlebar
          ? React.cloneElement(titlebar, {
              ref: titlebarRef,
            })
          : null}
        <ApplicationWindow
          ref={ref}
          key={titlebarNode ? "with-titlebar" : "without-titlebar"}
          titlebar={titlebarNode ?? undefined}
          onCloseRequest={() => {
            if (application.getWindows().length === 1) {
              process.exit(0)
            }
            return false
          }}
          {...props}
        />
      </>
    )
  }
)
