import React from "react"
import { ApplicationWindow, Box, Button } from "react-native-gtk"

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <ApplicationWindow title="Hello World">
      <Box>
        <>Hello World! You clicked {count} times.</>
        <Button
          label="Click Me"
          onClicked={() => {
            setCount((count) => count + 1)
          }}
        />
      </Box>
    </ApplicationWindow>
  )
}
