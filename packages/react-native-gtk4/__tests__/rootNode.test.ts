import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Application from "@/application.js"
import Widget from "@/generated/widgets/Widget.js"
import { getWidgetClass } from "@/reconciler.js"
import Node from "@/node.js"
import { createRootNode, ROOT_NODE_KEY, WithRootNode } from "@/rootNode.js"

const mockedGetWidgetClass = getWidgetClass as jest.MockedFunction<
  typeof getWidgetClass
>

jest.mock("@/application.js")
jest.mock("@/generated/widgets/Widget.js")
jest.mock("@/reconciler.js")
jest.mock("@/node.js")

describe("createRootNode", () => {
  it("creates an Application root node if input node is an instance of Gtk.Application", () => {
    const mockAppInstance =
      new Gtk.Application() as WithRootNode<Gtk.Application>

    createRootNode(mockAppInstance)

    expect(mockAppInstance[ROOT_NODE_KEY]).toBeInstanceOf(Application)
  })

  it("creates a Widget root node if input node is an instance of Gtk.Widget", () => {
    const mockWidgetInstance = new Gtk.Widget() as WithRootNode<Gtk.Widget>

    mockedGetWidgetClass.mockReturnValueOnce(Widget)

    createRootNode(mockWidgetInstance)

    expect(mockWidgetInstance[ROOT_NODE_KEY]).toBeInstanceOf(Widget)
  })

  it("creates a Node root node if input node is not an instance of Gtk.Application or Gtk.Widget", () => {
    const mockNodeInstance = {} as WithRootNode<unknown>

    createRootNode(mockNodeInstance)

    expect(mockNodeInstance[ROOT_NODE_KEY]).toBeInstanceOf(Node)
  })

  it("does not overwrite existing root node", () => {
    const existingNode = new Node({})
    const mockNodeInstance = { [ROOT_NODE_KEY]: existingNode }

    const result = createRootNode(mockNodeInstance)

    expect(result).toBe(existingNode)
  })
})
