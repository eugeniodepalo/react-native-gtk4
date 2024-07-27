import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import Grid from "@/components/Grid.js"
import { Box } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("Grid", () => {
  beforeEach(setup)

  describe("Container", () => {
    test("should render", () => {
      render(
        <Grid.Container>
          <Box />
        </Grid.Container>
      )

      const grid = findBy({ type: "Grid" })
      const child = findBy({ type: "Box" })

      expect(grid.node).toBeInstanceOf(Gtk.Grid)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.Grid>()
      const childRef = createRef<Gtk.Box>()

      render(
        <Grid.Container ref={ref}>
          <Box ref={childRef} />
        </Grid.Container>
      )

      const grid = findBy({ type: "Grid" })
      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(grid.node)
      expect(childRef.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Grid.Container>
          <Box />
        </Grid.Container>
      )

      render(null)

      const grid = findBy({ type: "Grid" })
      const child = findBy({ type: "Box" })

      expect(grid).toBeNull()
      expect(child).toBeNull()
    })
  })

  describe("Item", () => {
    test("should render", () => {
      render(
        <Grid.Container>
          <Grid.Item>
            <Box />
          </Grid.Item>
        </Grid.Container>
      )

      const grid = findBy({ type: "Grid" })
      const child = findBy({ type: "Box" })

      expect(grid.node).toBeInstanceOf(Gtk.Grid)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef<Gtk.Box>()

      render(
        <Grid.Container>
          <Grid.Item>
            <Box ref={ref} />
          </Grid.Item>
        </Grid.Container>
      )

      const child = findBy({ type: "Box" })

      expect(ref.current).toBe(child.node)
    })

    test("should handle unmount gracefully", () => {
      render(
        <Grid.Container>
          <Grid.Item>
            <Box />
          </Grid.Item>
        </Grid.Container>
      )

      render(null)

      const grid = findBy({ type: "Grid" })
      const child = findBy({ type: "Box" })

      expect(grid).toBeNull()
      expect(child).toBeNull()
    })

    test("should remove itself when unmounted", () => {
      render(
        <Grid.Container>
          <Grid.Item>
            <Box />
          </Grid.Item>
        </Grid.Container>
      )

      const grid = findBy<Gtk.Grid>({ type: "Grid" })

      render(null)

      expect(grid.node.remove).toHaveBeenCalled()
    })

    test("should throw when not inside Grid.Container", () => {
      expect(() => {
        render(
          <Grid.Item>
            <Box />
          </Grid.Item>
        )
      }).toThrow("Grid.Item must be a child of Grid.Container")
    })

    test("should attach to default position", () => {
      render(
        <Grid.Container>
          <Grid.Item>
            <Box />
          </Grid.Item>
        </Grid.Container>
      )

      const grid = findBy<Gtk.Grid>({ type: "Grid" })
      const child = findBy({ type: "Box" })

      expect(grid.node.attach).toHaveBeenCalledWith(child.node, 0, 0, 1, 1)
    })

    test("should attach to specified position", () => {
      render(
        <Grid.Container>
          <Grid.Item col={1} row={2} width={3} height={4}>
            <Box />
          </Grid.Item>
        </Grid.Container>
      )

      const grid = findBy<Gtk.Grid>({ type: "Grid" })
      const child = findBy({ type: "Box" })

      expect(grid.node.attach).toHaveBeenCalledWith(child.node, 1, 2, 3, 4)
    })
  })
})
