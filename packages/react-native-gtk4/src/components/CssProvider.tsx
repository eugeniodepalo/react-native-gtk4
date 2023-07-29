import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import { useEffect, useMemo } from "react"

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
  const provider = useMemo(() => new Gtk.CssProvider(), [])

  if (!path && !content) {
    throw new Error("Either path or content must be provided")
  }

  useEffect(() => {
    Gtk.StyleContext.addProviderForDisplay(
      getDefaultDisplay(),
      provider,
      Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
    )

    return () => {
      Gtk.StyleContext.removeProviderForDisplay(getDefaultDisplay(), provider)
    }
  }, [])

  useEffect(() => {
    if (content) {
      const contentAsBytes = Buffer.from(content) as unknown as string
      provider.loadFromData(contentAsBytes, -1)
      return
    }

    if (path) {
      provider.loadFromPath(path)
      return
    }
  }, [path, content])

  return children
}
