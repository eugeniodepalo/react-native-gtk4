import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Overlay from "../../src/components/Overlay.js"
import { Label, Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Overlay", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.Overlay, "child")
  })

  test("renders correctly with child content", () => {
    const container = render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    const overlay = container.findByType("Overlay")
    const button = container.findByType("Button")

    expect(overlay).toBeTruthy()
    expect(overlay.node.child).toBe(button.node)
  })

  test("sets child content correctly", () => {
    const container = render(
      <Overlay content={<Button label="Overlay Button" />}>
        <Label label="Underneath Content" />
      </Overlay>
    )

    const overlay = container.findByType("Overlay")
    const button = container.findByType("Button")

    expect(overlay.node.child).toBe(button.node)
  })
})
