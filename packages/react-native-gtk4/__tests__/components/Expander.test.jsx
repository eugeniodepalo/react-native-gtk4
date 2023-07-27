import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import Expander from "../../src/components/Expander.js"
import { Label } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Expander", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.Expander, "labelWidget")
    mockProperty(Gtk.Expander, "label")
  })

  test("should render correctly without label", () => {
    render(<Expander />)
    const expander = findBy({ type: "Expander" })

    expect(expander).toBeTruthy()
    expect(expander.node.label).toBeUndefined()
    expect(expander.node.labelWidget).toBeNull()
  })

  test("should render correctly with string label", () => {
    const label = "test"
    render(<Expander label={label} />)
    const expander = findBy({ type: "Expander" })

    expect(expander).toBeTruthy()
    expect(expander.node.label).toBe(label)
  })

  test("should render correctly with ReactElement label", () => {
    render(<Expander label={<Label label="text" />} />)
    const expander = findBy({ type: "Expander" })
    const label = findBy({ type: "Label" })

    expect(expander).toBeTruthy()
    expect(expander.node.label).toBeUndefined()
    expect(expander.node.labelWidget).toBe(label.node)
  })

  test("should handle unmount gracefully", () => {
    render(<Expander />)

    Gtk.Expander.prototype.setLabelWidget.mockClear()
    Gtk.Expander.prototype.setLabel.mockClear()

    render(null)

    expect(Gtk.Expander.prototype.setLabelWidget).not.toHaveBeenCalled()
    expect(Gtk.Expander.prototype.setLabel).not.toHaveBeenCalled()
  })
})
