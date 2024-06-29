import Container from "@/container.js"
import { Reconciler } from "@/reconciler.js"

jest.mock("react")
jest.mock("@/generated/widgets/Widget.js")
jest.mock("@/generated/widgets/Window.js")
jest.mock("@/reconciler.js")

const MockedReconciler = Reconciler as jest.Mocked<typeof Reconciler>

describe("Container", () => {
  let container: Container<any>
  let reconcilerContainer: any
  let rootNode: any

  beforeEach(() => {
    MockedReconciler.createContainer.mockImplementation(() => ({}))
    rootNode = {}
    container = new Container(rootNode)
    reconcilerContainer = MockedReconciler.createContainer.mock.results[0].value
  })

  describe("constructor", () => {
    test("should initialize instance", () => {
      expect((container as any).container).toBe(reconcilerContainer)

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

      container.render(element as any)

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
