import React from "react"
import Gio from "@girs/node-gio-2.0"
import useActionGroup from "../../src/hooks/useActionGroup.js"

jest.mock("react")

describe("useActionGroup", () => {
  let actions

  beforeEach(() => {
    actions = { test: jest.fn() }
    React.useMemo = jest.fn((fn) => fn())
  })

  test("should add actions to the group", () => {
    const actionGroup = useActionGroup(actions)

    for (const call of React.useEffect.mock.calls) {
      call[0]()
    }

    expect(actionGroup.addAction).toHaveBeenCalled()
    expect(Gio.SimpleAction).toHaveBeenCalledWith({ name: "test" })

    Gio.SimpleAction.prototype.on.mock.calls[0][1]()

    expect(actions.test).toHaveBeenCalled()
  })

  test("should remove actions on unmount", () => {
    useActionGroup(actions)

    for (const call of React.useEffect.mock.calls) {
      call[0]()()
    }

    expect(Gio.SimpleActionGroup.mock.instances[0].remove).toHaveBeenCalledWith(
      "test"
    )
  })
})
