import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Paned from "../../src/components/Paned.js"
import { Label, Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("Paned", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.Paned, "startChild")
    mockProperty(Gtk.Paned, "endChild")
  })

  test("should render correctly with children", () => {
    render(
      <Paned>
        <Label label="Start Content" />
        <Button label="End Content" />
      </Paned>
    )

    const paned = findBy({ type: "Paned" })
    const label = findBy({ type: "Label" })
    const button = findBy({ type: "Button" })

    expect(paned).toBeTruthy()
    expect(paned.node.startChild).toBe(label.node)
    expect(paned.node.endChild).toBe(button.node)
  })

  test("should set startChild and endChild correctly", () => {
    render(
      <Paned>
        <Label label="Start Content" />
        <Button label="End Content" />
      </Paned>
    )

    const paned = findBy({ type: "Paned" })
    const label = findBy({ type: "Label" })
    const button = findBy({ type: "Button" })

    expect(paned.node.startChild).toBe(label.node)
    expect(paned.node.endChild).toBe(button.node)
  })
})
