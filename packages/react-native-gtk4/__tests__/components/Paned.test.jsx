import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Paned from "../../src/components/Paned.js"
import { Label, Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Paned", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <Paned>
        <Label label="Start Content" />
        <Button label="End Content" />
      </Paned>
    )

    const paned = findBy({ type: "Paned" })
    const label = findBy({ type: "Label" })
    const button = findBy({ type: "Button" })

    expect(paned.node).toBeInstanceOf(Gtk.Paned)
    expect(paned.node.setStartChild).toHaveBeenCalledWith(label.node)
    expect(paned.node.setEndChild).toHaveBeenCalledWith(button.node)
  })

  test("should forward refs", () => {
    const ref = createRef()
    const startRef = createRef()
    const endRef = createRef()

    render(
      <Paned ref={ref}>
        <Label ref={startRef} label="Start Content" />
        <Button ref={endRef} label="End Content" />
      </Paned>
    )

    const paned = findBy({ type: "Paned" })
    const label = findBy({ type: "Label" })
    const button = findBy({ type: "Button" })

    expect(ref.current).toBe(paned.node)
    expect(startRef.current).toBe(label.node)
    expect(endRef.current).toBe(button.node)
  })

  test("should handle unmount gracefully", () => {
    render(
      <Paned>
        <Label label="Start Content" />
        <Button label="End Content" />
      </Paned>
    )

    render(null)

    const paned = findBy({ type: "Paned" })

    expect(paned).toBeNull()
  })
})
