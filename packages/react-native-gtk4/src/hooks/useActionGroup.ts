import Gio from "@girs/node-gio-2.0"
import { useMemo } from "react"

export default function useActionGroup(
  actions: Record<string, () => void>,
  deps: React.DependencyList
) {
  return useMemo(() => {
    const group = new Gio.SimpleActionGroup()
    const names = Object.keys(actions)

    for (const name of names) {
      const action = new Gio.SimpleAction({ name })
      action.on("activate", actions[name])
      group.addAction(action)
    }

    return group
  }, deps)
}
