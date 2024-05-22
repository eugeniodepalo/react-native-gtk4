import React, { useCallback, useState } from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  SingleFileDialog,
  Gio,
  Gtk,
  useApplication,
  MultipleFileDialog,
} from "react-native-gtk4"

export default function App() {
  const [singleSelectionType, setSelectionType] = useState(
    "file" as "file" | "folder" | "save"
  )

  const [multipleSelectionType, setMultipleSelectionType] = useState(
    "file" as "file" | "folder"
  )

  const [showFileDialog, setShowFileDialog] = useState(false)
  const [showMultipleFileDialog, setShowMultipleFileDialog] = useState(false)

  const { quit } = useApplication()

  const handleCancel = useCallback(() => {
    console.log("Cancelled")
    setShowFileDialog(false)
    setShowMultipleFileDialog(false)
  }, [])

  const handleFinish = useCallback((selection: Gio.File | null) => {
    console.log("Finished", selection)
    setShowFileDialog(false)
  }, [])

  const handleMultipleFinish = useCallback(
    (selection: Gio.ListModel | null) => {
      console.log("Finished multiple", selection)
      setShowMultipleFileDialog(false)
    },
    []
  )

  return (
    <ApplicationWindow title="File Dialogs" onCloseRequest={quit}>
      <Box orientation={Gtk.Orientation.VERTICAL}>
        {showFileDialog ? (
          <SingleFileDialog
            onCancelled={handleCancel}
            onFinished={handleFinish}
            selectionType={singleSelectionType}
          />
        ) : null}
        {showMultipleFileDialog ? (
          <MultipleFileDialog
            onCancelled={handleCancel}
            onFinished={handleMultipleFinish}
            selectionType={multipleSelectionType}
          />
        ) : null}
        <Button
          label="Open File Dialog"
          onClicked={() => {
            setSelectionType("file")
            setShowFileDialog(true)
          }}
        />
        <Button
          label="Open Folder Dialog"
          onClicked={() => {
            setSelectionType("folder")
            setShowFileDialog(true)
          }}
        />
        <Button
          label="Open Save Dialog"
          onClicked={() => {
            setSelectionType("save")
            setShowFileDialog(true)
          }}
        />
        <Button
          label="Open Multiple File Dialog"
          onClicked={() => {
            setMultipleSelectionType("file")
            setShowMultipleFileDialog(true)
          }}
        />
        <Button
          label="Open Multiple Folder Dialog"
          onClicked={() => {
            setMultipleSelectionType("folder")
            setShowMultipleFileDialog(true)
          }}
        />
      </Box>
    </ApplicationWindow>
  )
}
