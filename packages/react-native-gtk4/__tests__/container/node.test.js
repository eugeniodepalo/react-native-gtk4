import Gtk from "@girs/node-gtk-4.0"
import NodeContainer from "../../src/containers/node.js"
import { Reconciler } from "../../src/reconciler.js"
import { Widget, Window } from "../../src/generated/widgets.js"

jest.mock("react")
jest.mock("../../src/generated/widgets/Widget.js")
jest.mock("../../src/generated/widgets/Window.js")
jest.mock("../../src/reconciler.js")

describe("NodeContainer", () => {
  let nodeContainer
  let container

  beforeEach(() => {
    Reconciler.createContainer.mockImplementation(() => ({}))
    nodeContainer = new NodeContainer()
    container = Reconciler.createContainer.mock.results[0].value
  })

  describe("constructor", () => {
    test("should initialize instance", () => {
      expect(nodeContainer.container).toBe(container)

      expect(Reconciler.createContainer).toHaveBeenCalledWith(
        nodeContainer,
        0,
        null,
        false,
        null,
        "0",
        expect.any(Function),
        null
      )
    })
  })

  describe("render", () => {
    test("should update container", () => {
      const element = {}

      nodeContainer.render(element)

      expect(Reconciler.updateContainer).toHaveBeenCalledWith(
        element,
        container,
        null,
        expect.any(Function)
      )
    })
  })

  describe("destroy", () => {
    test("should destroy container", () => {
      nodeContainer.destroy()

      expect(Reconciler.updateContainer).toHaveBeenCalledWith(
        null,
        container,
        null,
        expect.any(Function)
      )
    })
  })

  describe("removeChild", () => {
    test("should unparent widgets", () => {
      const child = new Widget()

      child.node = new Gtk.Widget()

      nodeContainer.appendChild(child)

      nodeContainer.removeChild(child)

      expect(child.node.unparent).toHaveBeenCalled()
    })

    test("should destroy windows", () => {
      const child = new Window({})

      child.node = new Gtk.Window()

      nodeContainer.appendChild(child)

      nodeContainer.removeChild(child)

      expect(child.node.destroy).toHaveBeenCalled()
    })
  })
})
