import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import ApplicationWindow from "../../src/components/ApplicationWindow.js"
import { Label } from "../../src/generated/intrinsics.js"

describe("ApplicationWindow", () => {
  beforeEach(setup)

  test("should render correctly", () => {
    render(<ApplicationWindow />)
    const window = findBy({ type: "ApplicationWindow" })
    expect(window).not.toBeNull()
  })

  test("should add titlebar when present", () => {
    render(
      <ApplicationWindow titlebar={<Label id="titlebar-label">Title</Label>} />
    )

    const window = findBy({ type: "ApplicationWindow" })
    const titlebar = findBy({ props: { id: "titlebar-label" } })

    expect(titlebar).not.toBeNull()
    expect(window.props.titlebar).toBe(titlebar.node)
  })

  test("should not add titlebar when not present", () => {
    render(<ApplicationWindow />)
    const window = findBy({ type: "ApplicationWindow" })
    expect(window.props.titlebar).toBeUndefined()
  })
})
