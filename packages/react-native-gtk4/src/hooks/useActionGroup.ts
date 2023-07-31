import Gio from "@girs/node-gio-2.0"
import { useEffect, useMemo } from "react"

export default function useActionGroup(
  actions: Record<string, () => void>,
  deps: React.DependencyList | undefined
) {
  const group = useMemo(() => new Gio.SimpleActionGroup(), [])

  useEffect(() => {
    const names = Object.keys(actions)

    for (const name of names) {
      const action = new Gio.SimpleAction({ name })
      action.on("activate", actions[name])
      group.addAction(action)
    }

    return () => {
      for (const name of names) {
        group.remove(name)
      }
    }
  }, deps)

  return group
}
