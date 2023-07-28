import { useContext } from "react"
import { ApplicationContext } from "../components/ApplicationProvider.js"

export default function useApplication() {
  const application = useContext(ApplicationContext)

  if (application === null) {
    throw new Error("useApplication must be used within an ApplicationProvider")
  }

  return application
}
