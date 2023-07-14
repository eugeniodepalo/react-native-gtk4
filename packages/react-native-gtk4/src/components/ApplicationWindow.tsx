import React from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const ApplicationWindow = "ApplicationWindow"

type Props = Omit<JSX.IntrinsicElements["ApplicationWindow"], "application"> & {
  application: Gtk.Application
}

export default forwardRef<Gtk.ApplicationWindow, Props>(
  function ApplicationWindowComponent({ application, ...props }, ref) {
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
  }
)
