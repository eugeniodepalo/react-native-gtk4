import React from "react"
import { render, findBy, setup } from "../../src/test-support/render.js"
import PageSetupUnixDialog from "../../src/components/PageSetupUnixDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("PageSetupUnixDialog", () => {
  beforeEach(setup)

  test("should render correctly", () => {
    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PageSetupUnixDialog />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "PageSetupUnixDialog" })

    expect(dialog.node).toBeInstanceOf(Gtk.PageSetupUnixDialog)
  })
})
