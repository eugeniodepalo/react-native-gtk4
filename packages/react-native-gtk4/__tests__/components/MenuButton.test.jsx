import React, { createRef } from "react"
import { render, setup, findBy } from "../../test-support/index.js"
import MenuButton from "../../src/components/MenuButton.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("MenuButton", () => {
  let menu
  let actionGroup

  beforeEach(() => {
    setup()
    menu = new Gio.Menu()
    actionGroup = new Gio.SimpleActionGroup()
  })

  test("should render", () => {
    render(
      <MenuButton menu={menu} actionGroup={actionGroup} actionPrefix="test" />
    )

    const menuButton = findBy({ type: "MenuButton" })

    expect(menuButton.node).toBeInstanceOf(Gtk.MenuButton)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(
      <MenuButton
        ref={ref}
        menu={menu}
        actionGroup={actionGroup}
        actionPrefix="test"
      />
    )

    const menuButton = findBy({ type: "MenuButton" })

    expect(ref.current).toBe(menuButton.node)
  })

  test("should handle unmount gracefully", () => {
    render(
      <MenuButton menu={menu} actionGroup={actionGroup} actionPrefix="test" />
    )

    render(null)

    const menuButton = findBy({ type: "MenuButton" })

    expect(menuButton).toBeNull()
  })

  test("should insert action groups", () => {
    render(
      <MenuButton menu={menu} actionGroup={actionGroup} actionPrefix="test" />
    )

    const menuButton = findBy({ type: "MenuButton" })

    expect(menuButton.node.insertActionGroup).toHaveBeenCalledWith(
      "test",
      actionGroup
    )
  })
})
