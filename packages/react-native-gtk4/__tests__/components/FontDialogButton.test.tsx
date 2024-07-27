import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import FontDialogButton from "@/components/FontDialogButton.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { Pango } from "@/index.js"

const MockedGtk = Gtk as jest.Mocked<typeof Gtk>
const MockedGtkFontDialog = Gtk.FontDialog as jest.Mocked<typeof Gtk.FontDialog>

describe("FontDialogButton", () => {
  beforeEach(setup)

  afterEach(() => {
    Gtk.FontDialog = MockedGtkFontDialog
  })

  test("should not render when Gtk.FontDialog is not supported", async () => {
    Gtk.FontDialog = undefined as unknown as typeof Gtk.FontDialog

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
    const ref = createRef<Gtk.FontDialogButton>()

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
      filter: new Gtk.Filter(),
      fontMap: new Pango.FontMap(),
      language: Pango.Language.getDefault(),
    }

    render(<FontDialogButton {...props} />)

    const button = findBy<Gtk.FontDialogButton>({ type: "FontDialogButton" })

    expect(MockedGtk.FontDialog).toHaveBeenCalledWith(props)

    expect(button.node.setDialog).toHaveBeenCalledWith(
      MockedGtk.FontDialog.mock.instances[0]
    )
  })

  test("should set modal", () => {
    render(<FontDialogButton />)

    const button = findBy<Gtk.FontDialogButton>({ type: "FontDialogButton" })

    expect(MockedGtk.FontDialog).toHaveBeenCalledWith({
      modal: true,
    })

    expect(button.node.setDialog).toHaveBeenCalledWith(
      MockedGtk.FontDialog.mock.instances[0]
    )
  })
})
