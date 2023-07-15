import React, { useState } from "react"
import { ApplicationWindow, Box, Button, Gtk } from "react-native-gtk4"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApplicationWindow title="Increment">
        <Box orientation={Gtk.Orientation.VERTICAL}>
          <>Shared counter: {count}</>
          <Button
            label="Increment Counter"
            onClicked={() => {
              setCount((count) => count + 1)
              return false
            }}
          />
        </Box>
      </ApplicationWindow>
      <ApplicationWindow title="Decrement">
        <Box orientation={Gtk.Orientation.VERTICAL}>
          <>Shared counter: {count}</>
          <Button
            label="Decrement Counter"
            onClicked={() => {
              setCount((count) => count - 1)
              return false
            }}
          />
        </Box>
      </ApplicationWindow>
    </>
  )
}
