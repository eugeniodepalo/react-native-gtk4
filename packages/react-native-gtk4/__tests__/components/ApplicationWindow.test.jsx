import React, { createRef } from "react"
import { render, setup, findBy } from "../../test-support/index.js"
import ApplicationWindow from "../../src/components/ApplicationWindow.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ApplicationWindow", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<ApplicationWindow />)

    const window = findBy({ type: "ApplicationWindow" })

    expect(window.node).toBeInstanceOf(Gtk.ApplicationWindow)
  })

  test("should forward refs", () => {
    const ref = createRef()
    const titlebarRef = createRef()

    render(<ApplicationWindow ref={ref} titlebar={<Box ref={titlebarRef} />} />)

    const window = findBy({ type: "ApplicationWindow" })
    const titlebar = findBy({ type: "Box" })

    expect(ref.current).toBe(window.node)
    expect(titlebarRef.current).toBe(titlebar.node)
  })

  test("should handle unmount gracefully", () => {
    render(<ApplicationWindow />)

    render(null)

    const window = findBy({ type: "ApplicationWindow" })

    expect(window).toBeNull()
  })

  test("should set titlebar", () => {
    render(<ApplicationWindow titlebar={<Box />} />)

    const window = findBy({ type: "ApplicationWindow" })
    const titlebar = findBy({ type: "Box" })

    expect(window.node.setTitlebar).toHaveBeenCalledWith(titlebar.node)
  })

  test("should unset titlebar", () => {
    render(<ApplicationWindow titlebar={<Box />} />)

    const window = findBy({ type: "ApplicationWindow" })

    render(<ApplicationWindow />)

    expect(window.node.setTitlebar).toHaveBeenCalledWith(null)
  })

  test("should render with a different key when titlebar changes", () => {
    render(<ApplicationWindow titlebar={<Box />} />)

    const window1 = findBy({ type: "ApplicationWindow" })

    render(<ApplicationWindow />)

    const window2 = findBy({ type: "ApplicationWindow" })

    expect(window1.node).not.toBe(window2.node)
  })
})
