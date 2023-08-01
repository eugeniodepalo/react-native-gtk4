import { useCallback, useRef } from "react"

export function useForwardedRef<T>(
  ref?: React.ForwardedRef<T | null>,
  callback?: (node: T | null) => void
): [React.MutableRefObject<T | null>, (node: T | null) => void] {
  const innerRef = useRef<T | null>(null)

  const setInnerRef = useCallback((node: T | null) => {
    if (callback) {
      callback(node)
    } else {
      innerRef.current = node
    }

    if (typeof ref === "function") {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }, [])

  return [innerRef, setInnerRef]
}
