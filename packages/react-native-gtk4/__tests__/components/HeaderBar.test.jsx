import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import HeaderBar from "../../src/components/HeaderBar.js"
import { Label } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"
import { mockProperty } from "../../src/test-support/utils.js"

describe("HeaderBar", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.HeaderBar, "titleWidget")
  })

  test("should render correctly without title", () => {
    render(<HeaderBar />)
    const headerBar = findBy({ type: "HeaderBar" })

    expect(headerBar).toBeTruthy()
    expect(headerBar.node.titleWidget).toBeNull()
  })

  test("should set title widget correctly", () => {
    render(<HeaderBar title={<Label label="text" />} />)
    const headerBar = findBy({ type: "HeaderBar" })
    const label = findBy({ type: "Label" })

    expect(headerBar).toBeTruthy()
    expect(headerBar.node.titleWidget).toBe(label.node)
  })

  test("should handle unmount gracefully", () => {
    render(<HeaderBar />)

    Gtk.HeaderBar.prototype.setTitleWidget.mockClear()

    render(null)

    expect(Gtk.HeaderBar.prototype.setTitleWidget).toHaveBeenCalledWith(null)
  })
})
