import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import SpinButtonComponent from "@/components/SpinButton.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("SpinButtonComponent", () => {
  beforeEach(() => {
    setup()
  })

  test("should render", () => {
    render(<SpinButtonComponent />)

    const spinButton = findBy({ type: "SpinButton" })

    expect(spinButton.node).toBeInstanceOf(Gtk.SpinButton)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.SpinButton>()

    render(<SpinButtonComponent ref={ref} />)

    const spinButton = findBy({ type: "SpinButton" })

    expect(ref.current).toBe(spinButton.node)
  })

  test("should handle unmount gracefully", () => {
    render(<SpinButtonComponent />)

    render(null)

    const spinButton = findBy({ type: "SpinButton" })

    expect(spinButton).toBeNull()
  })

  test("should set specified range", () => {
    const testRange = [5, 20] as [number, number]

    render(<SpinButtonComponent range={testRange} />)

    const spinButton = findBy<Gtk.SpinButton>({ type: "SpinButton" })

    expect(spinButton.node.setRange).toHaveBeenCalledWith(
      testRange[0],
      testRange[1]
    )
  })

  test("should reset range to [0, 0] on unmount", () => {
    const testRange = [5, 20] as [number, number]

    render(<SpinButtonComponent range={testRange} />)

    const spinButton = findBy<Gtk.SpinButton>({ type: "SpinButton" })

    render(null)

    expect(spinButton.node.setRange).toHaveBeenCalledWith(0, 0)
  })
})
