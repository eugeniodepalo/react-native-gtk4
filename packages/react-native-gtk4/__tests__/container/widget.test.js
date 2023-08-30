import WidgetContainer from "../../src/containers/widget.js"
import { Widget } from "../../src/generated/widgets.js"
import AbstractNode from "../../src/node.js"

jest.mock("react")
jest.mock("../../src/generated/widgets/Widget.js")
jest.mock("../../src/reconciler.js")

describe("WidgetContainer", () => {
  let widgetContainer
  let widget

  beforeEach(() => {
    widget = new Widget()
    widgetContainer = new WidgetContainer(widget)
  })

  describe("appendChild", () => {
    test("should append child to the node", () => {
      const child = new AbstractNode()

      widgetContainer.appendChild(child)

      expect(widget.appendChild).toHaveBeenCalledWith(child)
    })
  })

  describe("removeChild", () => {
    test("should remove child from the node", () => {
      const child = new AbstractNode()

      widgetContainer.appendChild(child)
      widgetContainer.removeChild(child)

      expect(widget.removeChild).toHaveBeenCalledWith(child)
    })
  })

  describe("insertBefore", () => {
    test("should insert child before another child in the node", () => {
      const child = new AbstractNode()
      const beforeChild = new AbstractNode()

      widgetContainer.appendChild(beforeChild)
      widgetContainer.insertBefore(child, beforeChild)

      expect(widget.insertBefore).toHaveBeenCalledWith(child, beforeChild)
    })
  })
})
