import { Gtk } from "../index.js"
import React from "react"

export const ApplicationContext = React.createContext<Gtk.Application | null>(
  null
)

export default function ApplicationProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: Gtk.Application
}) {
  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  )
}

export function withApplicationContext(
  element: React.ReactNode,
  application: Gtk.Application
) {
  return (
    <ApplicationProvider value={application}>{element}</ApplicationProvider>
  )
}
