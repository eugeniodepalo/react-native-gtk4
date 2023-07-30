import React from "react"
import { render, setup } from "../../src/test-support/render.js"
import Gio from "@girs/node-gio-2.0"
import ActionGroupProvider, {
  ActionGroupContext,
} from "../../src/components/ActionGroupProvider.js"

describe("ActionGroupProvider", () => {
  let actions

  beforeEach(() => {
    setup()
    actions = { test: jest.fn() }
  })

  test("should add actions to the group", () => {
    render(<ActionGroupProvider actions={actions} name="test" />)

    expect(Gio.SimpleActionGroup.mock.instances[0].addAction).toHaveBeenCalled()
    expect(Gio.SimpleAction).toHaveBeenCalledWith({ name: "test" })

    Gio.SimpleAction.prototype.on.mock.calls[0][1]()

    expect(actions.test).toHaveBeenCalled()
  })

  test("should remove actions on unmount", () => {
    render(<ActionGroupProvider actions={actions} name="test" />)
    render(null)

    expect(Gio.SimpleActionGroup.mock.instances[0].remove).toHaveBeenCalledWith(
      "test"
    )
  })

  test("should provide the correct ActionGroup context", () => {
    let contextValue

    render(
      <ActionGroupProvider actions={actions} name="test">
        <ActionGroupContext.Consumer>
          {(value) => {
            contextValue = value
          }}
        </ActionGroupContext.Consumer>
      </ActionGroupProvider>
    )

    expect(contextValue).toEqual({
      name: "test",
      group: Gio.SimpleActionGroup.mock.instances[0],
    })
  })
})
