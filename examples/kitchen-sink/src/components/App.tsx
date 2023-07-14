import React from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  Grid,
  Gtk,
  HeaderBar,
  Notebook,
} from "react-native-gtk4"
import { application } from "../app.js"

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <ApplicationWindow title="Kitchen Sink" application={application}>
      <Grid.Container>
        <Grid.Item left={0} top={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <Notebook.Container>
              <Notebook.Tab label="Tab 1">
                <Button label="Button 1" />
              </Notebook.Tab>
              <Notebook.Tab label="Tab 2">
                <Button label="Button 2" />
              </Notebook.Tab>
            </Notebook.Container>
            <HeaderBar
              titleWidget={
                count % 2 === 0 ? <Button label="Button Text" /> : undefined
              }
            />
            <Button
              label="Button 1"
              onClicked={() => {
                setCount(count + 1)
                return false
              }}
            />
          </Box>
        </Grid.Item>
        <Grid.Item left={1} top={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <Button label="Button 2" />
          </Box>
        </Grid.Item>
        <Grid.Item left={0} top={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <Button label="Button 3" />
          </Box>
        </Grid.Item>
        <Grid.Item left={1} top={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <Button label="Button 4" />
          </Box>
        </Grid.Item>
      </Grid.Container>
    </ApplicationWindow>
  )
}
