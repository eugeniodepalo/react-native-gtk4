import React from "react"
import { ApplicationWindow, Box } from "react-native-gtk4"

export default function App() {
  return (
    <>
      <ApplicationWindow title="Hello Flatpak">
        <Box>Hello from Flatpak!</Box>
      </ApplicationWindow>
    </>
  )
}
