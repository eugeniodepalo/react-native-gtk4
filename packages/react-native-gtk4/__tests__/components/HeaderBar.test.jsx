import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import HeaderBar from "../../src/components/HeaderBar.js"
import { Label } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("HeaderBar", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<HeaderBar />)

    const headerBar = findBy({ type: "HeaderBar" })

    expect(headerBar.node).toBeInstanceOf(Gtk.HeaderBar)
    expect(headerBar.node.setTitleWidget).toHaveBeenCalledWith(null)
  })

  test("should forward refs", () => {
    const ref = createRef()
    const titleRef = createRef()

    render(<HeaderBar ref={ref} title={<Label ref={titleRef} />} />)

    const headerBar = findBy({ type: "HeaderBar" })
    const title = findBy({ type: "Label" })

    expect(ref.current).toBe(headerBar.node)
    expect(titleRef.current).toBe(title.node)
  })

  test("should handle unmount gracefully", () => {
    render(<HeaderBar />)

    render(null)

    const headerBar = findBy({ type: "HeaderBar" })

    expect(headerBar).toBeNull()
  })

  test("should set title widget", () => {
    render(<HeaderBar title={<Label label="text" />} />)

    const headerBar = findBy({ type: "HeaderBar" })
    const label = findBy({ type: "Label" })

    expect(headerBar.node.setTitleWidget).toHaveBeenCalledWith(label.node)
  })
})
