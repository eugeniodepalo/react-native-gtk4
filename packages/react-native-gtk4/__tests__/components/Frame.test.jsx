import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Frame from "../../src/components/Frame.js"
import { Label } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Frame", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.Frame, "labelWidget")
    mockProperty(Gtk.Frame, "label")
  })

  test("should render correctly without label", () => {
    render(<Frame />)
    const frame = findBy({ type: "Frame" })

    expect(frame).toBeTruthy()
    expect(frame.node.label).toBeNull()
    expect(frame.node.labelWidget).toBeNull()
  })

  test("should render correctly with string label", () => {
    const label = "test"
    render(<Frame label={label} />)
    const frame = findBy({ type: "Frame" })

    expect(frame).toBeTruthy()
    expect(frame.node.label).toBe(label)
  })

  test("should render correctly with ReactElement label", () => {
    render(<Frame label={<Label label="text" />} />)
    const frame = findBy({ type: "Frame" })
    const label = findBy({ type: "Label" })

    expect(frame).toBeTruthy()
    expect(frame.node.label).toBeNull()
    expect(frame.node.labelWidget).toBe(label.node)
  })
})
