import {
  createContainer,
  destroyContainer,
  PRIVATE_CONTAINER_KEY,
} from "../src/container.js"
import NodeContainer from "../src/container/node.js"
import ApplicationContainer from "../src/container/application.js"
import Gtk from "@girs/node-gtk-4.0"

jest.mock("../src/reconciler.js")
jest.mock("../src/container/node.js")
jest.mock("../src/container/application.js")

describe("Container", () => {
  describe("createContainer", () => {
    test("should create a node container", () => {
      const node = {}
      const reconciler = {}

      const container = createContainer(node, reconciler)

      expect(NodeContainer).toHaveBeenCalledWith(node, reconciler)
      expect(container).toEqual(NodeContainer.mock.instances[0])
      expect(node[PRIVATE_CONTAINER_KEY]).toBe(container)
    })

    test("should create an application container", () => {
      const node = new Gtk.Application()
      const reconciler = {}

      const container = createContainer(node, reconciler)

      expect(ApplicationContainer).toHaveBeenCalledWith(node, reconciler)
      expect(container).toEqual(ApplicationContainer.mock.instances[0])
      expect(node[PRIVATE_CONTAINER_KEY]).toBe(container)
    })
  })

  describe("destroyContainer", () => {
    test("should destroy container", () => {
      const destroy = jest.fn()

      const node = {
        [PRIVATE_CONTAINER_KEY]: {
          destroy,
        },
      }

      destroyContainer(node)

      expect(destroy).toHaveBeenCalled()
      expect(node[PRIVATE_CONTAINER_KEY]).toBeUndefined()
    })
  })
})
