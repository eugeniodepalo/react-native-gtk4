import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import ColorDialogButton from "../../src/components/ColorDialogButton.js"
import { mockProperty } from "../../src/test-support/utils.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ColorDialogButton", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.ColorDialogButton, "dialog")

    Gtk.ColorDialog.mockImplementation(function ({ modal, title }) {
      this.modal = modal
      this.title = title
    })
  })

  test("should render null when Gtk.ColorDialog is undefined", () => {
    const ColorDialog = Gtk.ColorDialog

    Gtk.ColorDialog = undefined

    render(<ColorDialogButton />)
    const button = findBy({ type: "ColorDialogButton" })

    expect(button).toBeNull()

    Gtk.ColorDialog = ColorDialog
  })

  test("should render correctly", () => {
    render(<ColorDialogButton title="test" modal={true} />)
    const button = findBy({ type: "ColorDialogButton" })

    expect(button).not.toBeNull()
    expect(button.node.dialog.title).toEqual("test")
    expect(button.node.dialog.modal).toEqual(true)
  })

  test("should default modal prop to true", () => {
    render(<ColorDialogButton title="test" />)
    const button = findBy({ type: "ColorDialogButton" })

    expect(button.node.dialog.modal).toEqual(true)
  })

  test("should recreate dialog when title or modal changes", () => {
    render(<ColorDialogButton title="test" modal={true} />)
    const dialog = Gtk.ColorDialog.mock.instances[0]
    expect(dialog).toMatchObject({ title: "test", modal: true })

    render(<ColorDialogButton title="test2" modal={false} />)
    const newDialog = Gtk.ColorDialog.mock.instances[1]
    expect(newDialog).toMatchObject({ title: "test2", modal: false })
  })
})
