import React from "react"
import { ApplicationWindow, Box } from "react-native-gtk4"
import { application } from "../app.js"

export default function App() {
  return (
    <>
      <ApplicationWindow title="Hello Flatpak" application={application}>
        <Box>Hello from Flatpak!</Box>
      </ApplicationWindow>
    </>
  )
}
