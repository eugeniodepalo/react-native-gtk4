import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Frame from "../../src/components/Frame.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Frame", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<Frame />)

    const frame = findBy({ type: "Frame" })

    expect(frame.node).toBeInstanceOf(Gtk.Frame)
  })

  test("should forward refs", () => {
    const ref = createRef()
    const labelRef = createRef()

    render(<Frame ref={ref} label={<Box ref={labelRef} />} />)

    const frame = findBy({ type: "Frame" })
    const label = findBy({ type: "Box" })

    expect(ref.current).toBe(frame.node)
    expect(labelRef.current).toBe(label.node)
  })

  test("should handle unmount gracefully", () => {
    render(<Frame />)

    render(null)

    const frame = findBy({ type: "Frame" })

    expect(frame).toBeNull()
  })

  test("should set label when prop is a string", () => {
    const label = "foo"

    render(<Frame label={label} />)

    const frame = findBy({ type: "Frame" })

    expect(frame.node.setLabel).toHaveBeenCalledWith(label)
    expect(frame.node.setLabelWidget).not.toHaveBeenCalled()
  })

  test("should set labelWidget when prop is an element", () => {
    render(<Frame label={<Box />} />)

    const frame = findBy({ type: "Frame" })
    const label = findBy({ type: "Box" })

    expect(frame.node.setLabelWidget).toHaveBeenCalledWith(label.node)
    expect(frame.node.setLabel).not.toHaveBeenCalled()
  })
})
