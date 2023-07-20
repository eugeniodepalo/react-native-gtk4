import Gtk from "@girs/node-gtk-4.0"
import React from "react"

export interface Application {
  application: Gtk.Application
  quit(): boolean
}

export const ApplicationContext = React.createContext<Application | null>(null)

export default function ApplicationProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: Application
}) {
  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  )
}

export function withApplicationContext(
  element: React.ReactNode,
  application: Application
) {
  return (
    <ApplicationProvider value={application}>{element}</ApplicationProvider>
  )
}
