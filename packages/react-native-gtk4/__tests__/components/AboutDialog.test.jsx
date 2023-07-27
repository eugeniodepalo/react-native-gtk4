import React from "react"
import { render, findBy, setup } from "../../src/test-support/render.js"
import AboutDialog from "../../src/components/AboutDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AboutDialog", () => {
  beforeEach(setup)

  test("should render correctly", () => {
    render(<ApplicationWindow />)

    render(
      <ApplicationWindow>
        <AboutDialog />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "AboutDialog" })

    expect(dialog.node).toBeInstanceOf(Gtk.AboutDialog)
  })

  test("should add credit sections", () => {
    const creditSections = [
      { name: "Foo", people: ["Person 1", "Person 2"] },
      { name: "Bar", people: ["Person 3", "Person 4"] },
    ]

    render(
      <ApplicationWindow>
        <AboutDialog creditSections={creditSections} />
      </ApplicationWindow>
    )

    const dialog = findBy({ type: "AboutDialog" })

    for (const section of creditSections) {
      expect(dialog.node.addCreditSection).toHaveBeenCalledWith(
        section.name,
        section.people
      )
    }
  })
})
