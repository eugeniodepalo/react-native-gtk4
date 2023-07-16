import React, { useState } from "react"
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
  CheckButton,
  HeaderBar,
  Popover,
  Revealer,
  Entry,
  ProgressBar,
  Scale,
  SearchBar,
  Spinner,
  Switch,
  TextView,
  AboutDialog,
  CenterBox,
} from "react-native-gtk4"

export default function App() {
  const [count, setCount] = useState(0)
  const [stackNode, setStackNode] = useState<Gtk.Stack | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [entryText, setEntryText] = useState("")
  const [searchText, setSearchText] = useState("")
  const [switchActive, setSwitchActive] = useState(false)
  const [searchModeEnabled, setSearchModeEnabled] = useState(false)
  const [showAboutDialog, setShowAboutDialog] = useState(false)
  const [stackVisibleChildName, setStackVisibleChildName] = useState("child1")
  const [notebookPage, setNotebookPage] = useState(0)

  const stackRef = (node: Gtk.Stack | null) => {
    setStackNode(node)
  }

  return (
    <ApplicationWindow
      title="Kitchen Sink"
      defaultWidth={800}
      defaultHeight={600}
      titlebar={
        <HeaderBar vexpand hexpand title={<Label label="Kitchen Sink" />}>
          <Label label="Header Bar 1" vexpand hexpand />
          <Button label="Header Bar 2" vexpand hexpand />
        </HeaderBar>
      }
    >
      <Grid.Container vexpand hexpand>
        <Grid.Item col={0} row={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} vexpand hexpand>
            {stackNode ? (
              <StackSidebar stack={stackNode} vexpand hexpand />
            ) : null}
            <Stack.Container
              visibleChildName={stackVisibleChildName ?? ""}
              onNotifyVisibleChildName={(stack) => {
                setStackVisibleChildName(stack.visibleChildName ?? "")
              }}
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
            <Overlay
              vexpand
              hexpand
              content={
                <Image
                  iconName="face-smile"
                  iconSize={Gtk.IconSize.LARGE}
                  vexpand
                  hexpand
                />
              }
            >
              <Label label="Label 1" vexpand hexpand />
            </Overlay>
            <Notebook.Container
              vexpand
              hexpand
              page={notebookPage}
              onChangeCurrentPage={(notebook) => {
                setNotebookPage(notebook.getCurrentPage())
                return false
              }}
            >
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
            <Spinner />
            <ProgressBar fraction={0.5} showText />
            <Scale digits={1} drawValue hexpand />
            <SearchBar hexpand vexpand searchModeEnabled={searchModeEnabled}>
              <Entry
                text={searchText}
                onChanged={(entry) => {
                  setSearchText(entry.text ?? "")
                }}
              />
            </SearchBar>
            <Button
              label="Toggle Search Mode"
              vexpand
              hexpand
              onClicked={() => {
                setSearchModeEnabled(!searchModeEnabled)
              }}
            />
            <Entry
              text={entryText}
              onChanged={(entry) => {
                setEntryText(entry.text ?? "")
              }}
              placeholderText="Type here..."
            />
            <TextView vexpand hexpand />
            <CheckButton label="Radio Button 1" active />
            <CheckButton label="Radio Button 2" />
            <Switch
              active={switchActive}
              onActivate={(node) => {
                setSwitchActive(node.active)
              }}
            />
            <CenterBox vexpand hexpand>
              <Label label="Center Box 1" />
              <Label label="Center Box 2" />
              <Label label="Center Box 3" />
            </CenterBox>
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
            <Expander vexpand hexpand label={<Label label="Expander" />}>
              <Label label="Expander Content" vexpand hexpand />
            </Expander>
            <Button
              onClicked={() => {
                setRevealed(!revealed)
              }}
              label="Reveal"
              vexpand
              hexpand
            />
            <Revealer revealChild={revealed} vexpand hexpand>
              <Box>
                <Label label="Revealer" vexpand hexpand />
              </Box>
            </Revealer>
            <Popover
              open={popoverOpen}
              content={
                <Button
                  label="Popover"
                  vexpand
                  hexpand
                  onClicked={() => {
                    setPopoverOpen(!popoverOpen)
                  }}
                />
              }
              onShow={() => {
                setPopoverOpen(true)
              }}
              onHide={() => {
                setPopoverOpen(false)
              }}
            >
              <Label label="Popover" vexpand hexpand />
            </Popover>
            <Button
              label={
                showAboutDialog ? "Hide About Dialog" : "Show About Dialog"
              }
              vexpand
              hexpand
              onClicked={() => {
                setShowAboutDialog(true)
              }}
            />
          </Box>
        </Grid.Item>
      </Grid.Container>
      {showAboutDialog ? (
        <AboutDialog
          artists={["Artist 1", "Artist 2"]}
          authors={["Author 1", "Author 2"]}
          comments="Comments"
          copyright="Copyright"
          onCloseRequest={() => {
            setShowAboutDialog(false)
            return false
          }}
          creditSections={[
            {
              sectionName: "Section 1",
              people: ["Person 1", "Person 2"],
            },
          ]}
        />
      ) : null}
    </ApplicationWindow>
  )
}
