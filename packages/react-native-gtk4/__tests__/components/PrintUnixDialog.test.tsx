import React, { createRef } from "react"
import { render, findBy, setup } from "@/test-support/index.js"
import PrintUnixDialog from "@/components/PrintUnixDialog.js"
import { ApplicationWindow } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("PrintUnixDialog", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PrintUnixDialog />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "PrintUnixDialog" })

    expect(dialog.node).toBeInstanceOf(Gtk.PrintUnixDialog)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.PrintUnixDialog>()

    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PrintUnixDialog ref={ref} />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "PrintUnixDialog" })

    expect(ref.current).toBe(dialog.node)
  })

  test("should handle unmount gracefully", () => {
    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PrintUnixDialog />
      </ApplicationWindow>
    )

    render(null)

    const dialog = findBy({ type: "PrintUnixDialog" })

    expect(dialog).toBeNull()
  })
})
