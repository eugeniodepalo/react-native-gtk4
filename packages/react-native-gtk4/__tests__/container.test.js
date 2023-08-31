import Container from "../src/container.js"
import { Reconciler } from "../src/reconciler.js"

jest.mock("react")
jest.mock("../src/generated/widgets/Widget.js")
jest.mock("../src/generated/widgets/Window.js")
jest.mock("../src/reconciler.js")

describe("Container", () => {
  let container
  let reconcilerContainer
  let rootNode

  beforeEach(() => {
    Reconciler.createContainer.mockImplementation(() => ({}))
    rootNode = {}
    container = new Container(rootNode)
    reconcilerContainer = Reconciler.createContainer.mock.results[0].value
  })

  describe("constructor", () => {
    test("should initialize instance", () => {
      expect(container.container).toBe(reconcilerContainer)

      expect(Reconciler.createContainer).toHaveBeenCalledWith(
        rootNode,
        0,
        null,
        false,
        null,
        "0",
        expect.any(Function),
        null
      )
    })
  })

  describe("render", () => {
    test("should update container", () => {
      const element = {}

      container.render(element)

      expect(Reconciler.updateContainer).toHaveBeenCalledWith(
        element,
        reconcilerContainer,
        null,
        expect.any(Function)
      )
    })
  })

  describe("destroy", () => {
    test("should destroy container", () => {
      container.destroy()

      expect(Reconciler.updateContainer).toHaveBeenCalledWith(
        null,
        reconcilerContainer,
        null,
        expect.any(Function)
      )
    })
  })
})
