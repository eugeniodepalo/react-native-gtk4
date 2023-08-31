import Gtk from "@girs/node-gtk-4.0"
import Application from "../src/application.js"
import Widget from "../src/generated/widgets/Widget.js"
import { getWidgetClass } from "../src/reconciler.js"
import Node from "../src/node.js"
import { createRootNode, ROOT_NODE_KEY } from "../src/root-node.js"

jest.mock("../src/application.js")
jest.mock("../src/generated/widgets/Widget.js")
jest.mock("../src/reconciler.js")
jest.mock("../src/node.js")

describe("createRootNode", () => {
  it("creates an Application root node if input node is an instance of Gtk.Application", () => {
    const mockAppInstance = new Gtk.Application()
    createRootNode(mockAppInstance)
    expect(mockAppInstance[ROOT_NODE_KEY]).toBeInstanceOf(Application)
  })

  it("creates a Widget root node if input node is an instance of Gtk.Widget", () => {
    const mockWidgetInstance = new Gtk.Widget()
    getWidgetClass.mockReturnValueOnce(Widget)
    createRootNode(mockWidgetInstance)
    expect(mockWidgetInstance[ROOT_NODE_KEY]).toBeInstanceOf(Widget)
  })

  it("creates a Node root node if input node is not an instance of Gtk.Application or Gtk.Widget", () => {
    const mockNodeInstance = {}
    createRootNode(mockNodeInstance)
    expect(mockNodeInstance[ROOT_NODE_KEY]).toBeInstanceOf(Node)
  })

  it("does not overwrite existing root node", () => {
    const existingNode = new Node()
    const mockNodeInstance = {
      [ROOT_NODE_KEY]: existingNode,
    }
    const result = createRootNode(mockNodeInstance)
    expect(result).toBe(existingNode)
  })
})
