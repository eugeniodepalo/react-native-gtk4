import { Portal } from "../src/portal.js"
import { Reconciler } from "../src/reconciler.js"

jest.mock("../src/generated/widgets/Window.js")
jest.mock("../src/components/ApplicationProvider.js")
jest.mock("../src/reconciler.js")

describe("Portal", () => {
  let portal

  const context = {}

  beforeEach(() => {
    portal = new Portal(context)
  })

  test("should add portal to instances", () => {
    expect(Portal.instances).toContain(portal)
  })

  test("should remove portal from instances", () => {
    portal.destroy()

    expect(Portal.instances).not.toContain(portal)

    expect(Reconciler.updateContainer).toHaveBeenCalledWith(
      null,
      portal.container,
      null,
      expect.any(Function)
    )
  })
})
