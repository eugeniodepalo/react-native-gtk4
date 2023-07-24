import { createMockContainer } from "../../src/test-support/utils.js"
import { createReconciler } from "../../src/reconciler.js"
import Window from "../../src/generated/widgets/Window.js"

jest.mock("../../src/reconciler.js")
jest.mock("../../src/generated/widgets/Window.js")

describe("AbstractContainer", () => {
  let node

  beforeEach(() => {
    createReconciler.mockReturnValue({
      createContainer: jest.fn(),
      updateContainer: jest.fn(),
    })

    node = createMockContainer()
  })

  test("should create a reconciler container", () => {
    const Reconciler = createReconciler.mock.results[0].value

    expect(Reconciler.createContainer).toHaveBeenCalledWith(
      node,
      0,
      null,
      false,
      null,
      expect.any(String),
      expect.any(Function),
      null
    )
  })

  test("should destroy windows when removing them", () => {
    Window.mockImplementation(() =>
      Object.assign(Object.create(Window.prototype), {
        node: {
          destroy: jest.fn(),
        },
      })
    )

    const window = new Window()

    node.appendChild(window)
    node.removeChild(window)

    expect(window.node.destroy).toHaveBeenCalled()
  })

  test("should increment current tag when rendering", () => {
    const Reconciler = createReconciler.mock.results[0].value

    createMockContainer()
    const prevTag = Reconciler.createContainer.mock.calls[0][5]

    createMockContainer()
    const nextTag = Reconciler.createContainer.mock.calls[1][5]

    expect(nextTag).toBe((Number(prevTag) + 1).toString())
  })
})
