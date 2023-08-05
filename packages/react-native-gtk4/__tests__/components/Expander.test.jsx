import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Expander from "../../src/components/Expander.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Expander", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<Expander />)

    const expander = findBy({ type: "Expander" })

    expect(expander.node).toBeInstanceOf(Gtk.Expander)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(<Expander ref={ref} />)

    const expander = findBy({ type: "Expander" })

    expect(ref.current).toBe(expander.node)
  })

  test("should handle unmount gracefully", () => {
    render(<Expander />)

    render(null)

    const expander = findBy({ type: "Expander" })

    expect(expander).toBeNull()
  })
})
