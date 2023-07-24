import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import Notebook from "../../src/components/Notebook.js"
import { Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Notebook", () => {
  beforeEach(() => {
    setupRenderer()
  })

  test("appends pages when tabs are added", () => {
    const container = render(
      <Notebook.Container>
        <Notebook.Tab label="Tab 1">
          <Button label="Click me" />
        </Notebook.Tab>
        <Notebook.Tab label="Tab 2">
          <Button label="No, click me!" />
        </Notebook.Tab>
      </Notebook.Container>
    )

    const notebook = container.findByType("Notebook")
    const tabLabel1 = container.findByText("Tab 1")
    const button1 = container.findByProps({ label: "Click me" })
    const tabLabel2 = container.findByText("Tab 2")
    const button2 = container.findByProps({ label: "No, click me!" })

    expect(notebook.node.appendPage).toHaveBeenCalledWith(
      button1.node,
      tabLabel1.node
    )

    expect(notebook.node.appendPage).toHaveBeenCalledWith(
      button2.node,
      tabLabel2.node
    )
  })

  test("removes pages when tabs are removed", () => {
    Gtk.Notebook.prototype.pageNum.mockReturnValue(0)

    const container = render(
      <Notebook.Container>
        <Notebook.Tab label="Tab 1">
          <Button label="Click me" />
        </Notebook.Tab>
        <Notebook.Tab label="Tab 2">
          <Button label="No, click me!" />
        </Notebook.Tab>
      </Notebook.Container>
    )

    const notebook = container.findByType("Notebook")
    const label = container.findByText("Tab 2")

    render(
      <Notebook.Container>
        <Notebook.Tab label="Tab 1">
          <Button label="Click me" />
        </Notebook.Tab>
      </Notebook.Container>
    )

    expect(notebook.node.pageNum).toHaveBeenCalledWith(label.node)
    expect(notebook.node.removePage).toHaveBeenCalledWith(0)
  })
})
