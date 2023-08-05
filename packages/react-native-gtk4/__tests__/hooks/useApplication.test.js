import React from "react"
import useApplication from "../../src/hooks/useApplication.js"
import { setup, render } from "../../src/test-support/index.js"
import ApplicationProvider from "../../src/components/ApplicationProvider.js"

describe("useApplication", () => {
  let application
  let context

  const Component = () => {
    application = useApplication()
  }

  beforeEach(() => {
    setup()
    context = {}
  })

  test("should return the application context", () => {
    render(
      <ApplicationProvider value={context}>
        <Component />
      </ApplicationProvider>
    )

    expect(application).toBe(context)
  })

  test("should throw when no application context is available", () => {
    expect(() =>
      render(
        <ApplicationProvider value={null}>
          <Component />
        </ApplicationProvider>
      )
    ).toThrow("useApplication must be used within an ApplicationProvider")
  })
})
