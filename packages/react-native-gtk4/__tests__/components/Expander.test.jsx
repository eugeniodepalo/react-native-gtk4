import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Expander from "../../src/components/Expander.js"
import { Label } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Expander", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.Expander, "labelWidget")
    mockProperty(Gtk.Expander, "label")
  })

  test("should render correctly without label", () => {
    const container = render(<Expander />)
    const expander = container.findByType("Expander")

    expect(expander).toBeTruthy()
    expect(expander.node.label).toBeUndefined()
    expect(expander.node.labelWidget).toBeNull()
  })

  test("should render correctly with string label", () => {
    const label = "test"
    const container = render(<Expander label={label} />)
    const expander = container.findByType("Expander")

    expect(expander).toBeTruthy()
    expect(expander.node.label).toBe(label)
  })

  test("should render correctly with ReactElement label", () => {
    const container = render(<Expander label={<Label label="text" />} />)
    const expander = container.findByType("Expander")
    const label = container.findByType("Label")

    expect(expander).toBeTruthy()
    expect(expander.node.label).toBeUndefined()
    expect(expander.node.labelWidget).toBe(label.node)
  })

  test("should handle unmount gracefully", () => {
    render(<Expander />)

    Gtk.Expander.prototype.setLabelWidget.mockClear()
    Gtk.Expander.prototype.setLabel.mockClear()

    render(null)

    expect(Gtk.Expander.prototype.setLabelWidget).toHaveBeenCalledWith(null)
    expect(Gtk.Expander.prototype.setLabel).not.toHaveBeenCalled()
  })
})
