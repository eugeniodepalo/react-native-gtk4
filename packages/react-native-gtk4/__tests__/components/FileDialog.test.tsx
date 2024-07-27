import React from "react"
import { render, setup } from "@/test-support/index.js"
import {
  SingleFileDialog,
  MultipleFileDialog,
} from "@/components/FileDialog.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Gio from "@/generated/girs/node-gio-2.0.js"

const MockedGtk = Gtk as jest.Mocked<typeof Gtk>

describe("FileDialog", () => {
  beforeEach(setup)
  beforeEach(() => {
    let cancelCallback: () => void
    const BaseCancellable = Gio.Cancellable
    Gio.Cancellable = class extends BaseCancellable {
      connect(callback: any) {
        cancelCallback = callback
        return 0
      }
      cancel() {
        cancelCallback()
      }
    }
  })
  describe("SingleFileDialog", () => {
    describe("with file selectionType", () => {
      test("it should open the dialog and call onFinished", async () => {
        const onFinished = jest.fn()
        render(<SingleFileDialog onFinished={onFinished} />)
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        const result = new Gio.AsyncResult()
        dialog.open.mock.calls[0][2]?.(null, result, {})
        expect(dialog.open).toHaveBeenCalled()
        expect(dialog.openFinish).toHaveBeenCalledWith(result)
        expect(onFinished).toHaveBeenCalled()
      })
      test("it should call onCancelled when openFinish throws an error", async () => {
        const onCancelled = jest.fn()
        render(<SingleFileDialog onCancelled={onCancelled} />)
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        dialog.openFinish.mockImplementation(() => {
          throw new Error()
        })
        dialog.open.mock.calls[0][2]?.(null, new Gio.AsyncResult(), {})
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
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        const result = new Gio.AsyncResult()
        dialog.selectFolder.mock.calls[0][2]?.(null, result, {})
        expect(dialog.selectFolder).toHaveBeenCalled()
        expect(dialog.selectFolderFinish).toHaveBeenCalledWith(result)
        expect(onFinished).toHaveBeenCalled()
      })
      test("it should call onCancelled when selectFolderFinish throws an error", async () => {
        const onCancelled = jest.fn()
        render(
          <SingleFileDialog onCancelled={onCancelled} selectionType="folder" />
        )
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        dialog.selectFolderFinish.mockImplementation(() => {
          throw new Error()
        })
        dialog.selectFolder.mock.calls[0][2]?.(null, new Gio.AsyncResult(), {})
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
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        const result = new Gio.AsyncResult()
        dialog.save.mock.calls[0][2]?.(null, result, {})
        expect(dialog.save).toHaveBeenCalled()
        expect(dialog.saveFinish).toHaveBeenCalledWith(result)
        expect(onFinished).toHaveBeenCalled()
      })
      test("it should call onCancelled when saveFinish throws an error", async () => {
        const onCancelled = jest.fn()
        render(
          <SingleFileDialog onCancelled={onCancelled} selectionType="save" />
        )
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        dialog.saveFinish.mockImplementation(() => {
          throw new Error()
        })
        dialog.save.mock.calls[0][2]?.(null, new Gio.AsyncResult(), {})
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
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        const result = new Gio.AsyncResult()
        dialog.openMultiple.mock.calls[0][2]?.(null, result, {})
        expect(dialog.openMultiple).toHaveBeenCalled()
        expect(dialog.openMultipleFinish).toHaveBeenCalledWith(result)
        expect(onFinished).toHaveBeenCalled()
      })
      test("it should call onCancelled when openFinish throws an error", async () => {
        const onCancelled = jest.fn()
        render(<MultipleFileDialog onCancelled={onCancelled} />)
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        dialog.openMultipleFinish.mockImplementation(() => {
          throw new Error()
        })
        dialog.openMultiple.mock.calls[0][2]?.(null, new Gio.AsyncResult(), {})
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
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        const result = new Gio.AsyncResult()
        dialog.selectMultipleFolders.mock.calls[0][2]?.(null, result, {})
        expect(dialog.selectMultipleFolders).toHaveBeenCalled()
        expect(dialog.selectMultipleFoldersFinish).toHaveBeenCalledWith(result)
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
        const dialog = MockedGtk.FileDialog.mock
          .instances[0] as jest.Mocked<Gtk.FileDialog>
        dialog.selectMultipleFoldersFinish.mockImplementation(() => {
          throw new Error()
        })
        dialog.selectMultipleFolders.mock.calls[0][2]?.(
          null,
          new Gio.AsyncResult(),
          {}
        )
        expect(dialog.selectMultipleFolders).toHaveBeenCalled()
        expect(onCancelled).toHaveBeenCalled()
      })
    })
  })
})
