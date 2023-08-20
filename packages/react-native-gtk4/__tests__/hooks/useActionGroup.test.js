import React from "react"
import Gio from "@girs/node-gio-2.0"
import useActionGroup from "../../src/hooks/useActionGroup.js"
import { setup, render } from "../../src/test-support/index.js"

describe("useActionGroup", () => {
  let actions
  let group

  const Component = () => {
    group = useActionGroup(actions)
  }

  beforeEach(() => {
    setup()
    actions = { test: jest.fn() }
  })

  test("should add actions to the group", () => {
    render(<Component />)

    expect(Gio.SimpleAction).toHaveBeenCalledWith({ name: "test" })

    const action = Gio.SimpleAction.mock.instances[0]

    expect(action.on).toHaveBeenCalledWith("activate", actions.test)
    expect(group).toBeInstanceOf(Gio.SimpleActionGroup)
    expect(group.addAction).toHaveBeenCalledWith(action)
  })
})
