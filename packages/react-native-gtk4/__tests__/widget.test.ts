import { Gtk } from "../src/index.js"
import AbstractWidget from "../src/widget.js"

class Widget extends AbstractWidget {
  constructor(props: Record<string, any>) {
    super(props)
  }

  createNode() {
    return new Gtk.Box()
  }
}

describe("Widget", () => {
  it("should create a node", () => {
    const widget = new Widget({})
    expect(widget.node).toBeDefined()
  })

  it("should set props", () => {
    const widget = new Widget({ label: "Hello" })
    expect(widget.props.label).toBe("Hello")
  })

  it("should append a child", () => {
    const parent = new Widget({})
    const child = new Widget({})
    parent.appendChild(child)
    expect(parent.children).toContain(child)
  })

  it("should remove a child", () => {
    const parent = new Widget({})
    const child = new Widget({})
    parent.appendChild(child)
    parent.removeChild(child)
    expect(parent.children).not.toContain(child)
  })
})
