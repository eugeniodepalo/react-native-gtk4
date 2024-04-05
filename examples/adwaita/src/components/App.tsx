import React from "react"
import { ApplicationWindow, Box, Gtk, useApplication } from "react-native-gtk4"
import { Toast } from "./Toast"

export default function App() {
  const { quit } = useApplication()

  return (
    <ApplicationWindow title="Hello World" onCloseRequest={quit}>
      <Box orientation={Gtk.Orientation.VERTICAL}>
        <Toast />
      </Box>
    </ApplicationWindow>
  )
}
