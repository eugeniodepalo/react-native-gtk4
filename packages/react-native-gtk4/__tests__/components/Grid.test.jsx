import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Grid from "../../src/components/Grid.js"
import { Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Grid", () => {
  beforeEach(setupRenderer)

  describe("Container", () => {
    test("should render correctly", () => {
      const container = render(<Grid.Container />)
      const grid = container.findByType("Grid")
      expect(grid).toBeTruthy()
    })
  })

  describe("Item", () => {
    test("should attach to default row and column", () => {
      render(
        <Grid.Container>
          <Grid.Item>
            <Button />
          </Grid.Item>
        </Grid.Container>
      )

      expect(Gtk.Grid.prototype.attach).toHaveBeenCalledWith(
        expect.anything(),
        0,
        0,
        1,
        1
      )
    })

    test("should attach its child to the grid correctly", () => {
      const container = render(
        <Grid.Container>
          <Grid.Item col={1} row={2} width={3} height={4}>
            <Button />
          </Grid.Item>
        </Grid.Container>
      )

      const button = container.findByType("Button")

      expect(Gtk.Grid.prototype.attach).toHaveBeenCalledWith(
        button.node,
        1,
        2,
        3,
        4
      )
    })

    test("should remove its previous child before attaching a new child", () => {
      const container = render(
        <Grid.Container>
          <Grid.Item col={1} row={2} width={3} height={4}>
            <Button />
          </Grid.Item>
        </Grid.Container>
      )

      const prevButton = container.findByType("Button")

      render(
        <Grid.Container>
          <Grid.Item col={1} row={2} width={3} height={4} key="new">
            <Button label="New" />
          </Grid.Item>
        </Grid.Container>
      )

      expect(Gtk.Grid.prototype.remove).toHaveBeenCalledWith(prevButton.node)
    })
  })
})
