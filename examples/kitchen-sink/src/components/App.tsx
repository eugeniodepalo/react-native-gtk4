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
  Image,
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
    <ApplicationWindow
      title="Kitchen Sink"
      application={application}
      defaultWidth={800}
      defaultHeight={600}
    >
      <Grid.Container vexpand hexpand>
        <Grid.Item col={0} row={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} vexpand hexpand>
            {stackNode ? <StackSidebar stack={stackNode} /> : null}
            <Stack.Container
              visibleChildName="child1"
              ref={stackRef}
              vexpand
              hexpand
            >
              <Stack.Item name="child1">
                <Label label="Stack 1" vexpand hexpand />
              </Stack.Item>
              <Stack.Item name="child2">
                <Label label="Stack 2" vexpand hexpand />
              </Stack.Item>
            </Stack.Container>
            <Overlay.Container vexpand hexpand>
              <Overlay.Child>
                <Image
                  iconName="face-smile"
                  iconSize={Gtk.IconSize.LARGE}
                  vexpand
                  hexpand
                />
              </Overlay.Child>
              <Overlay.Item>
                <Label label="Label 1" vexpand hexpand />
              </Overlay.Item>
            </Overlay.Container>
            <Notebook.Container vexpand hexpand>
              <Notebook.Tab label="Tab 1">
                <Label label="Notebook 1" vexpand hexpand />
              </Notebook.Tab>
              <Notebook.Tab label="Tab 2">
                <Label label="Notebook 2" vexpand hexpand />
              </Notebook.Tab>
            </Notebook.Container>
            <Button
              vexpand
              hexpand
              label={`Button ${count}`}
              onClicked={() => {
                setCount(count + 1)
                return false
              }}
            />
          </Box>
        </Grid.Item>
        <Grid.Item col={1} row={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} vexpand hexpand>
            <ListBox vexpand hexpand>
              <ListBoxRow vexpand hexpand>
                <Label label="List Box 1" vexpand hexpand />
              </ListBoxRow>
              <ListBoxRow vexpand hexpand>
                <Label label="List Box 2" vexpand hexpand />
              </ListBoxRow>
            </ListBox>
          </Box>
        </Grid.Item>
        <Grid.Item col={0} row={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} vexpand hexpand>
            <Paned vexpand hexpand>
              <Label label="Paned Start" vexpand hexpand />
              <Label label="Paned End" vexpand hexpand />
            </Paned>
          </Box>
        </Grid.Item>
        <Grid.Item col={1} row={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} vexpand hexpand>
            <Expander vexpand hexpand>
              <Label label="Expander" vexpand hexpand />
            </Expander>
            <HeaderBar vexpand hexpand>
              <Label label="Header Bar 1" vexpand hexpand />
              <Button label="Header Bar 2" vexpand hexpand />
            </HeaderBar>
            <Button
              onClicked={() => {
                setRevealed(!revealed)
                return false
              }}
              label="Reveal"
              vexpand
              hexpand
            />
            <Revealer revealChild={revealed} vexpand hexpand>
              <Label label="Revealer" vexpand hexpand />
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
                  vexpand
                  hexpand
                  onClicked={() => {
                    setPopoverOpen(!popoverOpen)
                    return false
                  }}
                />
              </Popover.Parent>
              <Popover.Child>
                <Label label="Popover" vexpand hexpand />
              </Popover.Child>
            </Popover.Container>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </ApplicationWindow>
  )
}
