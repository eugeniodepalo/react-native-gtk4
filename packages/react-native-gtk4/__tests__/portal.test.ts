import { createPortal, REACT_PORTAL_TYPE } from "@/portal.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Gio from "@/generated/girs/node-gio-2.0"
import { createRootNode } from "@/rootNode.js"

const mockedCreateRootNode = createRootNode as jest.MockedFunction<
  typeof createRootNode
>

const mockedGioApplicationGetDefault = Gio.Application.getDefault as jest.Mock

jest.mock("@/rootNode.js")

describe("Portal", () => {
  let portal: any

  describe("createPortal", () => {
    const key = "key"

    let application: any
    let children: any
    let rootNode: any

    beforeEach(() => {
      mockedCreateRootNode.mockImplementation(() => ({}) as any)

      application = new Gtk.Application()
      children = []
      portal = createPortal(children, application, key)
      rootNode = mockedCreateRootNode.mock.results[0].value
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
      mockedGioApplicationGetDefault.mockImplementation(() => ({}))
      jest.clearAllMocks()

      portal = createPortal(children)

      const application = mockedGioApplicationGetDefault.mock.results[0].value

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
