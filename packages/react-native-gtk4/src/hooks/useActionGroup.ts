import { useContext } from "react"
import { ActionGroupContext } from "../components/ActionGroupProvider.js"

export default function useActionGroup() {
  return useContext(ActionGroupContext)
}
