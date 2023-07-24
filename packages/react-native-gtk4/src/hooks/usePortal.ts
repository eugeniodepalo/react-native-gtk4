import { useEffect, useRef } from "react"
import { Portal } from "../portal.js"

export default function usePortal(element: React.ReactNode) {
  const portalRef = useRef<Portal | null>(null)

  useEffect(() => {
    portalRef.current = new Portal()

    return () => {
      portalRef.current?.destroy()
    }
  }, [])

  useEffect(() => {
    portalRef.current?.render(element)
  }, [element])

  return portalRef
}
