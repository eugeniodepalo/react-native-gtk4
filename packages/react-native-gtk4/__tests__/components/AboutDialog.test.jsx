import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import AboutDialog from "../../src/components/AboutDialog.js"
import { ApplicationWindow } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AboutDialog", () => {
  beforeEach(setupRenderer)

  test("renders correctly", () => {
    render(<ApplicationWindow />)

    const container = render(
      <ApplicationWindow>
        <AboutDialog />
      </ApplicationWindow>
    )

    const window = container.findByType("ApplicationWindow")
    const dialog = container.findByType("AboutDialog")

    expect(dialog.node.setDestroyWithParent).toHaveBeenCalledWith(true)
    expect(dialog.node.setModal).toHaveBeenCalledWith(true)
    expect(dialog.node.present).toHaveBeenCalled()
    expect(dialog.node.setTransientFor).toHaveBeenCalledWith(window.node)
  })

  test("adds credit sections", () => {
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

  test("handles a null ref", () => {
    render(
      <ApplicationWindow>
        <AboutDialog />
      </ApplicationWindow>
    )

    Gtk.AboutDialog.prototype.setDestroyWithParent.mockClear()
    Gtk.AboutDialog.prototype.setModal.mockClear()
    Gtk.AboutDialog.prototype.present.mockClear()
    Gtk.AboutDialog.prototype.setTransientFor.mockClear()

    render(<ApplicationWindow />)

    expect(
      Gtk.AboutDialog.prototype.setDestroyWithParent
    ).not.toHaveBeenCalled()

    expect(Gtk.AboutDialog.prototype.setModal).not.toHaveBeenCalled()
    expect(Gtk.AboutDialog.prototype.present).not.toHaveBeenCalled()
    expect(Gtk.AboutDialog.prototype.setTransientFor).not.toHaveBeenCalled()
  })
})
