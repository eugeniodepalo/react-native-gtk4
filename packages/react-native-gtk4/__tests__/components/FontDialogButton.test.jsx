import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import FontDialogButton from "../../src/components/FontDialogButton.js"
import Gtk from "@girs/node-gtk-4.0"

describe("FontDialogButton", () => {
  beforeEach(setup)

  test("should not render when Gtk.FontDialog is not supported", async () => {
    jest.doMock("@girs/node-gtk-4.0", () => ({
      ...jest.requireActual("@girs/node-gtk-4.0"),
      FontDialog: undefined,
    }))

    const { default: FontDialogButton } = await import(
      "../../src/components/FontDialogButton.js"
    )

    render(<FontDialogButton />)

    const button = findBy({ type: "FontDialogButton" })

    expect(button).toBeNull()
  })

  test("should render", () => {
    render(<FontDialogButton />)

    const button = findBy({ type: "FontDialogButton" })

    expect(button.node).toBeInstanceOf(Gtk.FontDialogButton)
  })

  test("should forward refs", () => {
    const ref = React.createRef()

    render(<FontDialogButton ref={ref} />)

    const button = findBy({ type: "FontDialogButton" })

    expect(ref.current).toBe(button.node)
  })

  test("should handle unmount gracefully", () => {
    render(<FontDialogButton />)

    render(null)

    const button = findBy({ type: "FontDialogButton" })

    expect(button).toBeNull()
  })

  test("should set dialog", () => {
    const props = {
      title: "foo",
      modal: false,
      filter: "bar",
      fontMap: "baz",
      language: "qux",
    }

    render(<FontDialogButton {...props} />)

    const button = findBy({ type: "FontDialogButton" })

    expect(Gtk.FontDialog).toHaveBeenCalledWith(props)

    expect(button.node.setDialog).toHaveBeenCalledWith(
      Gtk.FontDialog.mock.instances[0]
    )
  })

  test("should set modal", () => {
    render(<FontDialogButton />)

    const button = findBy({ type: "FontDialogButton" })

    expect(Gtk.FontDialog).toHaveBeenCalledWith({
      modal: true,
    })

    expect(button.node.setDialog).toHaveBeenCalledWith(
      Gtk.FontDialog.mock.instances[0]
    )
  })
})
