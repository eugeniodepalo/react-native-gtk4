import React from "react"
import { createReconciler } from "../src/reconciler.js"
import Container from "../src/container.js"
import { AnyWidget as AnyWidgetClass } from "../src/generated/widgets.js"

jest.mock("../src/generated/widgets.js", () => ({
  __esModule: true,
  Label: jest.requireMock("../src/generated/widgets/Label.js").default,
  AnyWidget: jest.requireMock("../src/widget.js").default,
}))

jest.mock("../src/generated/widgets/Label.js")
jest.mock("../src/container.js")
jest.mock("../src/widget.js")

const AnyWidget = "AnyWidget"

describe("Reconciler", () => {
  let reconciler
  let container
  let instance

  const render = (element) => {
    reconciler.updateContainer(element, instance, null, () => {})
    jest.runAllTimers()
  }

  beforeEach(() => {
    jest.useFakeTimers()
    jest.spyOn(global, "queueMicrotask")

    reconciler = createReconciler()

    Container.mockImplementation(() =>
      Object.assign(Object.create(Container.prototype), {
        children: [],
      })
    )

    container = new Container()

    instance = reconciler.createContainer(
      container,
      0,
      null,
      false,
      null,
      "tag",
      () => {},
      null
    )
  })

  test("should correctly append child", () => {
    render(<AnyWidget />)

    expect(container.appendChild).toHaveBeenCalledWith(
      expect.any(AnyWidgetClass)
    )
  })
})
