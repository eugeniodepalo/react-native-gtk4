import Widget from "../src/widget.js"

jest.mock("../src/index.js")

Widget.prototype.createNode = jest.fn()

describe("Widget", () => {
  it("should create a node", () => {
    const node = {}
    Widget.prototype.createNode.mockReturnValue(node)
    const widget = new Widget({})
    expect(widget.node).toEqual(node)
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
