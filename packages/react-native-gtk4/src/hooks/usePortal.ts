import { useEffect, useRef } from "react"
import { Portal } from "../portal.js"

export default function usePortal(element: React.ReactNode) {
  const portalRef = useRef<Portal | null>(null)

  useEffect(() => {
    if (!portalRef.current) {
      portalRef.current = new Portal()
    }

    portalRef.current.render(element)

    return () => {
      portalRef.current?.destroy()
    }
  }, [element])

  return portalRef.current
}
