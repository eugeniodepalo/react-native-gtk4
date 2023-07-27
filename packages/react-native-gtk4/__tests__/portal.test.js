import { PRIVATE_CONTAINER_KEY } from "../src/components/ApplicationProvider.js"
import { Container } from "../src/container.js"
import { createPortal, REACT_PORTAL_TYPE } from "../src/portal.js"
import useApplication from "../src/hooks/useApplication.js"
import Gtk from "@girs/node-gtk-4.0"

jest.mock("../src/container.js")
jest.mock("../src/hooks/useApplication.js")

describe("Portal", () => {
  let portal
  let key = "key"
  let container = new Container(new Gtk.Application())

  beforeEach(() => {
    useApplication.mockReturnValue({
      [PRIVATE_CONTAINER_KEY]: container,
    })

    portal = createPortal(null, key)
  })

  test("should create a portal with a container", () => {
    expect(portal).toMatchObject({
      $$typeof: REACT_PORTAL_TYPE,
      key,
      children: null,
      containerInfo: container,
      implementation: null,
    })
  })
})
