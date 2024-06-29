import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import CheckButton from "@/components/CheckButton.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("CheckButton", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<CheckButton />)

    const button = findBy({ type: "CheckButton" })

    expect(button.node).toBeInstanceOf(Gtk.CheckButton)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.CheckButton>()

    render(<CheckButton ref={ref} />)

    const button = findBy({ type: "CheckButton" })

    expect(ref.current).toBe(button.node)
  })

  test("should handle unmount gracefully", () => {
    render(<CheckButton />)

    render(null)

    const button = findBy({ type: "CheckButton" })

    expect(button).toBeNull()
  })

  test("should set group if radio", () => {
    render(<CheckButton radio data-id="root" />)

    const button = findBy<Gtk.CheckButton>({ props: { "data-id": "root" } })

    expect(button.node.setGroup).toHaveBeenCalledWith(
      expect.any(Gtk.CheckButton)
    )
  })

  test("should set active", () => {
    render(<CheckButton active />)

    const button = findBy<Gtk.CheckButton>({ type: "CheckButton" })

    expect(button.node.setActive).toHaveBeenCalledWith(true)
  })

  test("should unset active when unmounted", () => {
    render(<CheckButton active />)

    const button = findBy<Gtk.CheckButton>({ type: "CheckButton" })

    render(null)

    expect(button.node.setActive).toHaveBeenCalledWith(false)
  })
})
