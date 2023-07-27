import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Stack from "../../src/components/Stack.js"
import { Button, Label } from "../../src/generated/intrinsics.js"

describe("Stack", () => {
  beforeEach(setupRenderer)

  test("should render StackContainer and StackItem correctly", () => {
    const container = render(
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

    const stack = container.findByType("Stack")

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
    const container = render(
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

    const stack = container.findByType("Stack")

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
    const container = render(
      <Stack.Container visibleChildName="item1">
        <Stack.Item name="item1" title="Item 1">
          <Button>
            <Label text="Item 1" />
          </Button>
        </Stack.Item>
      </Stack.Container>
    )

    const stack = container.findByType("Stack")
    const button = container.findByType("Button")

    button.node.getParent = jest.fn(() => stack.node)

    render(null)

    expect(stack.node.remove).toHaveBeenCalledWith(button.node)
  })
})
