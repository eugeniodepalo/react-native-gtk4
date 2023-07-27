import Gtk from "@girs/node-gtk-4.0"
import React from "react"
import { Container } from "../container.js"

export const PRIVATE_CONTAINER_KEY = Symbol("container")

export interface ApplicationContext {
  application: Gtk.Application
  quit(): boolean
  [PRIVATE_CONTAINER_KEY]: Container
}

export const ApplicationContext =
  React.createContext<ApplicationContext | null>(null)

export default function ApplicationProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: ApplicationContext
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
