import Gio from "@girs/node-gio-2.0"
import React, { createContext, useEffect, useMemo } from "react"
import _ from "lodash"

interface Props {
  actions: Record<string, () => void>
  children: React.ReactNode
  name: string
}

export interface ActionGroup {
  name: string
  group: Gio.SimpleActionGroup
}

export const ActionGroupContext = createContext<ActionGroup | null>(null)

export default React.memo(function ActionGroupProvider({
  actions,
  name,
  children,
}: Props) {
  const group = useMemo(() => new Gio.SimpleActionGroup(), [])
  const value = useMemo(() => ({ name, group }), [name])

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
  }, [actions, name])

  return (
    <ActionGroupContext.Provider value={value}>
      {children}
    </ActionGroupContext.Provider>
  )
}, _.isEqual)
