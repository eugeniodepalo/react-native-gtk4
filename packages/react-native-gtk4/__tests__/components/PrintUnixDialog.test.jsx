import React, { createRef } from "react"
import { render, findBy, setup } from "../../test-support/index.js"
import PrintUnixDialog from "../../src/components/PrintUnixDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

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
    const ref = createRef()

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
