import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import { Label } from "../../src/generated/intrinsics.js"
import CenterBox from "../../src/components/CenterBox.js"
import Gtk from "@girs/node-gtk-4.0"

describe("CenterBox", () => {
  beforeEach(setupRenderer)

  test("should assign widgets correctly", () => {
    const container = render(
      <CenterBox start={<Label label="Start" />} end={<Label label="End" />}>
        <Label label="Center" />
      </CenterBox>
    )

    const centerBox = container.findByType("CenterBox")
    const startLabel = container.findByText("Start")
    const centerLabel = container.findByText("Center")
    const endLabel = container.findByText("End")

    expect(centerBox.node.setStartWidget).toHaveBeenCalledWith(startLabel.node)
    expect(centerBox.node.setEndWidget).toHaveBeenCalledWith(endLabel.node)

    expect(centerBox.node.setCenterWidget).toHaveBeenCalledWith(
      centerLabel.node
    )
  })

  test("should handle absence of start, end, and center widgets gracefully", () => {
    const container = render(<CenterBox />)
    const centerBox = container.findByType("CenterBox")

    expect(centerBox.node.setStartWidget).toHaveBeenCalledWith(null)
    expect(centerBox.node.setCenterWidget).toHaveBeenCalledWith(null)
    expect(centerBox.node.setEndWidget).toHaveBeenCalledWith(null)
  })

  test("should handle unmount gracefully", () => {
    render(<CenterBox />)

    Gtk.CenterBox.prototype.setStartWidget.mockClear()
    Gtk.CenterBox.prototype.setCenterWidget.mockClear()
    Gtk.CenterBox.prototype.setEndWidget.mockClear()

    render(null)

    expect(Gtk.CenterBox.prototype.setStartWidget).not.toHaveBeenCalled()
    expect(Gtk.CenterBox.prototype.setCenterWidget).not.toHaveBeenCalled()
    expect(Gtk.CenterBox.prototype.setEndWidget).not.toHaveBeenCalled()
  })
})
