import React, { useCallback } from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  Grid,
  Gtk,
  Label,
  Notebook,
  Overlay,
  Stack,
  ListBox,
  ListBoxRow,
  StackSidebar,
  Paned,
  Expander,
  HeaderBar,
  Popover,
  Revealer,
} from "react-native-gtk4"
import { application } from "../app.js"

export default function App() {
  const [count, setCount] = React.useState(0)
  const [stackNode, setStackNode] = React.useState<Gtk.Stack | null>(null)
  const stackRef = useCallback((node: Gtk.Stack | null) => {
    setStackNode(node)
  }, [])
  const [revealed, setRevealed] = React.useState(false)
  const [popoverOpen, setPopoverOpen] = React.useState(false)

  return (
    <ApplicationWindow title="Kitchen Sink" application={application}>
      <Grid.Container>
        <Grid.Item col={0} row={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            {stackNode ? <StackSidebar stack={stackNode} /> : null}
            <Stack.Container visibleChildName="child1" ref={stackRef}>
              <Stack.Item name="child1">
                <Button label="Switch 1" />
              </Stack.Item>
              <Stack.Item name="child2">
                <Button label="Switch 2" />
              </Stack.Item>
            </Stack.Container>
            <Overlay.Container>
              <Overlay.Child>
                <Button label="Button 1" />
              </Overlay.Child>
              <Overlay.Item>
                <Label label="Label 1" />
              </Overlay.Item>
            </Overlay.Container>
            <Notebook.Container>
              <Notebook.Tab label="Tab 1">
                <Button label="Button 1" />
              </Notebook.Tab>
              <Notebook.Tab label="Tab 2">
                <Button label="Button 2" />
              </Notebook.Tab>
            </Notebook.Container>
            <Button
              label="Button 1"
              onClicked={() => {
                setCount(count + 1)
                return false
              }}
            />
          </Box>
        </Grid.Item>
        <Grid.Item col={1} row={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <Button label="Button 2" />
            <ListBox>
              <ListBoxRow>
                <Label label="Row 1" />
              </ListBoxRow>
              <ListBoxRow>
                <Label label="Row 2" />
              </ListBoxRow>
            </ListBox>
          </Box>
        </Grid.Item>
        <Grid.Item col={0} row={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <Button label="Button 3" />
            <Paned>
              <Button label="Start" />
              <Button label="End" />
            </Paned>
          </Box>
        </Grid.Item>
        <Grid.Item col={1} row={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <Expander>
              <Button label="Button 4" />
            </Expander>
            <HeaderBar>
              <Label label="Header Bar" />
              <Button label="Button 5" />
            </HeaderBar>
            <Button
              onClicked={() => {
                setRevealed(!revealed)
                return false
              }}
              label="Reveal"
            />
            <Revealer revealChild={revealed}>
              <Label label="Revealer" />
            </Revealer>
            <Popover.Container
              open={popoverOpen}
              onShow={() => {
                setPopoverOpen(true)
                return false
              }}
              onHide={() => {
                setPopoverOpen(false)
                return false
              }}
            >
              <Popover.Parent>
                <Button
                  label="Popover"
                  onClicked={() => {
                    setPopoverOpen(!popoverOpen)
                    return false
                  }}
                />
              </Popover.Parent>
              <Popover.Child>
                <Label label="Popover" />
              </Popover.Child>
            </Popover.Container>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </ApplicationWindow>
  )
}
