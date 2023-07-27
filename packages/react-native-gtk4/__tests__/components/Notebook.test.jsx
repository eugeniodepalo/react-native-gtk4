import React from "react"
import { render, setup, findBy } from "../../src/test-support/render.js"
import Notebook from "../../src/components/Notebook.js"
import { Button } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Notebook", () => {
  beforeEach(() => {
    setup()
  })

  test("should append pages when tabs are added", () => {
    render(
      <Notebook.Container>
        <Notebook.Tab label="Tab 1">
          <Button label="Click me" />
        </Notebook.Tab>
        <Notebook.Tab label="Tab 2">
          <Button label="No, click me!" />
        </Notebook.Tab>
      </Notebook.Container>
    )

    const notebook = findBy({ type: "Notebook" })
    const tabLabel1 = findBy({ text: "Tab 1" })
    const button1 = findBy({ props: { label: "Click me" } })
    const tabLabel2 = findBy({ text: "Tab 2" })
    const button2 = findBy({ props: { label: "No, click me!" } })

    expect(notebook.node.appendPage).toHaveBeenCalledWith(
      button1.node,
      tabLabel1.node
    )

    expect(notebook.node.appendPage).toHaveBeenCalledWith(
      button2.node,
      tabLabel2.node
    )
  })

  test("should remove pages when tabs are removed", () => {
    Gtk.Notebook.prototype.pageNum.mockReturnValue(0)

    render(
      <Notebook.Container>
        <Notebook.Tab label="Tab 1">
          <Button label="Click me" />
        </Notebook.Tab>
        <Notebook.Tab label="Tab 2">
          <Button label="No, click me!" />
        </Notebook.Tab>
      </Notebook.Container>
    )

    const notebook = findBy({ type: "Notebook" })
    const label = findBy({ text: "Tab 2" })

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

  test("should allow custom page labels", () => {
    render(
      <Notebook.Container>
        <Notebook.Tab label={<Button label="Tab 1" />}>
          <Button label="Click me" />
        </Notebook.Tab>
        <Notebook.Tab label={<Button label="Tab 2" />}>
          <Button label="No, click me!" />
        </Notebook.Tab>
      </Notebook.Container>
    )

    const notebook = findBy({ type: "Notebook" })
    const tabLabel1 = findBy({ props: { label: "Tab 1" } })
    const tabLabel2 = findBy({ props: { label: "Tab 2" } })
    const button1 = findBy({ props: { label: "Click me" } })
    const button2 = findBy({ props: { label: "No, click me!" } })

    expect(notebook.node.appendPage).toHaveBeenCalledWith(
      button1.node,
      tabLabel1.node
    )

    expect(notebook.node.appendPage).toHaveBeenCalledWith(
      button2.node,
      tabLabel2.node
    )
  })
})
