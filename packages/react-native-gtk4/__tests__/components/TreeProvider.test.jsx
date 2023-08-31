import React from "react"
import Gtk from "@girs/node-gtk-4.0"
import { render, setup, findBy } from "../../src/test-support/index.js"
import TreeProvider from "../../src/components/TreeProvider.js"
import ListModelProvider from "../../src/components/ListModelProvider.js"
import { Box } from "../../src/generated/intrinsics.js"

describe("TreeProvider", () => {
  let model
  let rootModel

  beforeEach(() => {
    setup()

    Gtk.TreeListModel.new.mockImplementation(
      (...args) => new Gtk.TreeListModel(...args)
    )

    const MockedStringList = Gtk.StringList

    Gtk.StringList = class extends MockedStringList {
      constructor() {
        super()
        this.items = []
      }

      getItem(index) {
        return this.items[index]
      }

      append(value) {
        this.items.push(value)
      }

      splice(index, count, values) {
        this.items.splice(index, count, ...values)
      }
    }

    render(<TreeProvider.Container />)

    model = Gtk.StringList.mock.instances[0]
    rootModel = Gtk.TreeListModel.new.mock.results[0].value
  })

  describe("Container", () => {
    test("should render", () => {
      render(
        <TreeProvider.Container>
          <Box />
        </TreeProvider.Container>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should handle unmount gracefully", () => {
      render(
        <TreeProvider.Container>
          <Box />
        </TreeProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })
  })

  describe("List", () => {
    test("should render children as is if not a valid element", () => {
      const child = []

      jest.spyOn(React, "isValidElement").mockReturnValue(false)
      jest.spyOn(TreeProvider, "List")

      render(
        <TreeProvider.Container>
          <TreeProvider.List>{child}</TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(TreeProvider.List.mock.results[0].value).toEqual(child)
    })

    test("should render", () => {
      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <Box />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should handle unmount gracefully", () => {
      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <Box />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    const value = "value"

    test("should not render anything by itself", () => {
      render(
        <TreeProvider.Item>
          <Box />
        </TreeProvider.Item>
      )

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should throw when not in a TreeProvider.Container", () => {
      expect(() =>
        render(
          <ListModelProvider model={{}} items={{}} setItems={() => {}}>
            <TreeProvider.List>
              <TreeProvider.Item value={value} />
            </TreeProvider.List>
          </ListModelProvider>
        )
      ).toThrow(
        "TreeProvider.Item must be used inside a TreeProvider.Container"
      )
    })

    test("should insert item into tree model", () => {
      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(model.splice).toHaveBeenCalledWith(0, 0, ["0"])
    })

    test("should remove item from tree model when unmounting", async () => {
      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      render(null)

      expect(model.splice).toHaveBeenCalledWith(0, 1, [])
    })

    test("should retrieve a direct child from rootList", () => {
      const value = "value"
      const childValue = "child"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value}>
              <TreeProvider.Item value={childValue} />
            </TreeProvider.Item>
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      const item = { getProperty: jest.fn(() => "0") }

      const nestedModel = Gtk.TreeListModel.new.mock.calls[0][3](item)

      expect(nestedModel.items).toEqual(["0.0"])
    })

    test("should return null for item without children", () => {
      const value = "value"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      const item = { getProperty: jest.fn(() => "0") }

      const nestedModel = Gtk.TreeListModel.new.mock.calls[0][3](item)

      expect(nestedModel).toBeNull()
    })

    test("should handle nested children retrieval", () => {
      const valueA = "A"
      const valueB = "B"
      const valueC = "C"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={valueA}>
              <TreeProvider.Item value={valueB}>
                <TreeProvider.Item value={valueC} />
              </TreeProvider.Item>
            </TreeProvider.Item>
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      const item = { getProperty: jest.fn(() => "0.0") }

      const nestedModel = Gtk.TreeListModel.new.mock.calls[0][3](item)

      expect(nestedModel.items).toEqual(["0.0.0"])
    })

    test("should handle multiple items correctly", () => {
      const value1 = "value1"
      const value2 = "value2"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value1} />
            <TreeProvider.Item value={value2} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(model.splice).toHaveBeenCalledWith(0, 0, ["0"])
      expect(model.splice).toHaveBeenCalledWith(1, 0, ["1"])
    })

    test("should handle nested lists", () => {
      const value1 = "value1"
      const value2 = "value2"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value1}>
              <TreeProvider.Item value={value2} />
            </TreeProvider.Item>
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      const onCreateFunc = Gtk.TreeListModel.new.mock.calls[0][3]

      onCreateFunc({ getProperty: () => "0" })

      expect(Gtk.StringList).toHaveBeenCalledTimes(2)

      const nestedModel = Gtk.StringList.mock.instances[1]

      expect(model.splice).toHaveBeenCalledWith(0, 0, ["0"])
      expect(nestedModel.append).toHaveBeenCalledWith("0.0")
    })

    test("should handle non-existent paths", () => {
      const value = { value: "foo" }

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value}>
              <TreeProvider.Item value={value} />
            </TreeProvider.Item>
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      const onCreateFunc = Gtk.TreeListModel.new.mock.calls[0][3]
      const childrenList = onCreateFunc({ getProperty: () => "1" })

      expect(childrenList).toBeNull()
    })

    test("should handle non-existent nested paths", () => {
      const value = { value: "foo" }

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value}>
              <TreeProvider.Item value={value}>
                <TreeProvider.Item value={value} />
              </TreeProvider.Item>
            </TreeProvider.Item>
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      const onCreateFunc = Gtk.TreeListModel.new.mock.calls[0][3]
      const childrenList = onCreateFunc({ getProperty: () => "0.1" })

      expect(childrenList).toBeNull()
    })

    test("should not update root node when deps have not changed", () => {
      const value = "foo"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(model.splice).toHaveBeenCalledWith(0, 0, ["0"])
      expect(model.splice).toHaveBeenCalledTimes(1)
    })

    test("should not remove item from root node when deps have not changed", () => {
      const value = "foo"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      render(null)

      const addCalls = model.splice.mock.calls.filter(
        ([index, deletions, additions]) =>
          index === 0 &&
          deletions === 0 &&
          additions.length === 1 &&
          additions[0] === "0"
      )

      expect(addCalls.length).toBe(1)
      expect(model.splice).toHaveBeenCalledTimes(2)
    })

    test("should remove item from root node when unmounting", () => {
      const value = "foo"

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      render(null)

      const addCalls = model.splice.mock.calls.filter(
        ([index, deletions, additions]) =>
          index === 0 &&
          deletions === 0 &&
          additions.length === 1 &&
          additions[0] === "0"
      )

      expect(addCalls.length).toBe(1)
      expect(model.splice).toHaveBeenCalledTimes(2)
    })

    test("should trigger itemsChanged when mounting a nested item", () => {
      const value = { value: "foo" }

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value}>
              <TreeProvider.Item value={value} />
            </TreeProvider.Item>
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(rootModel.itemsChanged).toHaveBeenCalledWith(0, 1, 1)
    })

    test("should trigger itemsChanged when unmounting a nested item", () => {
      const value = { value: "foo" }

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value}>
              <TreeProvider.Item value={value} />
            </TreeProvider.Item>
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <TreeProvider.Item value={value} />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(rootModel.itemsChanged).toHaveBeenCalledTimes(2)
      expect(rootModel.itemsChanged).toHaveBeenCalledWith(0, 1, 1)
    })
  })
})
