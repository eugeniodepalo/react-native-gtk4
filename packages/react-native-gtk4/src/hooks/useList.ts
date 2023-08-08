import { useContext } from "react"
import { ListContext } from "../components/ListProvider.js"

export default function useList<T>() {
  const list = useContext(ListContext) as ListContext<T>

  if (list === null) {
    throw new Error("useList must be used within a ListProvider.Container")
  }

  return list
}
