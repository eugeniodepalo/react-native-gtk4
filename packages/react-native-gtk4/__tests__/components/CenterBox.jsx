import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import { Label } from "../../src/generated/intrinsics.js"
import CenterBox from "../../src/components/CenterBox.js"

describe("CenterBox", () => {
  beforeEach(setupRenderer)

  it("assigns widgets correctly", () => {
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

  it("handles absence of start, end, and center widgets gracefully", () => {
    const container = render(<CenterBox />)
    const centerBox = container.findByType("CenterBox")

    expect(centerBox.node.setStartWidget).not.toHaveBeenCalled()
    expect(centerBox.node.setCenterWidget).not.toHaveBeenCalled()
    expect(centerBox.node.setEndWidget).not.toHaveBeenCalled()
  })
})
