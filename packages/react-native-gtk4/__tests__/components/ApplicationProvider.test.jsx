import React from "react"
import { render, setup } from "../../src/test-support/index.js"
import ApplicationProvider, {
  ApplicationContext,
  withApplicationContext,
} from "../../src/components/ApplicationProvider.js"

function Component() {
  React.useContext(ApplicationContext)
  return null
}

describe("ApplicationProvider", () => {
  let context

  beforeEach(() => {
    setup()
    context = {}
    jest.spyOn(React, "useContext")
  })

  test("should provide the correct context", () => {
    render(
      <ApplicationProvider value={context}>
        <Component />
      </ApplicationProvider>
    )

    expect(React.useContext).toHaveBeenCalledWith(ApplicationContext)
    expect(React.useContext).toHaveReturnedWith(context)
  })

  describe("withApplicationContext", () => {
    test("should provide the correct context", () => {
      render(withApplicationContext(<Component />, context))

      expect(React.useContext).toHaveBeenCalledWith(ApplicationContext)
      expect(React.useContext).toHaveReturnedWith(context)
    })
  })
})
