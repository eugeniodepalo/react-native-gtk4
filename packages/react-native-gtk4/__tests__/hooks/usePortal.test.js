import React, { useEffect, useRef } from "react"
import { Portal } from "../../src/portal.js"
import usePortal from "../../src/hooks/usePortal.js"

jest.mock("react")
jest.mock("../../src/portal.js")

describe("usePortal", () => {
  it("creates a portal and renders the provided element", () => {
    const ref = { current: null }

    useRef.mockReturnValue(ref)

    const element = React.createElement("SomeElement")

    usePortal()

    const destroyFn = useEffect.mock.calls[0][0]()

    expect(Portal).toHaveBeenCalledTimes(1)
    expect(ref.current.render).toHaveBeenCalledTimes(1)
    expect(ref.current.render).toHaveBeenCalledWith(element)

    destroyFn()

    expect(ref.current.destroy).toHaveBeenCalledTimes(1)
  })
})
