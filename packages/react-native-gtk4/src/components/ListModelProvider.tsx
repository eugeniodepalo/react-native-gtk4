import React, { createContext, useMemo, useState } from "react"
import Gio from "@/generated/girs/node-gio-2.0"

export interface ListModelContext {
  items: Record<string, unknown>
  setItems: React.Dispatch<React.SetStateAction<Record<string, unknown>>>
  model: Gio.ListModel
}

export const ListModelContext = createContext<ListModelContext | null>(null)

interface ContainerProps {
  children: React.ReactNode
  model: Gio.ListModel
}

export default function ListModelProvider({ children, model }: ContainerProps) {
  const [items, setItems] = useState<Record<string, unknown>>({})

  const value = useMemo(
    () => ({
      items,
      setItems,
      model,
    }),
    [items, setItems, model]
  )

  return (
    <ListModelContext.Provider value={value}>
      {children}
    </ListModelContext.Provider>
  )
}
