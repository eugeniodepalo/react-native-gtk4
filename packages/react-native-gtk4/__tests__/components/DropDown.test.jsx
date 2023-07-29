import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import DropDown from "../../src/components/DropDown.js"
import { mockProperty } from "../../src/test-support/utils.js"
import Gtk from "@girs/node-gtk-4.0"

describe("DropDown", () => {
  beforeEach(() => {
    setup()
    mockProperty(Gtk.DropDown, "model")

    Gtk.StringList.mockImplementation(function () {
      this.items = []
      this.getString = (index) => this.items[index]
      this.getNItems = () => this.items.length
      this.append = (item) => this.items.push(item)
      this.remove = (index) => this.items.splice(index, 1)
    })
  })

  describe("Container", () => {
    test("should render correctly", () => {
      render(<DropDown.Container renderItem={() => <></>} />)
      const dropDown = findBy({ type: "DropDown" })
      expect(dropDown).toBeTruthy()
    })
  })

  describe("Item", () => {
    test("should add item to the list", () => {
      const value = "itemValue"
      const id = "itemId"

      render(
        <DropDown.Container renderItem={() => <></>}>
          <DropDown.Item value={value} id={id} />
        </DropDown.Container>
      )

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown.node.model.items).toContain(id)
    })

    test("should remove item from the list on unmount", () => {
      const value = "itemValue"
      const id = "itemId"

      render(
        <DropDown.Container renderItem={() => <></>}>
          <DropDown.Item value={value} id={id} />
        </DropDown.Container>
      )

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown.node.model.items).toContain(id)

      render(<DropDown.Container renderItem={() => <></>} />)

      expect(dropDown.node.model.items).not.toContain(id)
    })
  })
})
