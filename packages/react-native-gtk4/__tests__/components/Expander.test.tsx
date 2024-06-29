import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import Expander from "@/components/Expander.js"
import { Box } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Expander", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<Expander />)

    const expander = findBy({ type: "Expander" })

    expect(expander.node).toBeInstanceOf(Gtk.Expander)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.Expander>()
    const labelRef = createRef<Gtk.Box>()

    render(<Expander ref={ref} label={<Box ref={labelRef} />} />)

    const expander = findBy({ type: "Expander" })
    const label = findBy({ type: "Box" })

    expect(ref.current).toBe(expander.node)
    expect(labelRef.current).toBe(label.node)
  })

  test("should handle unmount gracefully", () => {
    render(<Expander />)

    render(null)

    const expander = findBy({ type: "Expander" })

    expect(expander).toBeNull()
  })

  test("should set label when prop is a string", () => {
    const label = "foo"

    render(<Expander label={label} />)

    const expander = findBy<Gtk.Expander>({ type: "Expander" })

    expect(expander.node.setLabel).toHaveBeenCalledWith(label)
    expect(expander.node.setLabelWidget).not.toHaveBeenCalled()
  })

  test("should set labelWidget when prop is an element", () => {
    render(<Expander label={<Box />} />)

    const expander = findBy<Gtk.Expander>({ type: "Expander" })
    const label = findBy({ type: "Box" })

    expect(expander.node.setLabelWidget).toHaveBeenCalledWith(label.node)
    expect(expander.node.setLabel).not.toHaveBeenCalled()
  })
})
