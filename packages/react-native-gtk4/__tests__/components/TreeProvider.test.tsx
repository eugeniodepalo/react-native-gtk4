import React from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { render, setup, findBy } from "@/test-support/index.js"
import TreeProvider from "@/components/TreeProvider.js"
import ListModelProvider from "@/components/ListModelProvider.js"
import { Box } from "@/generated/intrinsics.js"
import { GObject, Gio } from "@/index.js"

const MockedGtk = Gtk as jest.Mocked<typeof Gtk>

const mockedTreeListModelNew = MockedGtk.TreeListModel
  .new as jest.MockedFunction<typeof MockedGtk.TreeListModel.new>

class MockedStringList extends Gtk.StringList {
  items: string[]

  constructor() {
    super()
    this.items = []
  }

  getItem(index: number) {
    return this.items[index] as any
  }

  append(value: string) {
    this.items.push(value)
  }

  splice(index: number, count: number, additions: string[] | null) {
    this.items.splice(index, count, ...(additions || []))
  }
}

mockedTreeListModelNew.mockImplementation(
  (...args) => new Gtk.TreeListModel(...args)
)

const MockedStringListMock = MockedStringList as jest.MockedClass<
  typeof MockedStringList
>

Gtk.StringList = MockedStringList

describe("TreeProvider", () => {
  let model: MockedStringList
  let rootModel: Gtk.TreeListModel

  beforeEach(() => {
    setup()

    render(
      <TreeProvider.Container>
        <Box />
      </TreeProvider.Container>
    )

    model = MockedStringListMock.mock.instances[0]
    rootModel = mockedTreeListModelNew.mock.results[0].value
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
      jest.spyOn(React, "isValidElement").mockReturnValue(false)
      jest.spyOn(TreeProvider, "List")

      const MockedTreeProviderList = TreeProvider.List as jest.MockedFunction<
        typeof TreeProvider.List
      >

      render(
        <TreeProvider.Container>
          <TreeProvider.List>
            <Box />
          </TreeProvider.List>
        </TreeProvider.Container>
      )

      expect(MockedTreeProviderList.mock.results[0].value[0]).toMatchObject({
        type: "Box",
      })
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

      expect(child.node).toBeInstanceOf(Gtk.Box)
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

    test("should throw when not in a TreeProvider.Container", () => {
      expect(() =>
        render(
          <ListModelProvider model={new Gio.ListModel()}>
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

      const item = new GObject.Object()

      item.getProperty = jest.fn(() => "0" as any)

      const nestedModel = mockedTreeListModelNew.mock.calls[0][3](
        item
      ) as MockedStringList

      expect(nestedModel?.items).toEqual(["0.0"])
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

      const item = new GObject.Object()

      item.getProperty = jest.fn(() => "0" as any)

      const nestedModel = mockedTreeListModelNew.mock.calls[0][3](item)

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

      const item = new GObject.Object()

      item.getProperty = jest.fn(() => "0.0" as any)

      const nestedModel = mockedTreeListModelNew.mock.calls[0][3](
        item
      ) as MockedStringList

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

      const onCreateFunc = mockedTreeListModelNew.mock.calls[0][3]
      const item = new GObject.Object()

      item.getProperty = jest.fn(() => "0" as any)

      onCreateFunc(item)

      expect(Gtk.StringList).toHaveBeenCalledTimes(2)

      const nestedModel = MockedGtk.StringList.mock.instances[1]

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

      const onCreateFunc = mockedTreeListModelNew.mock.calls[0][3]
      const item = new GObject.Object()

      item.getProperty = jest.fn(() => "1" as any)

      const childrenList = onCreateFunc(item)

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

      const onCreateFunc = mockedTreeListModelNew.mock.calls[0][3]
      const item = new GObject.Object()

      item.getProperty = jest.fn(() => "0.1" as any)

      const childrenList = onCreateFunc(item)

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

      const mockedSplice = model.splice as jest.MockedFunction<
        typeof model.splice
      >

      const addCalls = mockedSplice.mock.calls.filter(
        ([index, deletions, additions]) =>
          index === 0 &&
          deletions === 0 &&
          additions?.length === 1 &&
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

      const mockedSplice = model.splice as jest.MockedFunction<
        typeof model.splice
      >

      const addCalls = mockedSplice.mock.calls.filter(
        ([index, deletions, additions]) =>
          index === 0 &&
          deletions === 0 &&
          additions?.length === 1 &&
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
