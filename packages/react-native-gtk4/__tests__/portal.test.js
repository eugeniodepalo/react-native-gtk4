import { Portal } from "../src/portal.js"

jest.mock("../src/generated/widgets/Window.js")
jest.mock("../src/components/ApplicationProvider.js")
jest.mock("../src/reconciler.js")

describe("Portal", () => {
  let portal

  const reconciler = {
    createContainer: jest.fn(),
    updateContainer: jest.fn(),
  }

  beforeEach(() => {
    portal = new Portal(reconciler)
  })

  test("should add portal to instances", () => {
    expect(Portal.instances).toContain(portal)
  })

  test("should remove portal from instances", () => {
    portal.destroy()

    expect(Portal.instances).not.toContain(portal)

    expect(reconciler.updateContainer).toHaveBeenCalledWith(
      null,
      portal.container,
      null,
      expect.any(Function)
    )
  })
})
