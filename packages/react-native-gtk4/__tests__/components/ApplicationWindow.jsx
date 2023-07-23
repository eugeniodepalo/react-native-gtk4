import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import ApplicationWindow from "../../src/components/ApplicationWindow.js"
import { Label } from "../../src/generated/intrinsics.js"

describe("ApplicationWindow", () => {
  beforeEach(setupRenderer)

  it("renders correctly", () => {
    const container = render(<ApplicationWindow />)
    const window = container.findByType("ApplicationWindow")
    expect(window).not.toBeNull()
  })

  it("adds titlebar when present", () => {
    const container = render(
      <ApplicationWindow titlebar={<Label id="titlebar-label">Title</Label>} />
    )

    const window = container.findByType("ApplicationWindow")
    const titlebar = container.findByProps({ id: "titlebar-label" })

    expect(titlebar).not.toBeNull()
    expect(window.props.titlebar).toBe(titlebar.node)
  })

  it("does not add titlebar when not present", () => {
    const container = render(<ApplicationWindow />)
    const window = container.findByType("ApplicationWindow")
    expect(window.props.titlebar).toBeUndefined()
  })
})
