import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import FontDialogButton from "../../src/components/FontDialogButton.js"
import { mockProperty } from "../../src/test-support/utils.js"
import Gtk from "@girs/node-gtk-4.0"

describe("FontDialogButton", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.FontDialogButton, "dialog")

    Gtk.FontDialog.mockImplementation(function ({
      modal,
      title,
      filter,
      fontMap,
      language,
    }) {
      this.modal = modal
      this.title = title
      this.filter = filter
      this.fontMap = fontMap
      this.language = language
    })
  })

  test("should render null when Gtk.FontDialog is undefined", () => {
    const FontDialog = Gtk.FontDialog

    Gtk.FontDialog = undefined

    render(<FontDialogButton />)
    const button = findBy({ type: "FontDialogButton" })

    expect(button).toBeNull()

    Gtk.FontDialog = FontDialog
  })

  test("should render correctly", () => {
    render(<FontDialogButton title="test" modal={true} />)
    const button = findBy({ type: "FontDialogButton" })

    expect(button).not.toBeNull()
    expect(button.node.dialog.title).toEqual("test")
    expect(button.node.dialog.modal).toEqual(true)
  })

  test("should default modal prop to true", () => {
    render(<FontDialogButton title="test" />)
    const button = findBy({ type: "FontDialogButton" })

    expect(button.node.dialog.modal).toEqual(true)
  })

  test("should recreate dialog when title or modal changes", () => {
    render(<FontDialogButton title="test" modal={true} />)
    const dialog = Gtk.FontDialog.mock.instances[0]
    expect(dialog).toMatchObject({ title: "test", modal: true })

    render(<FontDialogButton title="test2" modal={false} />)
    const newDialog = Gtk.FontDialog.mock.instances[1]
    expect(newDialog).toMatchObject({ title: "test2", modal: false })
  })
})
