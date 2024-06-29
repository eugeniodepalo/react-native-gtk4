import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import Paned from "@/components/Paned.js"
import { Label, Button } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Paned", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <Paned>
        <Label label="Start Content" />
        <Button label="End Content" />
      </Paned>
    )

    const paned = findBy<Gtk.Paned>({ type: "Paned" })
    const label = findBy({ type: "Label" })
    const button = findBy({ type: "Button" })

    expect(paned.node).toBeInstanceOf(Gtk.Paned)
    expect(paned.node.setStartChild).toHaveBeenCalledWith(label.node)
    expect(paned.node.setEndChild).toHaveBeenCalledWith(button.node)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.Paned>()
    const startRef = createRef<Gtk.Label>()
    const endRef = createRef<Gtk.Button>()

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
