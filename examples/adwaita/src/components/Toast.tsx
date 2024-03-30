import React, { useEffect, useRef } from "react"
import { Gtk, Box } from "react-native-gtk4"
import Adw from "@girs/node-adw-1"

export const Toast = () => {
  const boxRef = useRef<Gtk.Box | null>(null)

  useEffect(() => {
    const box = boxRef.current

    if (!box) return

    const overlay = new Adw.ToastOverlay()
    const toast = new Adw.Toast({ title: "This is a simple toast." })

    overlay.addToast(toast)
    box.append(overlay)

    return () => {
      box.remove(overlay)
    }
  }, [])

  return <Box ref={boxRef} />
}
