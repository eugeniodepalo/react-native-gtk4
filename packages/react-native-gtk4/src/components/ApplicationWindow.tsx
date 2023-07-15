import React from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"
import useApplication from "../hooks/useApplication.js"

const ApplicationWindow = "ApplicationWindow"

export default forwardRef<
  Gtk.ApplicationWindow,
  JSX.IntrinsicElements["ApplicationWindow"]
>(function ApplicationWindowComponent(props, ref) {
  const application = useApplication()

  return (
    <ApplicationWindow
      ref={ref}
      application={application}
      onCloseRequest={() => {
        if (application.getWindows().length === 1) {
          process.exit(0)
        }
        return false
      }}
      {...props}
    />
  )
})
