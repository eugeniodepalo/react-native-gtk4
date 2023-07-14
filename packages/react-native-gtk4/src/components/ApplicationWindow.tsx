import React from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const ApplicationWindow = "ApplicationWindow"

export default forwardRef<
  Gtk.ApplicationWindow,
  JSX.IntrinsicElements["ApplicationWindow"]
>(function ApplicationWindowComponent({ application, ...props }, ref) {
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
