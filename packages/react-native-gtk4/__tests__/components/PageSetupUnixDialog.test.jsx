import React, { createRef } from "react"
import { render, findBy, setup } from "../../src/test-support/index.js"
import PageSetupUnixDialog from "../../src/components/PageSetupUnixDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("PageSetupUnixDialog", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PageSetupUnixDialog />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "PageSetupUnixDialog" })

    expect(dialog.node).toBeInstanceOf(Gtk.PageSetupUnixDialog)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PageSetupUnixDialog ref={ref} />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "PageSetupUnixDialog" })

    expect(ref.current).toBe(dialog.node)
  })

  test("should handle unmount gracefully", () => {
    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PageSetupUnixDialog />
      </ApplicationWindow>
    )

    render(null)

    const dialog = findBy({ type: "PageSetupUnixDialog" })

    expect(dialog).toBeNull()
  })
})
