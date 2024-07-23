import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import ColorDialogButton from "@/components/ColorDialogButton.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

const MockedGtk = Gtk as jest.Mocked<typeof Gtk>

const MockedGtkColorDialog = Gtk.ColorDialog as jest.Mocked<
  typeof Gtk.ColorDialog
>

describe("ColorDialogButton", () => {
  beforeEach(setup)

  afterEach(() => {
    Gtk.ColorDialog = MockedGtkColorDialog
  })

  test("should not render when Gtk.ColorDialog is not supported", async () => {
    Gtk.ColorDialog = undefined as unknown as typeof Gtk.ColorDialog

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
    const ref = createRef<Gtk.ColorDialogButton>()

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

    const button = findBy<Gtk.ColorDialogButton>({ type: "ColorDialogButton" })

    expect(Gtk.ColorDialog).toHaveBeenCalledWith({
      title: "foo",
      modal: true,
    })

    expect(button.node.setDialog).toHaveBeenCalledWith(
      MockedGtk.ColorDialog.mock.instances[0]
    )
  })

  test("should set modal", () => {
    render(<ColorDialogButton modal={false} />)

    const button = findBy<Gtk.ColorDialogButton>({ type: "ColorDialogButton" })

    expect(Gtk.ColorDialog).toHaveBeenCalledWith({
      modal: false,
    })

    expect(button.node.setDialog).toHaveBeenCalledWith(
      MockedGtk.ColorDialog.mock.instances[0]
    )
  })
})
