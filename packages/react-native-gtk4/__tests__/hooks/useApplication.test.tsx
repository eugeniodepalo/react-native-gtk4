import React from "react"
import useApplication from "@/hooks/useApplication.js"
import { setup, render } from "@/test-support/index.js"
import ApplicationProvider, {
  ApplicationContext,
} from "@/components/ApplicationProvider.js"

describe("useApplication", () => {
  let context: ApplicationContext
  let returnValue: ApplicationContext

  const Component = () => {
    returnValue = useApplication()
    return null
  }

  beforeEach(() => {
    setup()
    context = {} as ApplicationContext
  })

  test("should return the application context", () => {
    render(
      <ApplicationProvider value={context}>
        <Component />
      </ApplicationProvider>
    )

    expect(returnValue).toBe(context)
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
