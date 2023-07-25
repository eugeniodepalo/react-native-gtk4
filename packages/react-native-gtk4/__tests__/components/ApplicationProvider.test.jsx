import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import ApplicationProvider, {
  ApplicationContext,
  withApplicationContext,
} from "../../src/components/ApplicationProvider.js"

describe("ApplicationProvider", () => {
  beforeEach(setupRenderer)

  test("should provide the correct context", () => {
    const testApplication = { application: {}, quit: jest.fn() }

    const TestComponent = () => {
      const context = React.useContext(ApplicationContext)
      expect(context).toEqual(testApplication)
      return null
    }

    render(
      <ApplicationProvider value={testApplication}>
        <TestComponent />
      </ApplicationProvider>
    )
  })

  describe("withApplicationContext", () => {
    test("should provide the correct context", () => {
      const testApplication = { application: {}, quit: jest.fn() }

      const TestComponent = () => {
        const context = React.useContext(ApplicationContext)
        expect(context).toEqual(testApplication)
        return null
      }

      render(withApplicationContext(<TestComponent />, testApplication))
    })
  })
})
