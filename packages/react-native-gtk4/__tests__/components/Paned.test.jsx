import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Paned from "../../src/components/Paned.js"
import { Label, Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Paned", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.Paned, "startChild")
    mockProperty(Gtk.Paned, "endChild")
  })

  test("should render correctly with children", () => {
    const container = render(
      <Paned>
        <Label label="Start Content" />
        <Button label="End Content" />
      </Paned>
    )

    const paned = container.findByType("Paned")
    const label = container.findByType("Label")
    const button = container.findByType("Button")

    expect(paned).toBeTruthy()
    expect(paned.node.startChild).toBe(label.node)
    expect(paned.node.endChild).toBe(button.node)
  })

  test("should set startChild and endChild correctly", () => {
    const container = render(
      <Paned>
        <Label label="Start Content" />
        <Button label="End Content" />
      </Paned>
    )

    const paned = container.findByType("Paned")
    const label = container.findByType("Label")
    const button = container.findByType("Button")

    expect(paned.node.startChild).toBe(label.node)
    expect(paned.node.endChild).toBe(button.node)
  })
})
