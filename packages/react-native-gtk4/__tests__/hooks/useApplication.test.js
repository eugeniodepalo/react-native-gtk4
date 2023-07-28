import { useContext } from "react"
import useApplication from "../../src/hooks/useApplication.js"
import { ApplicationContext } from "../../src/components/ApplicationProvider.js"

jest.mock("react")
jest.mock("../../src/components/ApplicationProvider.js")

describe("useApplication", () => {
  test("should return the application when available", () => {
    const application = {}

    useContext.mockReturnValue(application)

    const result = useApplication()

    expect(useContext).toHaveBeenCalledWith(ApplicationContext)
    expect(result).toBe(application)
  })

  test("should throw an error when application is not available", () => {
    useContext.mockReturnValue(null)

    expect(useApplication).toThrow(
      "useApplication must be used within an ApplicationProvider"
    )

    expect(useContext).toHaveBeenCalledWith(ApplicationContext)
  })
})
