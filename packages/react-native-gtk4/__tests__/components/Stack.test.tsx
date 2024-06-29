import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import Stack from "@/components/Stack.js"
import { Box } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Stack", () => {
  beforeEach(setup)

  describe("Container", () => {
    test("should render", () => {
      render(
        <Stack.Container>
          <Box />
        </Stack.Container>
      )

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })

      expect(stack.node).toBeInstanceOf(Gtk.Stack)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.Stack>()
      const childRef = createRef<Gtk.Box>()

      render(
        <Stack.Container ref={ref}>
          <Box ref={childRef} />
        </Stack.Container>
      )

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(stack.node)
      expect(childRef.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Stack.Container>
          <Box />
        </Stack.Container>
      )

      render(null)

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })

      expect(stack).toBeNull()
      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    test("should render", () => {
      render(
        <Stack.Container>
          <Stack.Item name="foo">
            <Box />
          </Stack.Item>
        </Stack.Container>
      )

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })

      expect(stack.node).toBeInstanceOf(Gtk.Stack)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.Box>()

      render(
        <Stack.Container>
          <Stack.Item name="foo">
            <Box ref={ref} />
          </Stack.Item>
        </Stack.Container>
      )

      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Stack.Container>
          <Stack.Item name="foo">
            <Box />
          </Stack.Item>
        </Stack.Container>
      )

      render(null)

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })

      expect(stack).toBeNull()
      expect(child).toBeNull()
    })

    test("should add titled child", () => {
      const name = "foo"
      const title = "bar"

      render(
        <Stack.Container>
          <Stack.Item name={name} title={title}>
            <Box />
          </Stack.Item>
        </Stack.Container>
      )

      const stack = findBy<Gtk.Stack>({ type: "Stack" })
      const child = findBy({ type: "Box" })

      expect(stack.node.addTitled).toHaveBeenCalledWith(child.node, name, title)
    })

    test("should remove itself when unmounted", () => {
      render(
        <Stack.Container>
          <Stack.Item name="foo">
            <Box />
          </Stack.Item>
        </Stack.Container>
      )

      const stack = findBy<Gtk.Stack>({ type: "Stack" })
      const box = findBy({ type: "Box" })

      box.node.getParent = jest.fn(() => stack.node)

      render(null)

      expect(stack.node.remove).toHaveBeenCalledWith(box.node)
    })

    test("should not remove itself when unmounted if parent has been destroyed", () => {
      render(
        <Stack.Container>
          <Stack.Item name="foo">
            <Box />
          </Stack.Item>
        </Stack.Container>
      )

      const stack = findBy<Gtk.Stack>({ type: "Stack" })
      const box = findBy({ type: "Box" })

      box.node.getParent = jest.fn(() => null)

      render(null)

      expect(stack.node.remove).not.toHaveBeenCalled()
    })

    test("should set visible child", () => {
      const name = "foo"

      render(
        <Stack.Container visibleChildName={name}>
          <Stack.Item name={name}>
            <Box />
          </Stack.Item>
        </Stack.Container>
      )

      const stack = findBy<Gtk.Stack>({ type: "Stack" })

      expect(stack.node.setVisibleChildName).toHaveBeenCalledWith(name)
    })

    test("should throw when not inside Stack.Container", () => {
      expect(() => {
        render(
          <Stack.Item name="foo">
            <Box />
          </Stack.Item>
        )
      }).toThrow("Stack.Item must be a child of Stack.Container")
    })
  })

  describe("Sidebar", () => {
    test("should render", () => {
      render(
        <Stack.Container>
          <Stack.Sidebar>
            <Box />
          </Stack.Sidebar>
        </Stack.Container>
      )

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })
      const sidebar = findBy<Gtk.StackSidebar>({ type: "StackSidebar" })

      expect(stack.node).toBeInstanceOf(Gtk.Stack)
      expect(child.node).toBeInstanceOf(Gtk.Box)
      expect(sidebar.node).toBeInstanceOf(Gtk.StackSidebar)
      expect(sidebar.node.setStack).toHaveBeenCalledWith(stack.node)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.StackSidebar>()
      const childRef = createRef<Gtk.Box>()

      render(
        <Stack.Container>
          <Stack.Sidebar ref={ref}>
            <Box ref={childRef} />
          </Stack.Sidebar>
        </Stack.Container>
      )

      const child = findBy({ type: "Box" })
      const sidebar = findBy({ type: "StackSidebar" })

      expect(ref.current).toBe(sidebar.node)
      expect(childRef.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Stack.Container>
          <Stack.Sidebar>
            <Box />
          </Stack.Sidebar>
        </Stack.Container>
      )

      render(null)

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })
      const sidebar = findBy({ type: "StackSidebar" })

      expect(stack).toBeNull()
      expect(child).toBeNull()
      expect(sidebar).toBeNull()
    })

    test("should throw when not inside Stack.Container", () => {
      expect(() => {
        render(
          <Stack.Sidebar>
            <Box />
          </Stack.Sidebar>
        )
      }).toThrow("Stack.Sidebar must be a child of Stack.Container")
    })
  })

  describe("Switcher", () => {
    test("should render", () => {
      render(
        <Stack.Container>
          <Stack.Switcher>
            <Box />
          </Stack.Switcher>
        </Stack.Container>
      )

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })
      const switcher = findBy<Gtk.StackSwitcher>({ type: "StackSwitcher" })

      expect(stack.node).toBeInstanceOf(Gtk.Stack)
      expect(child.node).toBeInstanceOf(Gtk.Box)
      expect(switcher.node).toBeInstanceOf(Gtk.StackSwitcher)
      expect(switcher.node.setStack).toHaveBeenCalledWith(stack.node)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.StackSwitcher>()
      const childRef = createRef<Gtk.Box>()

      render(
        <Stack.Container>
          <Stack.Switcher ref={ref}>
            <Box ref={childRef} />
          </Stack.Switcher>
        </Stack.Container>
      )

      const child = findBy({ type: "Box" })
      const switcher = findBy({ type: "StackSwitcher" })

      expect(ref.current).toBe(switcher.node)
      expect(childRef.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Stack.Container>
          <Stack.Switcher>
            <Box />
          </Stack.Switcher>
        </Stack.Container>
      )

      render(null)

      const stack = findBy({ type: "Stack" })
      const child = findBy({ type: "Box" })
      const switcher = findBy({ type: "StackSwitcher" })

      expect(stack).toBeNull()
      expect(child).toBeNull()
      expect(switcher).toBeNull()
    })

    test("should throw when not inside Stack.Container", () => {
      expect(() => {
        render(
          <Stack.Switcher>
            <Box />
          </Stack.Switcher>
        )
      }).toThrow("Stack.Switcher must be a child of Stack.Container")
    })
  })
})
