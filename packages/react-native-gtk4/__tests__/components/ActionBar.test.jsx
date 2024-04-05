import React, { createRef } from "react"
import { render, setup, findBy } from "../../test-support/index.js"
import ActionBar from "../../src/components/ActionBar.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ActionBar", () => {
  beforeEach(setup)

  describe("Container", () => {
    test("should render", () => {
      render(
        <ActionBar.Container>
          <Box />
        </ActionBar.Container>
      )

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(actionBar.node).toBeInstanceOf(Gtk.ActionBar)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef()
      const childRef = createRef()

      render(
        <ActionBar.Container ref={ref}>
          <Box ref={childRef} />
        </ActionBar.Container>
      )

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(actionBar.node)
      expect(childRef.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <ActionBar.Container>
          <Box />
        </ActionBar.Container>
      )

      render(null)

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(actionBar).toBeNull()
      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    test("should render", () => {
      render(
        <ActionBar.Container>
          <ActionBar.Item>
            <Box />
          </ActionBar.Item>
        </ActionBar.Container>
      )

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(actionBar.node).toBeInstanceOf(Gtk.ActionBar)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef()

      render(
        <ActionBar.Container>
          <ActionBar.Item>
            <Box ref={ref} />
          </ActionBar.Item>
        </ActionBar.Container>
      )

      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <ActionBar.Container>
          <ActionBar.Item>
            <Box />
          </ActionBar.Item>
        </ActionBar.Container>
      )

      render(null)

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(actionBar).toBeNull()
      expect(child).toBeNull()
    })

    test("should remove itself when unmounted", () => {
      render(
        <ActionBar.Container>
          <ActionBar.Item>
            <Box />
          </ActionBar.Item>
        </ActionBar.Container>
      )

      const actionBar = findBy({ type: "ActionBar" })

      render(null)

      expect(actionBar.node.remove).toHaveBeenCalled()
    })

    test("should throw when not inside ActionBar.Container", () => {
      expect(() => {
        render(
          <ActionBar.Item>
            <Box />
          </ActionBar.Item>
        )
      }).toThrow("ActionBar.Item must be a child of ActionBar.Container")
    })

    test("should pack child to start by default", () => {
      render(
        <ActionBar.Container>
          <ActionBar.Item>
            <Box />
          </ActionBar.Item>
        </ActionBar.Container>
      )

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(actionBar.node.packStart).toHaveBeenCalledWith(child.node)
    })
  })

  describe("Section", () => {
    test("should render", () => {
      render(
        <ActionBar.Section>
          <Box />
        </ActionBar.Section>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef()

      render(
        <ActionBar.Section>
          <Box ref={ref} />
        </ActionBar.Section>
      )

      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <ActionBar.Section>
          <Box />
        </ActionBar.Section>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should pack child to end", () => {
      render(
        <ActionBar.Container>
          <ActionBar.Section position="end">
            <ActionBar.Item>
              <Box />
            </ActionBar.Item>
          </ActionBar.Section>
        </ActionBar.Container>
      )

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(actionBar.node.packEnd).toHaveBeenCalledWith(child.node)
    })

    test("should set center child", () => {
      render(
        <ActionBar.Container>
          <ActionBar.Section position="center">
            <ActionBar.Item>
              <Box />
            </ActionBar.Item>
          </ActionBar.Section>
        </ActionBar.Container>
      )

      const actionBar = findBy({ type: "ActionBar" })
      const child = findBy({ type: "Box" })

      expect(actionBar.node.setCenterWidget).toHaveBeenCalledWith(child.node)
    })
  })
})
