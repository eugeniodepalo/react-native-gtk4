import React, { useEffect } from "react"
import { Portal } from "../../src/portal.js"
import usePortal from "../../src/hooks/usePortal.js"
import { useRef } from "react"

jest.mock("react")
jest.mock("../../src/portal.js")

describe("usePortal", () => {
  test("should create a portal and render the provided element", () => {
    useEffect.mockImplementation((fn) => fn())
    useRef.mockReturnValue({ current: null })

    const element = React.createElement("SomeElement")
    const ref = usePortal()

    expect(Portal).toHaveBeenCalledTimes(1)
    expect(ref.current.render).toHaveBeenCalledTimes(1)
    expect(ref.current.render).toHaveBeenCalledWith(element)

    const destroyFn = useEffect.mock.calls[0][0]()

    destroyFn()

    expect(ref.current.destroy).toHaveBeenCalledTimes(1)
  })
})
