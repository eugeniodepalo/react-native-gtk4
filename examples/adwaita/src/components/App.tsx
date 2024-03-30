import React, { useState } from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  Gtk,
  useApplication,
} from "react-native-gtk4"
import { Toast } from "./Toast"

export default function App() {
  const [count, setCount] = useState(0)
  const { quit } = useApplication()

  return (
    <ApplicationWindow title="Hello World" onCloseRequest={quit}>
      <Box orientation={Gtk.Orientation.VERTICAL}>
        <Toast />
      </Box>
    </ApplicationWindow>
  )
}
