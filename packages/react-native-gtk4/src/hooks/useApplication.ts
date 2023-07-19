import { useContext } from "react"
import { ApplicationContext } from "../components/ApplicationProvider.js"

export default function useApplication() {
  const application = useContext(ApplicationContext)

  if (application === null) {
    throw new Error("Application is not available")
  }

  return application
}
