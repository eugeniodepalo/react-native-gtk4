import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import HeaderBar from "../../src/components/HeaderBar.js"
import { Label } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("HeaderBar", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.HeaderBar, "titleWidget")
  })

  it("renders correctly without title", () => {
    const container = render(<HeaderBar />)
    const headerBar = container.findByType("HeaderBar")

    expect(headerBar).toBeTruthy()
    expect(headerBar.node.titleWidget).toBeUndefined()
  })

  it("sets title widget correctly", () => {
    const container = render(<HeaderBar title={<Label label="text" />} />)
    const headerBar = container.findByType("HeaderBar")
    const label = container.findByType("Label")

    expect(headerBar).toBeTruthy()
    expect(headerBar.node.titleWidget).toBe(label.node)
  })

  it("removes its previous title widget before setting a new one", () => {
    const container = render(<HeaderBar title={<Label label="Old title" />} />)

    const headerBar = container.findByType("HeaderBar")
    const oldLabel = container.findByType("Label")

    render(<HeaderBar title={<Label label="New title" />} />)

    const newLabel = container.findByType("Label")

    expect(oldLabel.node.unparent).toHaveBeenCalled()
    expect(headerBar.node.titleWidget).toBe(newLabel.node)
  })
})
