import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import { Label } from "../../src/generated/intrinsics.js"
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
      render(<DropDown.Container />)
      const dropDown = findBy({ type: "DropDown" })
      expect(dropDown).toBeTruthy()
    })

    test("should render children correctly", () => {
      const listItem = new Gtk.ListItem()
      const id = "itemId"
      const value = "itemValue"

      const renderItem = jest.fn((ref, value) => (
        <Label label={`${value}-item`} ref={ref} />
      ))

      const renderPopoverItem = jest.fn((ref, value) => (
        <Label label={`${value}-popoverItem`} ref={ref} />
      ))

      listItem.item = {
        getProperty: jest.fn(() => id),
      }

      render(
        <DropDown.Container
          renderItem={renderItem}
          renderPopoverItem={renderPopoverItem}
        >
          <DropDown.Item value={value} id={id} />
        </DropDown.Container>
      )

      expect(Gtk.SignalListItemFactory).toHaveBeenCalledTimes(2)

      const bindCallbacks = Gtk.SignalListItemFactory.prototype.on.mock.calls
        .filter(([event]) => event === "bind")
        .map(([, callback]) => callback)

      for (const callback of bindCallbacks) {
        callback(listItem)
      }

      jest.runAllTimers()

      expect(renderItem).toHaveBeenCalled()
      expect(renderPopoverItem).toHaveBeenCalled()
      expect(renderItem).toHaveBeenCalledWith(expect.any(Function), value)

      expect(renderPopoverItem).toHaveBeenCalledWith(
        expect.any(Function),
        value
      )

      const itemLabel = findBy({ text: `${value}-item` })
      const popoverItemLabel = findBy({ text: `${value}-popoverItem` })

      expect(listItem.setChild).toHaveBeenCalled()
      expect(listItem.setChild).toHaveBeenCalledWith(itemLabel.node)
      expect(listItem.setChild).toHaveBeenCalledWith(popoverItemLabel.node)
      expect(listItem.item.getProperty).toHaveBeenCalled()
      expect(listItem.item.getProperty).toHaveBeenCalledWith("string")
    })

    test("should update list when items change", () => {
      const renderItem = jest.fn(() => <></>)
      const id1 = "itemId1"
      const value1 = "itemValue1"
      const id2 = "itemId2"
      const value2 = "itemValue2"

      render(
        <DropDown.Container renderItem={renderItem}>
          <DropDown.Item value={value1} id={id1} />
        </DropDown.Container>
      )

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown.node.model.items).toContain(id1)
      expect(dropDown.node.model.items).not.toContain(id2)

      render(
        <DropDown.Container renderItem={renderItem}>
          <DropDown.Item value={value2} id={id2} />
        </DropDown.Container>
      )

      expect(dropDown.node.model.items).not.toContain(id1)
      expect(dropDown.node.model.items).toContain(id2)
    })

    test("should unbind item correctly when it is no longer needed", () => {
      const listItem = new Gtk.ListItem()
      const id = "itemId"
      const value = "itemValue"

      const renderItem = jest.fn((ref, value) => (
        <Label label={`${value}-item`} ref={ref} />
      ))

      listItem.item = {
        getProperty: jest.fn(() => id),
      }

      render(
        <DropDown.Container renderItem={renderItem}>
          <DropDown.Item value={value} id={id} />
        </DropDown.Container>
      )

      const bindCallback =
        Gtk.SignalListItemFactory.prototype.on.mock.calls.find(
          ([event]) => event === "bind"
        )[1]

      bindCallback(listItem)
      jest.runAllTimers()

      expect(renderItem).toHaveBeenCalled()

      const unbindCallback =
        Gtk.SignalListItemFactory.prototype.on.mock.calls.find(
          ([event]) => event === "unbind"
        )[1]

      unbindCallback(listItem)
      jest.runAllTimers()

      const label = findBy({ text: `${value}-item` })

      expect(label).toBeNull()
    })
  })

  describe("Item", () => {
    test("should add item to the list", () => {
      const value = "itemValue"
      const id = "itemId"

      render(
        <DropDown.Container>
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
        <DropDown.Container>
          <DropDown.Item value={value} id={id} />
        </DropDown.Container>
      )

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown.node.model.items).toContain(id)

      render(<DropDown.Container />)

      expect(dropDown.node.model.items).not.toContain(id)
    })

    test("should not add item to the list if Container is not present", () => {
      const value = "itemValue"
      const id = "itemId"

      expect(() => render(<DropDown.Item value={value} id={id} />)).toThrow(
        "DropDown.Item must be used inside a DropDown.Container"
      )
    })
  })
})
