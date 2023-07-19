import React from "react"
import { ApplicationWindow, Box, useApplication } from "react-native-gtk4"

export default function App() {
  const { quit } = useApplication()

  return (
    <ApplicationWindow title="Hello Flatpak" onCloseRequest={quit}>
      <Box>Hello from Flatpak!</Box>
    </ApplicationWindow>
  )
}
