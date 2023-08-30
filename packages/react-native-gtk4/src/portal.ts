import { ReactPortal } from "react"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import { createContainer } from "./container"

export const REACT_PORTAL_TYPE = Symbol.for("react.portal")

function createPortalImpl(
  children: React.ReactNode,
  containerInfo: any,
  implementation: any,
  key = null
): ReactPortal {
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : "" + key,
    children,
    containerInfo,
    implementation,
  } as unknown as ReactPortal
}

export function createPortal<T = Gtk.Application>(
  children: React.ReactNode,
  rootNode: T | null = Gio.Application.getDefault() as T | null,
  key = null
): ReactPortal {
  if (rootNode == null) {
    throw new Error("Cannot create a portal without a root node")
  }

  return createPortalImpl(
    children,
    createContainer(rootNode).rootNode,
    null,
    key
  )
}
