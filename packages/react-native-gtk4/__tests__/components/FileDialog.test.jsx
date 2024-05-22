import React from "react"
import { render, setup } from "../../test-support/index.js"
import {
  SingleFileDialog,
  MultipleFileDialog,
} from "../../src/components/FileDialog.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("FileDialog", () => {
  beforeEach(setup)

  beforeEach(() => {
    Gio.Cancellable.mockImplementation(() => {
      let cancelCallback

      return {
        connect: jest.fn((callback) => {
          cancelCallback = callback
        }),
        cancel: jest.fn(() => {
          cancelCallback()
        }),
      }
    })
  })

  describe("SingleFileDialog", () => {
    describe("with file selectionType", () => {
      test("it should open the dialog and call onFinished", async () => {
        const onFinished = jest.fn()

        render(<SingleFileDialog onFinished={onFinished} />)

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.open.mock.calls[0][2](null, "result")

        expect(dialog.open).toHaveBeenCalled()
        expect(dialog.openFinish).toHaveBeenCalledWith("result")
        expect(onFinished).toHaveBeenCalled()
      })

      test("it should call onCancelled when openFinish throws an error", async () => {
        const onCancelled = jest.fn()

        render(<SingleFileDialog onCancelled={onCancelled} />)

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.openFinish.mockImplementation(() => {
          throw new Error()
        })

        dialog.open.mock.calls[0][2](null, "result")

        expect(dialog.open).toHaveBeenCalled()
        expect(onCancelled).toHaveBeenCalled()
      })
    })

    describe("with folder selectionType", () => {
      test("it should open the dialog and call onFinished", async () => {
        const onFinished = jest.fn()

        render(
          <SingleFileDialog onFinished={onFinished} selectionType="folder" />
        )

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.selectFolder.mock.calls[0][2](null, "result")

        expect(dialog.selectFolder).toHaveBeenCalled()
        expect(dialog.selectFolderFinish).toHaveBeenCalledWith("result")
        expect(onFinished).toHaveBeenCalled()
      })

      test("it should call onCancelled when selectFolderFinish throws an error", async () => {
        const onCancelled = jest.fn()

        render(
          <SingleFileDialog onCancelled={onCancelled} selectionType="folder" />
        )

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.selectFolderFinish.mockImplementation(() => {
          throw new Error()
        })

        dialog.selectFolder.mock.calls[0][2](null, "result")

        expect(dialog.selectFolder).toHaveBeenCalled()
        expect(onCancelled).toHaveBeenCalled()
      })
    })

    describe("with save selectionType", () => {
      test("it should open the dialog and call onFinished", async () => {
        const onFinished = jest.fn()

        render(
          <SingleFileDialog onFinished={onFinished} selectionType="save" />
        )

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.save.mock.calls[0][2](null, "result")

        expect(dialog.save).toHaveBeenCalled()
        expect(dialog.saveFinish).toHaveBeenCalledWith("result")
        expect(onFinished).toHaveBeenCalled()
      })

      test("it should call onCancelled when saveFinish throws an error", async () => {
        const onCancelled = jest.fn()

        render(
          <SingleFileDialog onCancelled={onCancelled} selectionType="save" />
        )

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.saveFinish.mockImplementation(() => {
          throw new Error()
        })

        dialog.save.mock.calls[0][2](null, "result")

        expect(dialog.save).toHaveBeenCalled()
        expect(onCancelled).toHaveBeenCalled()
      })
    })
  })

  describe("MultipleFileDialog", () => {
    describe("with file selectionType", () => {
      test("it should open the dialog and call onFinished", async () => {
        const onFinished = jest.fn()

        render(<MultipleFileDialog onFinished={onFinished} />)

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.openMultiple.mock.calls[0][2](null, "result")

        expect(dialog.openMultiple).toHaveBeenCalled()
        expect(dialog.openMultipleFinish).toHaveBeenCalledWith("result")
        expect(onFinished).toHaveBeenCalled()
      })

      test("it should call onCancelled when openFinish throws an error", async () => {
        const onCancelled = jest.fn()

        render(<MultipleFileDialog onCancelled={onCancelled} />)

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.openMultipleFinish.mockImplementation(() => {
          throw new Error()
        })

        dialog.openMultiple.mock.calls[0][2](null, "result")

        expect(dialog.openMultiple).toHaveBeenCalled()
        expect(onCancelled).toHaveBeenCalled()
      })
    })

    describe("with folder selectionType", () => {
      test("it should open the dialog and call onFinished", async () => {
        const onFinished = jest.fn()

        render(
          <MultipleFileDialog onFinished={onFinished} selectionType="folder" />
        )

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.selectMultipleFolders.mock.calls[0][2](null, "result")

        expect(dialog.selectMultipleFolders).toHaveBeenCalled()
        expect(dialog.selectMultipleFoldersFinish).toHaveBeenCalledWith(
          "result"
        )
        expect(onFinished).toHaveBeenCalled()
      })

      test("it should call onCancelled when selectFolderFinish throws an error", async () => {
        const onCancelled = jest.fn()

        render(
          <MultipleFileDialog
            onCancelled={onCancelled}
            selectionType="folder"
          />
        )

        const dialog = Gtk.FileDialog.mock.instances[0]

        dialog.selectMultipleFoldersFinish.mockImplementation(() => {
          throw new Error()
        })

        dialog.selectMultipleFolders.mock.calls[0][2](null, "result")

        expect(dialog.selectMultipleFolders).toHaveBeenCalled()
        expect(onCancelled).toHaveBeenCalled()
      })
    })
  })
})
