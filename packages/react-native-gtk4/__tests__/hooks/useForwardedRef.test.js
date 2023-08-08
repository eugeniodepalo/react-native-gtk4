import useForwardedRef from "../../src/hooks/useForwardedRef.js"
import { useCallback, useRef } from "react"

jest.mock("react")

describe("useForwardedRef", () => {
  const value = "node"

  beforeEach(() => {
    useRef.mockImplementation(() => ({ current: null }))
    useCallback.mockImplementation((callback) => callback)
  })

  it("should set the inner ref", () => {
    const ref = { current: null }

    const [innerRef, setInnerRef] = useForwardedRef(ref)

    setInnerRef(value)

    expect(innerRef.current).toBe(value)
  })

  it("should call the provided callback", () => {
    const callback = jest.fn()
    const ref = { current: null }

    const [innerRef, setInnerRef] = useForwardedRef(ref, callback)

    setInnerRef(value)

    expect(innerRef.current).toBe(null)
    expect(callback).toHaveBeenCalledWith(value)
  })

  it("should call the provided ref function", () => {
    const ref = jest.fn()

    const [, setInnerRef] = useForwardedRef(ref)

    setInnerRef(value)

    expect(ref).toHaveBeenCalledWith(value)
  })

  it("should update the provided ref object", () => {
    const ref = { current: null }

    const [, setInnerRef] = useForwardedRef(ref)

    setInnerRef(value)

    expect(ref.current).toBe(value)
  })
})
