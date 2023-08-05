// import Gtk from "@girs/node-gtk-4.0"
// import { Reconciler } from "./reconciler.js"
// import NodeContainer from "./container/node.js"
// import ApplicationContainer from "./container/application.js"

// const PRIVATE_CONTAINER_KEY = Symbol("container")

// type RootNode<T> = T & {
//   [PRIVATE_CONTAINER_KEY]?: NodeContainer<T>
// }

// export function createContainer<
//   T,
//   U = T extends Gtk.Application ? ApplicationContainer : NodeContainer<T>,
// >(node: RootNode<T>, reconciler?: Reconciler): U {
//   let container = node[PRIVATE_CONTAINER_KEY]

//   if (!container) {
//     if (node instanceof Gtk.Application) {
//       container = new ApplicationContainer(node, reconciler)
//     } else {
//       container = new NodeContainer(node, reconciler)
//     }

//     node[PRIVATE_CONTAINER_KEY] = container
//   }

//   return container as U
// }

// export function destroyContainer<T>(node: RootNode<T>): void {
//   const container = node[PRIVATE_CONTAINER_KEY]

//   if (container) {
//     container.destroy()
//     delete node[PRIVATE_CONTAINER_KEY]
//   }
// }

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
