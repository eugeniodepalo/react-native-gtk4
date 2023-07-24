import { useContext } from "react"
import useApplication from "../../src/hooks/useApplication.js"
import { ApplicationContext } from "../../src/components/ApplicationProvider.js"

jest.mock("react")
jest.mock("../../src/components/ApplicationProvider.js")

describe("useApplication", () => {
  it("returns the application when available", () => {
    const application = {}

    useContext.mockReturnValue(application)

    const result = useApplication()

    expect(useContext).toHaveBeenCalledWith(ApplicationContext)
    expect(result).toBe(application)
  })

  it("throws an error when application is not available", () => {
    useContext.mockReturnValue(null)

    expect(useApplication).toThrow("Application is not available")
    expect(useContext).toHaveBeenCalledWith(ApplicationContext)
  })
})
