import { useEffect, useMemo } from "react"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import useApplication from "../hooks/useApplication.js"
import _ from "lodash"

type FileDialogProps = Partial<
  Pick<
    Gtk.FileDialog,
    | "acceptLabel"
    | "defaultFilter"
    | "filters"
    | "initialFile"
    | "initialFolder"
    | "initialName"
    | "modal"
    | "title"
  >
>

type Props = FileDialogProps & {
  onCancelled?: () => void
}

type SingleSelectionDialogProps = Props & {
  selectionType?: "file" | "folder" | "save"
  onFinished?: (selection: Gio.File | null) => void
}

type MultipleSelectionDialogProps = Props & {
  selectionType?: "file" | "folder"
  onFinished?: (selection: Gio.ListModel | null) => void
}

const useFileDialog = ({
  acceptLabel,
  defaultFilter,
  filters,
  initialFile,
  initialFolder,
  initialName,
  modal,
  title,
}: Props) => {
  return useMemo(() => {
    return new Gtk.FileDialog(
      _.omitBy(
        {
          accept_label: acceptLabel,
          default_filter: defaultFilter,
          filters,
          initial_file: initialFile,
          initial_folder: initialFolder,
          initial_name: initialName,
          modal,
          title,
        },
        _.isUndefined
      )
    )
  }, [
    acceptLabel,
    defaultFilter,
    filters,
    initialFile,
    initialFolder,
    initialName,
    modal,
    title,
  ])
}

export function SingleFileDialog({
  selectionType = "file",
  onFinished,
  onCancelled,
  ...props
}: SingleSelectionDialogProps) {
  const { application } = useApplication()
  const dialog = useFileDialog(props)

  useEffect(() => {
    const cancellable = new Gio.Cancellable()

    cancellable.connect(() => {
      onCancelled?.()
    })

    const handleFinish = (fn: () => Gio.File | null) => {
      try {
        const value = fn()
        onFinished?.(value)
      } catch (error) {
        cancellable.cancel()
      }
    }

    switch (selectionType) {
      case "file":
        dialog.open(null, cancellable, (_, result) => {
          handleFinish(() => dialog.openFinish(result))
        })
        break
      case "folder":
        dialog.selectFolder(null, cancellable, (_, result) => {
          handleFinish(() => dialog.selectFolderFinish(result))
        })
        break
      case "save":
        dialog.save(null, cancellable, (_, result) => {
          handleFinish(() => dialog.saveFinish(result))
        })
        break
    }
  }, [application, dialog, selectionType])

  return null
}

export function MultipleFileDialog({
  selectionType = "file",
  onFinished,
  onCancelled,
  ...props
}: MultipleSelectionDialogProps) {
  const { application } = useApplication()
  const dialog = useFileDialog(props)

  useEffect(() => {
    const cancellable = new Gio.Cancellable()

    cancellable.connect(() => {
      onCancelled?.()
    })

    const handleFinish = (fn: () => Gio.ListModel | null) => {
      try {
        const value = fn()
        onFinished?.(value)
      } catch (error) {
        cancellable.cancel()
      }
    }

    switch (selectionType) {
      case "file":
        dialog.openMultiple(null, cancellable, (_, result) => {
          handleFinish(() => dialog.openMultipleFinish(result))
        })
        break
      case "folder":
        dialog.selectMultipleFolders(null, cancellable, (_, result) => {
          handleFinish(() => dialog.selectMultipleFoldersFinish(result))
        })
        break
    }
  }, [application, dialog, selectionType])

  return null
}
