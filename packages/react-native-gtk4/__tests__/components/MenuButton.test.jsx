import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import MenuButton from "../../src/components/MenuButton.js"
import Gio from "@girs/node-gio-2.0"

describe("MenuButton", () => {
  let menu
  let actionGroup

  beforeEach(() => {
    setup()
    menu = new Gio.Menu()
    actionGroup = new Gio.SimpleActionGroup()
  })

  describe("Container", () => {
    test("should render correctly", () => {
      render(
        <MenuButton menu={menu} actionGroup={actionGroup} actionPrefix="test" />
      )

      const menuButton = findBy({ type: "MenuButton" })

      expect(menuButton).toBeTruthy()
    })

    test("should call insertActionGroup with correct parameters", () => {
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
})
