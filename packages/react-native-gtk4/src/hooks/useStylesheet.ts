import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import { useEffect, useMemo } from "react"

function getDefaultDisplay() {
  const display = Gdk.Display.getDefault()

  if (!display) {
    throw new Error("Could not get default display")
  }

  return display
}

function useProvider() {
  const provider = useMemo(() => new Gtk.CssProvider(), [])

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

  return provider
}

export function useInlineStylesheet(content: string) {
  const provider = useProvider()

  useEffect(() => {
    const contentAsBytes = Buffer.from(content) as unknown as string
    provider.loadFromData(contentAsBytes, -1)
    return
  }, [content])

  return provider
}

export default function useStylesheet(path: string) {
  const provider = useProvider()

  useEffect(() => {
    provider.loadFromPath(path)
  }, [path])

  return provider
}
