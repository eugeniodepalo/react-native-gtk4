import React from "react"
import { render, setup, findBy } from "../../test-support/index.js"
import ColorDialogButton from "../../src/components/ColorDialogButton.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ColorDialogButton", () => {
  beforeEach(setup)

  test("should not render when Gtk.ColorDialog is not supported", async () => {
    jest.doMock("@girs/node-gtk-4.0", () => ({
      ...jest.requireActual("@girs/node-gtk-4.0"),
      ColorDialog: undefined,
    }))

    const { default: ColorDialogButton } = await import(
      "../../src/components/ColorDialogButton.js"
    )

    render(<ColorDialogButton />)

    const button = findBy({ type: "ColorDialogButton" })

    expect(button).toBeNull()
  })

  test("should render", () => {
    render(<ColorDialogButton />)

    const button = findBy({ type: "ColorDialogButton" })

    expect(button.node).toBeInstanceOf(Gtk.ColorDialogButton)
  })

  test("should forward refs", () => {
    const ref = React.createRef()

    render(<ColorDialogButton ref={ref} />)

    const button = findBy({ type: "ColorDialogButton" })

    expect(ref.current).toBe(button.node)
  })

  test("should handle unmount gracefully", () => {
    render(<ColorDialogButton />)

    render(null)

    const button = findBy({ type: "ColorDialogButton" })

    expect(button).toBeNull()
  })

  test("should set dialog", () => {
    render(<ColorDialogButton title="foo" />)

    const button = findBy({ type: "ColorDialogButton" })

    expect(Gtk.ColorDialog).toHaveBeenCalledWith({
      title: "foo",
      modal: true,
    })

    expect(button.node.setDialog).toHaveBeenCalledWith(
      Gtk.ColorDialog.mock.instances[0]
    )
  })

  test("should set modal", () => {
    render(<ColorDialogButton modal={false} />)

    const button = findBy({ type: "ColorDialogButton" })

    expect(Gtk.ColorDialog).toHaveBeenCalledWith({
      modal: false,
    })

    expect(button.node.setDialog).toHaveBeenCalledWith(
      Gtk.ColorDialog.mock.instances[0]
    )
  })
})
