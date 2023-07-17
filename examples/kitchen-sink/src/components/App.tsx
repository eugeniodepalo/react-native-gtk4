import React, { useCallback, useState } from "react"
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
  const [showTitlebar, setShowTitlebar] = useState(true)
  const [stackVisibleChildName, setStackVisibleChildName] = useState("child1")
  const [notebookPage, setNotebookPage] = useState(0)

  const stackRef = useCallback((node: Gtk.Stack | null) => {
    setStackNode(node)
  }, [])

  return (
    <ApplicationWindow
      title="Kitchen Sink"
      defaultWidth={800}
      defaultHeight={600}
      titlebar={
        showTitlebar ? (
          <HeaderBar title={<Label label="Kitchen Sink" />}>
            <Label label="Header Bar 1" />
            <Button label="Header Bar 2" />
          </HeaderBar>
        ) : undefined
      }
    >
      <Grid.Container hexpand vexpand>
        <Grid.Item col={0} row={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
            {stackNode ? (
              <StackSidebar stack={stackNode} hexpand vexpand />
            ) : null}
            <Stack.Container
              hexpand
              vexpand
              visibleChildName={stackVisibleChildName ?? ""}
              onNotifyVisibleChildName={(stack) => {
                setStackVisibleChildName(stack.visibleChildName ?? "")
              }}
              ref={stackRef}
            >
              <Stack.Item name="child1">
                <Label label="Stack 1" />
              </Stack.Item>
              <Stack.Item name="child2">
                <Label label="Stack 2" />
              </Stack.Item>
            </Stack.Container>
            <Overlay
              content={
                <Image iconName="face-smile" iconSize={Gtk.IconSize.LARGE} />
              }
              hexpand
              vexpand
            >
              <Label label="Label 1" />
            </Overlay>
            <Notebook.Container
              hexpand
              vexpand
              page={notebookPage}
              onChangeCurrentPage={(notebook) => {
                setNotebookPage(notebook.getCurrentPage())
                return false
              }}
            >
              <Notebook.Tab label="Tab 1">
                <Label label="Notebook 1" />
              </Notebook.Tab>
              <Notebook.Tab label="Tab 2">
                <Label label="Notebook 2" />
              </Notebook.Tab>
            </Notebook.Container>
            <Button
              label={`Button ${count}`}
              onClicked={() => {
                setCount((count) => count + 1)
                setTimeout(() => {
                  setCount((count) => count + 1)
                }, 2000)
              }}
            />
            <Button
              label="Toggle Titlebar"
              onClicked={() => {
                setShowTitlebar(!showTitlebar)
              }}
            />
          </Box>
        </Grid.Item>
        <Grid.Item col={1} row={0} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
            <ListBox hexpand vexpand>
              <ListBoxRow>
                <Label label="List Box 1" />
              </ListBoxRow>
              <ListBoxRow>
                <Label label="List Box 2" />
              </ListBoxRow>
            </ListBox>
            <Spinner spinning />
            <ProgressBar fraction={0.5} showText />
            <Scale digits={1} drawValue />
            <SearchBar searchModeEnabled={searchModeEnabled}>
              <Entry
                text={searchText}
                onChanged={(entry) => {
                  setSearchText(entry.text ?? "")
                }}
              />
            </SearchBar>
            <Button
              label="Toggle Search Mode"
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
            <TextView />
            <CheckButton label="Radio Button 1" active />
            <CheckButton label="Radio Button 2" />
            <Switch
              active={switchActive}
              onActivate={(node) => {
                setSwitchActive(node.active)
              }}
            />
            <CenterBox
              start={<Label label="Center Box Start" />}
              end={<Label label="Center Box End" />}
              hexpand
              vexpand
            >
              <Label label="Center Box Center" />
            </CenterBox>
          </Box>
        </Grid.Item>
        <Grid.Item col={0} row={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
            <Paned hexpand vexpand>
              <Label label="Paned Start" />
              <Label label="Paned End" />
            </Paned>
          </Box>
        </Grid.Item>
        <Grid.Item col={1} row={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
            <Expander label={<Label label="Expander" />} hexpand vexpand>
              <Label label="Expander Content" />
            </Expander>
            <Button
              onClicked={() => {
                setRevealed(!revealed)
              }}
              label="Reveal"
            />
            <Revealer revealChild={revealed} hexpand vexpand>
              <Label label="Revealer" />
            </Revealer>
            <Popover
              open={popoverOpen}
              hexpand
              vexpand
              content={<Label label="Popover" />}
              onShow={() => {
                setPopoverOpen(true)
              }}
              onHide={() => {
                setPopoverOpen(false)
              }}
            >
              <Button
                label="Popover"
                onClicked={() => {
                  setPopoverOpen(!popoverOpen)
                }}
              />
            </Popover>
            <Button
              label={
                showAboutDialog ? "Hide About Dialog" : "Show About Dialog"
              }
              onClicked={() => {
                setShowAboutDialog(!showAboutDialog)
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
