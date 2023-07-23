import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Frame from "../../src/components/Frame.js"
import { Label } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Frame", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.Frame, "labelWidget")
    mockProperty(Gtk.Frame, "label")
  })

  it("renders correctly without label", () => {
    const container = render(<Frame />)
    const frame = container.findByType("Frame")

    expect(frame).toBeTruthy()
    expect(frame.node.label).toBeUndefined()
    expect(frame.node.labelWidget).toBeUndefined()
  })

  it("renders correctly with string label", () => {
    const label = "test"
    const container = render(<Frame label={label} />)
    const frame = container.findByType("Frame")

    expect(frame).toBeTruthy()
    expect(frame.node.label).toBe(label)
  })

  it("renders correctly with ReactElement label", () => {
    const container = render(<Frame label={<Label label="text" />} />)
    const frame = container.findByType("Frame")
    const label = container.findByType("Label")

    expect(frame).toBeTruthy()
    expect(frame.node.label).toBeUndefined()
    expect(frame.node.labelWidget).toBe(label.node)
  })
})
