import React, { createRef } from "react"
import { render, findBy, setup } from "../../src/test-support/index.js"
import AboutDialog from "../../src/components/AboutDialog.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AboutDialog", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<AboutDialog />)

    const dialog = findBy({ type: "AboutDialog" })

    expect(dialog.node).toBeInstanceOf(Gtk.AboutDialog)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(<AboutDialog ref={ref} />)

    const dialog = findBy({ type: "AboutDialog" })

    expect(ref.current).toBe(dialog.node)
  })

  test("should handle unmount gracefully", () => {
    render(<AboutDialog />)

    render(null)

    const dialog = findBy({ type: "AboutDialog" })

    expect(dialog).toBeNull()
  })

  test("should render with key computed from props", () => {
    render(<AboutDialog creditSections={[]} />)

    const dialog1 = findBy({ type: "AboutDialog" })

    render(<AboutDialog creditSections={[]} />)

    const dialog2 = findBy({ type: "AboutDialog" })

    render(<AboutDialog creditSections={[{ name: "Foo", people: [] }]} />)

    const dialog3 = findBy({ type: "AboutDialog" })

    expect(dialog1.node).toBe(dialog2.node)
    expect(dialog3.node).not.toBe(dialog2.node)
  })

  test("should initialize after mount", () => {
    const creditSections = [
      { name: "Foo", people: ["Person 1", "Person 2"] },
      { name: "Bar", people: ["Person 3", "Person 4"] },
    ]

    render(<AboutDialog creditSections={creditSections} />)

    const dialog = findBy({ type: "AboutDialog" })

    for (const section of creditSections) {
      expect(dialog.node.addCreditSection).toHaveBeenCalledWith(
        section.name,
        section.people
      )
    }
  })
})
