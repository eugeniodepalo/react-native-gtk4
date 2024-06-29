import Gtk from "@/generated/girs/node-gtk-4.0"
import AbstractWidget from "@/widget.js"

class Widget extends AbstractWidget {
  constructor() {
    super({}, new Gtk.Widget())
  }

  set(propName: string, newValue: any): void {
    throw new Error("Method not implemented.")
  }

  commitMount(): void {
    throw new Error("Method not implemented.")
  }
}

describe("AbstractWidget", () => {
  let widget: Widget
  let node: any
  let props: Record<string, any>

  beforeEach(() => {
    node = {
      on: jest.fn(),
      off: jest.fn(),
    }

    props = {
      foo: "bar",
      fizz: "buzz",
    }

    const Widget = class extends AbstractWidget {
      set() {}
      commitMount() {}
      static createNode() {
        return node
      }
    }

    jest.spyOn(Widget.prototype, "set")

    widget = new Widget(props, Widget.createNode())
  })

  describe("constructor", () => {
    test("should initialize instance", () => {
      expect(widget.props).toEqual(props)
      expect(widget.node).toBe(node)

      for (const key in props) {
        expect(widget.set).toHaveBeenCalledWith(key, props[key])
      }
    })
  })

  describe("setHandler", () => {
    test("should connect callback to signal", () => {
      const callback = jest.fn()

      widget.setHandler("event", callback)

      expect(node.on).toHaveBeenCalledWith("event", expect.any(Function))

      const [, handler] = node.on.mock.calls[0]

      handler()

      expect(callback).toHaveBeenCalled()
    })

    test("should disconnect callback from signal", () => {
      const callback = jest.fn()

      widget.setHandler("event", callback)

      widget.setHandler("event", null)

      const [, handler] = node.on.mock.calls[0]

      expect(node.off).toHaveBeenCalledWith("event", handler)
    })

    test("should replace existing callback", () => {
      const callback1 = jest.fn()
      const callback2 = jest.fn()

      widget.setHandler("event", callback1)

      widget.setHandler("event", callback2)

      const [, handler1] = node.on.mock.calls[0]
      const [, handler2] = node.on.mock.calls[1]

      expect(node.on).toHaveBeenNthCalledWith(1, "event", handler1)
      expect(node.off).toHaveBeenCalledWith("event", handler1)
      expect(node.on).toHaveBeenNthCalledWith(2, "event", handler2)
    })
  })

  describe("getClosestParentOfType", () => {
    test("should return null if no parent of specified type", () => {
      expect(widget.getClosestParentOfType(Widget)).toBe(null)
    })

    test("should return first parent of specified type", () => {
      const SomeWidget = class {}
      const OtherWidget = class {}
      const parent1 = { node: new SomeWidget() } as any
      const parent2 = { node: new OtherWidget() } as any

      widget.parent = parent1
      widget.parent!.parent = parent2

      expect(widget.getClosestParentOfType(OtherWidget)).toBe(parent2.node)
    })
  })
})
