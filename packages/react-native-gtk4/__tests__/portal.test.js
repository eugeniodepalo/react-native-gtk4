import { createPortal, REACT_PORTAL_TYPE } from "../src/portal.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import { createRootNode } from "../src/rootNode.js"

jest.mock("../src/rootNode.js")

describe("Portal", () => {
  let portal

  describe("createPortal", () => {
    const key = "key"

    let application
    let children
    let rootNode

    beforeEach(() => {
      createRootNode.mockImplementation(() => ({}))

      application = new Gtk.Application()
      children = []
      portal = createPortal(children, application, key)
      rootNode = createRootNode.mock.results[0].value
    })

    test("should create a portal with a container", () => {
      expect(portal).toMatchObject({
        $$typeof: REACT_PORTAL_TYPE,
        key,
        children,
        containerInfo: rootNode,
        implementation: null,
      })

      expect(createRootNode).toHaveBeenCalledWith(application)
    })

    test("should throw an error when root node is null", () => {
      expect(() => createPortal(children, null, key)).toThrow(
        "Cannot create a portal without a root node"
      )
    })

    test("should use default key", () => {
      portal = createPortal(children, rootNode)

      expect(portal).toMatchObject({
        $$typeof: REACT_PORTAL_TYPE,
        key: null,
        children,
        containerInfo: rootNode,
        implementation: null,
      })

      expect(createRootNode).toHaveBeenCalledWith(application)
    })

    test("should use default application", () => {
      Gio.Application.getDefault.mockImplementation(() => ({}))
      jest.clearAllMocks()

      portal = createPortal(children)

      const application = Gio.Application.getDefault.mock.results[0].value

      expect(portal).toMatchObject({
        $$typeof: REACT_PORTAL_TYPE,
        key: null,
        children,
        containerInfo: rootNode,
        implementation: null,
      })

      expect(createRootNode).toHaveBeenCalledWith(application)
    })
  })
})
