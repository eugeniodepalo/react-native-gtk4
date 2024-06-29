import React from "react"
import Gio from "@/generated/girs/node-gio-2.0"
import GLib from "@/generated/girs/node-glib-2.0"
import { setup, render } from "@/test-support/index.js"
import useMenu, { MenuItem } from "@/hooks/useMenu.js"

const MockedGio = Gio as jest.Mocked<typeof Gio>

describe("useMenu", () => {
  let items: MenuItem[]
  let menu: Gio.Menu

  const Component = () => {
    menu = useMenu(items, [])
    return null
  }

  beforeEach(() => {
    setup()

    items = [
      {
        label: "test",
        icon: "test-icon",
        action: "test-action",
        attributes: { key: new GLib.Variant() },
        children: [{ label: "child" }],
      },
    ]
  })

  test("should build a menu from items", () => {
    render(<Component />)

    const menuItem = MockedGio.MenuItem.mock.instances[0]
    const childMenuItem = MockedGio.MenuItem.mock.instances[1]

    expect(Gio.MenuItem).toHaveBeenCalledTimes(2)
    expect(menuItem.setLabel).toHaveBeenCalledWith(items[0].label)
    expect(menuItem.setDetailedAction).toHaveBeenCalledWith(items[0].action)

    expect(menuItem.setAttributeValue).toHaveBeenCalledWith(
      "key",
      items[0].attributes?.key
    )

    expect(menuItem.setSubmenu).toHaveBeenCalled()

    expect(childMenuItem.setLabel).toHaveBeenCalledWith(
      items[0].children?.[0].label
    )

    expect(menu.appendItem).toHaveBeenCalledWith(menuItem)
  })
})
