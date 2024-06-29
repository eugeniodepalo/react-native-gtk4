import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import HeaderBar from "@/components/HeaderBar.js"
import { Box } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("HeaderBar", () => {
  beforeEach(setup)

  describe("Container", () => {
    test("should render", () => {
      render(
        <HeaderBar.Container>
          <Box />
        </HeaderBar.Container>
      )

      const headerBar = findBy({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar.node).toBeInstanceOf(Gtk.HeaderBar)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.HeaderBar>()
      const childRef = createRef<Gtk.Box>()

      render(
        <HeaderBar.Container ref={ref}>
          <Box ref={childRef} />
        </HeaderBar.Container>
      )

      const headerBar = findBy({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(headerBar.node)
      expect(childRef.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <HeaderBar.Container>
          <Box />
        </HeaderBar.Container>
      )

      render(null)

      const headerBar = findBy({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar).toBeNull()
      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    test("should render", () => {
      render(
        <HeaderBar.Container>
          <HeaderBar.Item>
            <Box />
          </HeaderBar.Item>
        </HeaderBar.Container>
      )

      const headerBar = findBy({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar.node).toBeInstanceOf(Gtk.HeaderBar)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.Box>()

      render(
        <HeaderBar.Container>
          <HeaderBar.Item>
            <Box ref={ref} />
          </HeaderBar.Item>
        </HeaderBar.Container>
      )

      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <HeaderBar.Container>
          <HeaderBar.Item>
            <Box />
          </HeaderBar.Item>
        </HeaderBar.Container>
      )

      render(null)

      const headerBar = findBy({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar).toBeNull()
      expect(child).toBeNull()
    })

    test("should remove itself when unmounted", () => {
      render(
        <HeaderBar.Container>
          <HeaderBar.Item>
            <Box />
          </HeaderBar.Item>
        </HeaderBar.Container>
      )

      const headerBar = findBy<Gtk.HeaderBar>({ type: "HeaderBar" })

      render(null)

      expect(headerBar.node.remove).toHaveBeenCalled()
    })

    test("should throw when not inside HeaderBar.Container", () => {
      expect(() => {
        render(
          <HeaderBar.Item>
            <Box />
          </HeaderBar.Item>
        )
      }).toThrow("HeaderBar.Item must be a child of HeaderBar.Container")
    })

    test("should pack child to end by default", () => {
      render(
        <HeaderBar.Container>
          <HeaderBar.Item>
            <Box />
          </HeaderBar.Item>
        </HeaderBar.Container>
      )

      const headerBar = findBy<Gtk.HeaderBar>({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar.node.packEnd).toHaveBeenCalledWith(child.node)
    })
  })

  describe("Section", () => {
    test("should render", () => {
      render(
        <HeaderBar.Section>
          <Box />
        </HeaderBar.Section>
      )

      const child = findBy({ type: "Box" })

      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.Box>()

      render(
        <HeaderBar.Section>
          <Box ref={ref} />
        </HeaderBar.Section>
      )

      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <HeaderBar.Section>
          <Box />
        </HeaderBar.Section>
      )

      render(null)

      const child = findBy({ type: "Box" })

      expect(child).toBeNull()
    })

    test("should pack child to end", () => {
      render(
        <HeaderBar.Container>
          <HeaderBar.Section position="end">
            <HeaderBar.Item>
              <Box />
            </HeaderBar.Item>
          </HeaderBar.Section>
        </HeaderBar.Container>
      )

      const headerBar = findBy<Gtk.HeaderBar>({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar.node.packEnd).toHaveBeenCalledWith(child.node)
    })

    test("should pack child to start", () => {
      render(
        <HeaderBar.Container>
          <HeaderBar.Section position="start">
            <HeaderBar.Item>
              <Box />
            </HeaderBar.Item>
          </HeaderBar.Section>
        </HeaderBar.Container>
      )

      const headerBar = findBy<Gtk.HeaderBar>({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar.node.packStart).toHaveBeenCalledWith(child.node)
    })

    test("should set title widget", () => {
      render(<HeaderBar.Container title={<Box />} />)

      const headerBar = findBy<Gtk.HeaderBar>({ type: "HeaderBar" })
      const child = findBy({ type: "Box" })

      expect(headerBar.node.setTitleWidget).toHaveBeenCalledWith(child.node)
    })
  })
})
