import React, { createRef } from "react"
import { render, findBy, setup } from "@/test-support/index.js"
import PageSetupUnixDialog from "@/components/PageSetupUnixDialog.js"
import { ApplicationWindow } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

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
    const ref = createRef<Gtk.PageSetupUnixDialog>()

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
