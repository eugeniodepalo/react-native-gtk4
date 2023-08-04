import { createContainerForRootNode } from "../src/container.js"
import { createPortal, REACT_PORTAL_TYPE } from "../src/portal.js"
import Gtk from "@girs/node-gtk-4.0"

describe("createPortal", () => {
  const key = "key"
  let portal
  let container

  beforeEach(() => {
    container = new Gtk.Application()
    portal = createPortal(null, container, key)
  })

  test("should create a portal with a container", () => {
    expect(portal).toMatchObject({
      $$typeof: REACT_PORTAL_TYPE,
      key,
      children: null,
      containerInfo: createContainerForRootNode(container),
      implementation: null,
    })
  })
})
