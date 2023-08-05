import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Overlay from "../../src/components/Overlay.js"
import { Label, Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Overlay", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    const overlay = findBy({ type: "Overlay" })
    const button = findBy({ type: "Button" })
    const label = findBy({ type: "Label" })

    expect(overlay.node).toBeInstanceOf(Gtk.Overlay)
    expect(overlay.node.setChild).toHaveBeenCalledWith(button.node)
    expect(overlay.node.addOverlay).toHaveBeenCalledWith(label.node)
  })

  test("should forward refs", () => {
    const ref = createRef()
    const childRef = createRef()
    const contentRef = createRef()

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
