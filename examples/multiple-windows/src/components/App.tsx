import React from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  Gtk,
  HeaderBar,
} from "react-native-gtk4"
import { application } from "../app.js"

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <ApplicationWindow title="Increment" application={application}>
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
      <ApplicationWindow title="Decrement" application={application}>
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
