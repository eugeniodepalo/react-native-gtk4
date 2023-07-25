import React, { useState } from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  CssProvider,
  Gtk,
  useApplication,
} from "react-native-gtk4"

export default function App() {
  const [count, setCount] = useState(0)
  const { quit } = useApplication()

  return (
    <CssProvider path="data/styles.css">
      <ApplicationWindow title="Hello World" onCloseRequest={quit}>
        <Box orientation={Gtk.Orientation.VERTICAL}>
          <>Hello World! You clicked {count} times.</>
          <Button
            cssClasses={["custom-button"]}
            label="Click Me"
            onClicked={() => {
              setCount((count) => count + 1)
            }}
          />
        </Box>
      </ApplicationWindow>
    </CssProvider>
  )
}
