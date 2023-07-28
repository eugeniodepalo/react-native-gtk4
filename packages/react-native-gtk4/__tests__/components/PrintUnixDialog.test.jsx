import React from "react"
import { render, findBy, setup } from "../../src/test-support/render.js"
import PrintUnixDialog from "../../src/components/PrintUnixDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("PrintUnixDialog", () => {
  beforeEach(setup)

  test("should render correctly", () => {
    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <PrintUnixDialog />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "PrintUnixDialog" })

    expect(dialog.node).toBeInstanceOf(Gtk.PrintUnixDialog)
  })
})
