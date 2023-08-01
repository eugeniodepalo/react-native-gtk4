import React from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Stack from "../../src/components/Stack.js"
import { Button, Label } from "../../src/generated/intrinsics.js"

describe("Stack", () => {
  beforeEach(setup)

  test("should render StackContainer and StackItem correctly", () => {
    render(
      <Stack.Container visibleChildName="item1">
        <Stack.Item name="item1" title="Item 1">
          <Button>
            <Label text="Item 1" />
          </Button>
        </Stack.Item>
        <Stack.Item name="item2" title="Item 2">
          <Button>
            <Label text="Item 2" />
          </Button>
        </Stack.Item>
      </Stack.Container>
    )

    const stack = findBy({ type: "Stack" })

    expect(stack.node.addTitled).toHaveBeenNthCalledWith(
      1,
      expect.anything(),
      "item1",
      "Item 1"
    )

    expect(stack.node.addTitled).toHaveBeenNthCalledWith(
      2,
      expect.anything(),
      "item2",
      "Item 2"
    )

    expect(stack.node.setVisibleChildName).toHaveBeenCalledWith("item1")
  })

  test("should update visible child when the visibleChildName prop changes", () => {
    render(
      <Stack.Container visibleChildName="item1">
        <Stack.Item name="item1" title="Item 1">
          <Button>
            <Label text="Item 1" />
          </Button>
        </Stack.Item>
        <Stack.Item name="item2" title="Item 2">
          <Button>
            <Label text="Item 2" />
          </Button>
        </Stack.Item>
      </Stack.Container>
    )

    const stack = findBy({ type: "Stack" })

    render(
      <Stack.Container visibleChildName="item2">
        <Stack.Item name="item1" title="Item 1">
          <Button>
            <Label text="Item 1" />
          </Button>
        </Stack.Item>
        <Stack.Item name="item2" title="Item 2">
          <Button>
            <Label text="Item 2" />
          </Button>
        </Stack.Item>
      </Stack.Container>
    )

    expect(stack.node.setVisibleChildName).toHaveBeenCalledWith("item2")
  })

  test("should remove previous item when unmounting", () => {
    render(
      <Stack.Container visibleChildName="item1">
        <Stack.Item name="item1" title="Item 1">
          <Button>
            <Label text="Item 1" />
          </Button>
        </Stack.Item>
      </Stack.Container>
    )

    const stack = findBy({ type: "Stack" })
    const button = findBy({ type: "Button" })

    button.node.getParent = jest.fn(() => stack.node)

    render(null)

    expect(stack.node.remove).toHaveBeenCalledWith(button.node)
  })

  test("should render Sidebar correctly", () => {
    render(
      <Stack.Container>
        <Stack.Sidebar />
      </Stack.Container>
    )

    const sidebar = findBy({ type: "StackSidebar" })

    expect(sidebar.node).toBeTruthy()
  })

  test("should throw an error when Sidebar is not inside a Container", () => {
    expect(() => render(<Stack.Sidebar />)).toThrow(
      "Stack.Sidebar must be a child of Stack.Container"
    )
  })

  test("should throw an error when Item is not inside a Container", () => {
    expect(() =>
      render(
        <Stack.Item name="item1" title="Item 1">
          <Button>
            <Label text="Item 1" />
          </Button>
        </Stack.Item>
      )
    ).toThrow("Stack.Item must be a child of Stack.Container")
  })
})
