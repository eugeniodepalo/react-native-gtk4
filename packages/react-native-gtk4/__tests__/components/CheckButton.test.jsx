import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import CheckButton from "../../src/components/CheckButton.js"
import { mockProperty } from "../../src/test-support/utils.js"
import Gtk from "@girs/node-gtk-4.0"

describe("CheckButton", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.CheckButton, "active")
    mockProperty(Gtk.CheckButton, "group")
  })

  test("should render correctly", () => {
    const container = render(<CheckButton />)
    const button = container.findByType("CheckButton")
    expect(button).not.toBeNull()
  })

  test("should set active status correctly when provided", () => {
    const container = render(<CheckButton active={true} />)
    const button = container.findByType("CheckButton")
    expect(button.node.active).toBe(true)
  })

  test("should set group correctly when radio prop is true", () => {
    const container = render(<CheckButton radio={true} />)
    const button = container.findByType("CheckButton")
    expect(button.node.group).not.toBeNull()
  })

  test("should not set group when radio prop is false", () => {
    const container = render(<CheckButton radio={false} />)
    const button = container.findByType("CheckButton")
    expect(button.node.group).toBeNull()
  })

  test("should handle unmount gracefully", () => {
    jest.spyOn(React, "useRef")

    render(<CheckButton active={true} />)

    Gtk.CheckButton.prototype.setActive.mockClear()

    for (const ref of React.useRef.mock.results.map((r) => r.value)) {
      ref.current = null
    }

    render(null)

    expect(Gtk.CheckButton.prototype.setActive).toHaveBeenCalledWith(false)
  })
})
