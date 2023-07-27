import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import Overlay from "../../src/components/Overlay.js"
import { Label, Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Overlay", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.Overlay, "child")
  })

  test("should render correctly with child content", () => {
    render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    const overlay = findBy({ type: "Overlay" })
    const button = findBy({ type: "Button" })

    expect(overlay).toBeTruthy()
    expect(overlay.node.child).toBe(button.node)
  })

  test("should set child content correctly", () => {
    render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    const overlay = findBy({ type: "Overlay" })
    const button = findBy({ type: "Button" })

    expect(overlay.node.child).toBe(button.node)
  })

  test("should handle unmount gracefully", () => {
    render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    Gtk.Overlay.prototype.addOverlay.mockClear()

    render(null)

    expect(Gtk.Overlay.prototype.addOverlay).not.toHaveBeenCalled()
  })
})
