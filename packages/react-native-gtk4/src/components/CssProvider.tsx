import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import { useEffect, useRef } from "react"

interface Props {
  path?: string
  content?: string
  children: React.ReactNode
}

function getDefaultDisplay() {
  const display = Gdk.Display.getDefault()

  if (!display) {
    throw new Error("Could not get default display")
  }

  return display
}

export default function CssProvider({ path, content, children }: Props) {
  const providerRef = useRef<Gtk.CssProvider | null>()

  if (!path && !content) {
    throw new Error("Either path or content must be provided")
  }

  useEffect(() => {
    if (!providerRef.current) {
      providerRef.current = new Gtk.CssProvider()

      Gtk.StyleContext.addProviderForDisplay(
        getDefaultDisplay(),
        providerRef.current,
        Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
      )
    }

    return () => {
      if (!providerRef.current) {
        return
      }

      Gtk.StyleContext.removeProviderForDisplay(
        getDefaultDisplay(),
        providerRef.current
      )
    }
  }, [])

  useEffect(() => {
    if (!providerRef.current) {
      return
    }

    if (content) {
      providerRef.current.loadFromData(content, -1)
      return
    }

    if (path) {
      providerRef.current.loadFromPath(path)
      return
    }
  }, [path, content])

  return children
}
