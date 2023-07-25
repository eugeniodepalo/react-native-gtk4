import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import { useEffect, useRef } from "react"

interface Props {
  path: string
  children: React.ReactNode
}

export default function CssProvider({ path, children }: Props) {
  const providerRef = useRef<Gtk.CssProvider | null>()

  useEffect(() => {
    if (!providerRef.current) {
      providerRef.current = new Gtk.CssProvider()

      const display = Gdk.Display.getDefault()

      if (!display) {
        throw new Error("Could not get default display")
      }

      if (display) {
        Gtk.StyleContext.addProviderForDisplay(
          display,
          providerRef.current,
          Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
        )
      }
    }

    return () => {
      providerRef.current?.unref()
    }
  }, [])

  useEffect(() => {
    providerRef.current?.loadFromPath(path)
  }, [path])

  return children
}
