import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import MenuButton from "../../src/components/MenuButton.js"
import Gio from "@girs/node-gio-2.0"
import ActionGroupProvider from "../../src/components/ActionGroupProvider.js"

describe("MenuButton", () => {
  let items

  beforeEach(() => {
    setup()
    items = []
    Gio.Menu.prototype.appendItem = jest.fn((item) => items.push(item))
    Gio.Menu.prototype.getNItems = jest.fn(() => items.length)
  })

  describe("Container", () => {
    test("should render correctly and create Gio.Menu instance", () => {
      render(<MenuButton.Container />)

      const menuButton = findBy({ type: "MenuButton" })

      expect(menuButton).toBeTruthy()
      expect(Gio.Menu).toHaveBeenCalled()
    })

    test("should call insertActionGroup with correct parameters", () => {
      render(
        <ActionGroupProvider name="test" actions={{}}>
          <MenuButton.Container />
        </ActionGroupProvider>
      )

      const menuButton = findBy({ type: "MenuButton" })

      expect(menuButton.node.insertActionGroup).toHaveBeenCalledWith(
        "test",
        Gio.SimpleActionGroup.mock.instances[0]
      )
    })
  })

  describe("Item", () => {
    const itemProps = {
      label: "Test",
      icon: "test-icon",
      action: "test-action",
      type: "item",
    }

    test("should append item to parent", () => {
      render(
        <MenuButton.Container>
          <MenuButton.Item {...itemProps} />
        </MenuButton.Container>
      )

      const menuItem = Gio.MenuItem.mock.instances[0]

      expect(menuItem.setLabel).toHaveBeenCalledWith(itemProps.label)
      expect(menuItem.setDetailedAction).toHaveBeenCalledWith(itemProps.action)
      expect(Gio.ThemedIcon).toHaveBeenCalledWith(itemProps.icon)
      expect(Gio.Menu.prototype.appendItem).toHaveBeenCalledWith(menuItem)

      expect(menuItem.setIcon).toHaveBeenCalledWith(
        Gio.ThemedIcon.mock.instances[0]
      )
    })

    test("should remove item on unmount", () => {
      render(
        <MenuButton.Container>
          <MenuButton.Item {...itemProps} />
        </MenuButton.Container>
      )

      render(null)

      expect(Gio.Menu.prototype.remove).toHaveBeenCalledWith(0)
    })

    test("should throw error if not used within a MenuButton", () => {
      expect(() => render(<MenuButton.Item {...itemProps} />)).toThrow(
        "MenuButton.Item must be used inside a MenuButton"
      )
    })
  })
})
