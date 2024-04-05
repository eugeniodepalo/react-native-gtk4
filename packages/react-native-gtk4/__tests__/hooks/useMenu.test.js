import React from "react"
import Gio from "@girs/node-gio-2.0"
import GLib from "@girs/node-glib-2.0"
import { setup, render } from "../../test-support/index.js"
import useMenu from "../../src/hooks/useMenu.js"

describe("useMenu", () => {
  let items
  let menu

  const Component = () => {
    menu = useMenu(items)
  }

  beforeEach(() => {
    setup()

    items = [
      {
        label: "test",
        icon: "test-icon",
        action: "test-action",
        attributes: { key: new GLib.Variant("s", "value") },
        children: [{ label: "child" }],
      },
    ]
  })

  test("should build a menu from items", () => {
    render(<Component />)

    const menuItem = Gio.MenuItem.mock.instances[0]
    const childMenuItem = Gio.MenuItem.mock.instances[1]

    expect(Gio.MenuItem).toHaveBeenCalledTimes(2)
    expect(menuItem.setLabel).toHaveBeenCalledWith(items[0].label)
    expect(menuItem.setDetailedAction).toHaveBeenCalledWith(items[0].action)

    expect(menuItem.setAttributeValue).toHaveBeenCalledWith(
      "key",
      items[0].attributes.key
    )

    expect(menuItem.setSubmenu).toHaveBeenCalled()

    expect(childMenuItem.setLabel).toHaveBeenCalledWith(
      items[0].children[0].label
    )

    expect(menu.appendItem).toHaveBeenCalledWith(menuItem)
  })
})
