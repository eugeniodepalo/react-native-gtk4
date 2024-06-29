import React from "react"
import Gio from "@/generated/girs/node-gio-2.0"
import useActionGroup from "@/hooks/useActionGroup.js"
import { setup, render } from "@/test-support/index.js"

const MockedGio = Gio as jest.Mocked<typeof Gio>

describe("useActionGroup", () => {
  let actions: Record<string, jest.Mock>
  let group: Gio.SimpleActionGroup

  const Component = () => {
    group = useActionGroup(actions, [])
    return null
  }

  beforeEach(() => {
    setup()
    actions = { test: jest.fn() }
  })

  test("should add actions to the group", () => {
    render(<Component />)

    expect(Gio.SimpleAction).toHaveBeenCalledWith({ name: "test" })

    const action = MockedGio.SimpleAction.mock.instances[0]

    expect(action.on).toHaveBeenCalledWith("activate", actions.test)
    expect(group).toBeInstanceOf(Gio.SimpleActionGroup)
    expect(group.addAction).toHaveBeenCalledWith(action)
  })
})
