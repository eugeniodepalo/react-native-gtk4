import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import AboutDialog from "../../src/components/AboutDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AboutDialog", () => {
  beforeEach(setupRenderer)

  test("should render correctly", () => {
    render(<ApplicationWindow />)

    const container = render(
      <ApplicationWindow>
        <AboutDialog />
      </ApplicationWindow>
    )

    const dialog = container.findByType("AboutDialog")

    expect(dialog.node).toBeInstanceOf(Gtk.AboutDialog)
  })

  test("should add credit sections", () => {
    const creditSections = [
      { name: "Foo", people: ["Person 1", "Person 2"] },
      { name: "Bar", people: ["Person 3", "Person 4"] },
    ]

    const container = render(
      <ApplicationWindow>
        <AboutDialog creditSections={creditSections} />
      </ApplicationWindow>
    )

    const dialog = container.findByType("AboutDialog")

    for (const section of creditSections) {
      expect(dialog.node.addCreditSection).toHaveBeenCalledWith(
        section.name,
        section.people
      )
    }
  })
})
