import React from "react"
import { createReconciler } from "../src/reconciler.js"
import Window from "../src/generated/widgets/Window.js"
import { Portal } from "../src/portal.js"
import { createAnyWidget } from "../src/test-support/utils.js"

jest.mock("react")
jest.mock("../src/generated/widgets/Window.js")
jest.mock("../src/components/ApplicationProvider.js")
jest.mock("../src/reconciler.js")

describe("Portal", () => {
  let portal
  let widget

  beforeEach(() => {
    createReconciler.mockReturnValue({
      createContainer: jest.fn(),
      updateContainer: jest.fn(),
    })

    portal = new Portal()
    widget = createAnyWidget()
  })

  test("should correctly append child", () => {
    portal.appendChild(widget)
    expect(portal.children.length).toBe(1)
    expect(portal.children[0]).toBe(widget)
  })

  test("should correctly remove child", () => {
    portal.appendChild(widget)
    portal.removeChild(widget)

    expect(portal.children.length).toBe(0)
  })

  test("should correctly insert child before another", () => {
    const widget2 = createAnyWidget()

    portal.appendChild(widget)
    portal.insertBefore(widget2, widget)

    expect(portal.children.length).toBe(2)
    expect(portal.children[0]).toBe(widget2)
  })

  test("should throw an error when removing non-existing child", () => {
    expect(() => portal.removeChild(widget)).toThrow("Removed child not found")
  })

  test("should throw an error when inserting before non-existing child", () => {
    const widget2 = createAnyWidget()

    expect(() => portal.insertBefore(widget, widget2)).toThrow(
      "Before child not found"
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

    portal.appendChild(window)
    portal.removeChild(window)

    expect(window.node.destroy).toHaveBeenCalled()
  })

  test("should increment current tag when creating new instances", () => {
    const Reconciler = createReconciler.mock.results[0].value

    new Portal(Reconciler)
    const prevTag = Reconciler.createContainer.mock.calls[0][5]

    new Portal(Reconciler)
    const nextTag = Reconciler.createContainer.mock.calls[1][5]

    expect(nextTag).toBe((Number(prevTag) + 1).toString())
  })

  test("should correctly render elements", () => {
    const element = React.createElement("SomeWidget")

    portal.render(element)

    expect(portal.reconciler.updateContainer).toHaveBeenCalledWith(
      element,
      portal.instance,
      null,
      expect.any(Function)
    )
  })
})
