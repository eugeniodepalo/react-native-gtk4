import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import Overlay from "@/components/Overlay.js"
import { Label, Button } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Overlay", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    const overlay = findBy<Gtk.Overlay>({ type: "Overlay" })
    const button = findBy({ type: "Button" })
    const label = findBy({ type: "Label" })

    expect(overlay.node).toBeInstanceOf(Gtk.Overlay)
    expect(overlay.node.setChild).toHaveBeenCalledWith(button.node)
    expect(overlay.node.addOverlay).toHaveBeenCalledWith(label.node)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.Overlay>()
    const childRef = createRef<Gtk.Label>()
    const contentRef = createRef<Gtk.Button>()

    render(
      <Overlay
        ref={ref}
        content={<Button ref={contentRef} label="Overlay Button" />}
      >
        <Label ref={childRef} />
      </Overlay>
    )

    const overlay = findBy({ type: "Overlay" })
    const child = findBy({ type: "Label" })
    const content = findBy({ type: "Button" })

    expect(ref.current).toBe(overlay.node)
    expect(childRef.current).toBe(child.node)
    expect(contentRef.current).toBe(content.node)
  })

  test("should handle unmount gracefully", () => {
    render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    render(null)

    const overlay = findBy({ type: "Overlay" })

    expect(overlay).toBeNull()
  })
})
