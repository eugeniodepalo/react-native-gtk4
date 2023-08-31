import React, { useContext, useEffect, useState } from "react"
import { forwardRef, createContext } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { TextView } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

const Context = createContext<Gtk.TextView | null>(null)

const Container = forwardRef<Gtk.TextView, JSX.IntrinsicElements["TextView"]>(
  function TextViewContainer({ children, ...props }, ref) {
    const [textView, setTextView] = useState<Gtk.TextView | null>(null)
    const [, setInnerRef] = useForwardedRef(ref, setTextView)

    return (
      <TextView ref={setInnerRef} {...props}>
        {textView ? (
          <Context.Provider value={textView}>{children}</Context.Provider>
        ) : null}
      </TextView>
    )
  }
)

interface OverlayProps {
  children: React.ReactElement & React.RefAttributes<Gtk.Widget>
  x?: number
  y?: number
}

const Overlay = function TextViewOverlay({
  children,
  x = 0,
  y = 0,
}: OverlayProps) {
  const textView = useContext(Context)
  const [childRef, setChildRef] = useForwardedRef(children.ref)

  if (!textView) {
    throw new Error("TextView.Overlay must be a child of TextView.Container")
  }

  useEffect(() => {
    const child = childRef.current

    if (!child) {
      return
    }

    textView.addOverlay(child, x, y)

    return () => {
      if (child.parent === textView) {
        textView.remove(child)
      }
    }
  }, [textView, x, y])

  return React.cloneElement(children, {
    ref: setChildRef,
  })
}

interface AnchorProps {
  children: React.ReactElement & React.RefAttributes<Gtk.Widget>
  anchor: Gtk.TextChildAnchor
}

const Anchor = function TextViewAnchor({ children, anchor }: AnchorProps) {
  const textView = useContext(Context)
  const [childRef, setChildRef] = useForwardedRef(children.ref)

  if (!textView) {
    throw new Error("TextView.Anchor must be a child of TextView.Container")
  }

  useEffect(() => {
    const child = childRef.current

    if (!child) {
      return
    }

    textView.addChildAtAnchor(child, anchor)

    return () => {
      if (child.parent === textView) {
        textView.remove(child)
      }
    }
  }, [textView, anchor])

  return React.cloneElement(children, {
    ref: setChildRef,
  })
}

export default {
  Container,
  Overlay,
  Anchor,
}
