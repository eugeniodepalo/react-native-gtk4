import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import ActionBar from "../../src/components/ActionBar.js"
import { Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ActionBar", () => {
  beforeEach(setupRenderer)

  describe("Container", () => {
    test("should render correctly", () => {
      const container = render(<ActionBar.Container />)
      const actionBar = container.findByType("ActionBar")
      expect(actionBar).toBeTruthy()
    })
  })

  describe("Section", () => {
    test("should pack its child to the start by default", () => {
      render(
        <ActionBar.Container>
          <ActionBar.Section>
            <Button />
          </ActionBar.Section>
        </ActionBar.Container>
      )

      expect(Gtk.ActionBar.prototype.packStart).toHaveBeenCalledWith(
        expect.anything()
      )
    })

    test("should pack its child to the correct alignment", () => {
      const container = render(
        <ActionBar.Container>
          <ActionBar.Section align="end">
            <Button />
          </ActionBar.Section>
        </ActionBar.Container>
      )

      const button = container.findByType("Button")

      expect(Gtk.ActionBar.prototype.packEnd).toHaveBeenCalledWith(button.node)
    })

    test("should set its child as the center widget correctly", () => {
      const container = render(
        <ActionBar.Container>
          <ActionBar.Section align="center">
            <Button />
          </ActionBar.Section>
        </ActionBar.Container>
      )

      const button = container.findByType("Button")

      expect(Gtk.ActionBar.prototype.setCenterWidget).toHaveBeenCalledWith(
        button.node
      )
    })

    test("should remove its previous child before adding a new child", () => {
      const container = render(
        <ActionBar.Container>
          <ActionBar.Section align="start">
            <Button />
          </ActionBar.Section>
        </ActionBar.Container>
      )

      const prevButton = container.findByType("Button")

      render(
        <ActionBar.Container>
          <ActionBar.Section align="start" key="new">
            <Button label="New" />
          </ActionBar.Section>
        </ActionBar.Container>
      )

      expect(Gtk.ActionBar.prototype.remove).toHaveBeenCalledWith(
        prevButton.node
      )
    })
  })
})
