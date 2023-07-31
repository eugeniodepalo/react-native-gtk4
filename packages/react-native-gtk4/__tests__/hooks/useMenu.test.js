import React from "react"
import Gio from "@girs/node-gio-2.0"
import useMenu from "../../src/hooks/useMenu.js"

jest.mock("react")

describe("useMenu", () => {
  let items

  const itemProps = {
    label: "Test",
    icon: "test-icon",
    action: "test-action",
    type: "item",
  }

  beforeEach(() => {
    items = []
    Gio.Menu.prototype.appendItem = jest.fn((item) => items.push(item))
    Gio.Menu.prototype.getNItems = jest.fn(() => items.length)
    React.useMemo = jest.fn((fn) => fn())
  })

  test("should create Gio.Menu instance", () => {
    useMenu()
    expect(Gio.Menu).toHaveBeenCalled()
  })

  test("should append item to parent", () => {
    useMenu([{ ...itemProps }])

    for (const call of React.useEffect.mock.calls) {
      call[0]()
    }

    const menuItem = Gio.MenuItem.mock.instances[0]

    expect(menuItem.setLabel).toHaveBeenCalledWith(itemProps.label)
    expect(menuItem.setDetailedAction).toHaveBeenCalledWith(itemProps.action)
    expect(Gio.ThemedIcon.new).toHaveBeenCalledWith(itemProps.icon)
    expect(Gio.Menu.prototype.appendItem).toHaveBeenCalledWith(menuItem)

    expect(menuItem.setIcon).toHaveBeenCalledWith(
      Gio.ThemedIcon.mock.instances[0]
    )
  })

  test("should remove item on unmount", () => {
    useMenu([{ ...itemProps }])

    for (const call of React.useEffect.mock.calls) {
      call[0]()()
    }

    expect(Gio.Menu.prototype.removeAll).toHaveBeenCalled()
  })
})
