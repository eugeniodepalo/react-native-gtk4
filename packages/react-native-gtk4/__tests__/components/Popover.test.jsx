import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Popover from "../../src/components/Popover.js"
import { Button, Label } from "../../src/generated/intrinsics.js"
import { mockProperty } from "../../src/test-support/utils.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Popover", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.Popover, "child")
    mockProperty(Gtk.Popover, "parent")
  })

  test("should render correctly with a child and content", () => {
    const container = render(
      <Popover open={true} content={<Label text="Popover content" />}>
        <Button label="Click me!" />
      </Popover>
    )

    const popover = container.findByType("Popover")
    const button = container.findByType("Button")
    const label = container.findByType("Label")

    expect(popover.node.child).toBe(label.node)
    expect(popover.node.parent).toBe(button.node)
  })

  test("should open and close the popover when the open prop changes", () => {
    const container = render(
      <Popover open={false} content={<Label text="Popover content" />}>
        <Button label="Click me!" />
      </Popover>
    )

    const popover = container.findByType("Popover")

    expect(popover.node.popup).not.toHaveBeenCalled()

    render(
      <Popover open={true} content={<Label text="Popover content" />}>
        <Button label="Click me!" />
      </Popover>
    )

    expect(popover.node.popup).toHaveBeenCalled()
  })

  test("should be closed by default", () => {
    const container = render(
      <Popover content={<Label text="Popover content" />}>
        <Button label="Click me!" />
      </Popover>
    )

    const popover = container.findByType("Popover")

    expect(popover.node.popup).not.toHaveBeenCalled()
    expect(popover.node.popdown).toHaveBeenCalled()
  })
})
