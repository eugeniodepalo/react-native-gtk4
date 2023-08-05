import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import Notebook from "../../src/components/Notebook.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Notebook", () => {
  beforeEach(setup)

  describe("Container", () => {
    test("should render", () => {
      render(
        <Notebook.Container>
          <Box />
        </Notebook.Container>
      )

      const notebook = findBy({ type: "Notebook" })
      const child = findBy({ type: "Box" })

      expect(notebook.node).toBeInstanceOf(Gtk.Notebook)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef()
      const childRef = createRef()

      render(
        <Notebook.Container ref={ref}>
          <Box ref={childRef} />
        </Notebook.Container>
      )

      const notebook = findBy({ type: "Notebook" })
      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(notebook.node)
      expect(childRef.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Notebook.Container>
          <Box />
        </Notebook.Container>
      )

      render(null)

      const notebook = findBy({ type: "Notebook" })
      const child = findBy({ type: "Box" })

      expect(notebook).toBeNull()
      expect(child).toBeNull()
    })
  })

  describe("Tab", () => {
    test("should render", () => {
      render(
        <Notebook.Container>
          <Notebook.Tab>
            <Box />
          </Notebook.Tab>
        </Notebook.Container>
      )

      const notebook = findBy({ type: "Notebook" })
      const child = findBy({ type: "Box" })

      expect(notebook.node).toBeInstanceOf(Gtk.Notebook)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef()
      const childRef = createRef()

      render(
        <Notebook.Container ref={ref}>
          <Notebook.Tab>
            <Box ref={childRef} />
          </Notebook.Tab>
        </Notebook.Container>
      )

      const child = findBy({ type: "Box" })
      const notebook = findBy({ type: "Notebook" })

      expect(childRef.current).toBe(child.node)
      expect(ref.current).toBe(notebook.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Notebook.Container>
          <Notebook.Tab label="Tab 1">
            <Box />
          </Notebook.Tab>
        </Notebook.Container>
      )

      render(null)

      const notebook = findBy({ type: "Notebook" })
      const child = findBy({ type: "Box" })

      expect(notebook).toBeNull()
      expect(child).toBeNull()
    })

    test("should remove itself when unmounted", () => {
      render(
        <Notebook.Container>
          <Notebook.Tab label="Tab 1">
            <Box />
          </Notebook.Tab>
        </Notebook.Container>
      )

      const notebook = findBy({ type: "Notebook" })

      notebook.node.pageNum = jest.fn(() => 0)

      render(null)

      expect(notebook.node.pageNum).toHaveBeenCalled()
      expect(notebook.node.removePage).toHaveBeenCalledWith(0)
    })

    test("should throw when not inside Notebook.Container", () => {
      expect(() => {
        render(
          <Notebook.Tab>
            <Box />
          </Notebook.Tab>
        )
      }).toThrow("Notebook.Tab must be a child of Notebook.Container")
    })

    test("should append page", () => {
      render(
        <Notebook.Container>
          <Notebook.Tab label="Tab 1">
            <Box />
          </Notebook.Tab>
        </Notebook.Container>
      )

      const notebook = findBy({ type: "Notebook" })
      const child = findBy({ type: "Box" })
      const label = findBy({ type: "Label" })

      expect(notebook.node.appendPage).toHaveBeenCalledWith(
        child.node,
        label.node
      )

      expect(label.node.setLabel).toHaveBeenCalledWith("Tab 1")
    })
  })
})
