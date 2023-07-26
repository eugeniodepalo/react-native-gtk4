import { useEffect, useRef } from "react"
import { Portal } from "../portal.js"
import useApplication from "./useApplication.js"

export default function usePortal(element: React.ReactNode) {
  const portalRef = useRef<Portal | null>(null)
  const context = useApplication()

  useEffect(() => {
    portalRef.current = new Portal(context)

    return () => {
      portalRef.current?.destroy()
    }
  }, [context])

  useEffect(() => {
    portalRef.current?.render(element)
  }, [element])

  return portalRef
}
