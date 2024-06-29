import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import MenuButton from "@/components/MenuButton.js"
import Gio from "@/generated/girs/node-gio-2.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("MenuButton", () => {
  let actionGroup: Gio.SimpleActionGroup

  beforeEach(() => {
    setup()
    actionGroup = new Gio.SimpleActionGroup()
  })

  test("should render", () => {
    render(<MenuButton actionGroup={actionGroup} actionPrefix="test" />)

    const menuButton = findBy({ type: "MenuButton" })

    expect(menuButton.node).toBeInstanceOf(Gtk.MenuButton)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.MenuButton>()

    render(
      <MenuButton ref={ref} actionGroup={actionGroup} actionPrefix="test" />
    )

    const menuButton = findBy({ type: "MenuButton" })

    expect(ref.current).toBe(menuButton.node)
  })

  test("should handle unmount gracefully", () => {
    render(<MenuButton actionGroup={actionGroup} actionPrefix="test" />)

    render(null)

    const menuButton = findBy({ type: "MenuButton" })

    expect(menuButton).toBeNull()
  })

  test("should insert action groups", () => {
    render(<MenuButton actionGroup={actionGroup} actionPrefix="test" />)

    const menuButton = findBy({ type: "MenuButton" })

    expect(menuButton.node.insertActionGroup).toHaveBeenCalledWith(
      "test",
      actionGroup
    )
  })
})
