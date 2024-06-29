import Gtk from "@/generated/girs/node-gtk-4.0.js"
import React, { createContext } from "react"

export interface ApplicationContext {
  quit(): boolean
  application: Gtk.Application
}

export const ApplicationContext = createContext<ApplicationContext | null>(null)

export default function ApplicationProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ApplicationContext | null
}) {
  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  )
}

export function withApplicationContext(
  element: React.ReactNode,
  application: ApplicationContext
) {
  return (
    <ApplicationProvider value={application}>{element}</ApplicationProvider>
  )
}
