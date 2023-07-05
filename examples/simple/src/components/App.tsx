import React from "react"
import { Window, Box, Button } from "@react-native-gtk/react"

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <Window title="Hello World">
      <Box>
        <>Hello World! You clicked {count} times.</>
        <Button
          label="Click Me"
          onClick={() => {
            setCount((count) => count + 1)
          }}
        />
      </Box>
    </Window>
  )
}
