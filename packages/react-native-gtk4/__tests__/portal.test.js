import { createPortal, REACT_PORTAL_TYPE } from "../src/portal.js"
import Gtk from "@girs/node-gtk-4.0"
import { createContainer } from "../src/container.js"
import Gio from "@girs/node-gio-2.0"

jest.mock("../src/container.js")

describe("Portal", () => {
  let portal

  describe("createPortal", () => {
    const key = "key"
    let rootNode
    let children
    let container

    beforeEach(() => {
      createContainer.mockImplementation(() => ({}))

      rootNode = new Gtk.Application()
      children = []
      portal = createPortal(children, rootNode, key)
      container = createContainer.mock.results[0].value
    })

    test("should create a portal with a container", () => {
      expect(portal).toMatchObject({
        $$typeof: REACT_PORTAL_TYPE,
        key,
        children,
        containerInfo: container,
        implementation: null,
      })

      expect(createContainer).toHaveBeenCalledWith(rootNode)
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
        containerInfo: container,
        implementation: null,
      })

      expect(createContainer).toHaveBeenCalledWith(rootNode)
    })

    test("should use default application", () => {
      Gio.Application.getDefault.mockImplementation(() => ({}))
      jest.clearAllMocks()

      portal = createPortal(children)

      const rootNode = Gio.Application.getDefault.mock.results[0].value
      const container = createContainer.mock.results[0].value

      expect(portal).toMatchObject({
        $$typeof: REACT_PORTAL_TYPE,
        key: null,
        children,
        containerInfo: container,
        implementation: null,
      })

      expect(createContainer).toHaveBeenCalledWith(rootNode)
    })
  })
})
