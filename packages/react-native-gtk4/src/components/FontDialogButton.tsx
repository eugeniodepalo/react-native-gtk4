import React, { useMemo } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { FontDialogButton } from "../generated/intrinsics.js"

type Props = Omit<
  JSX.IntrinsicElements["FontDialogButton"],
  "children" | "dialog"
> &
  Partial<Gtk.FontDialog>

export default forwardRef<Gtk.FontDialogButton, Props>(
  function FontDialogButtonComponent(
    { title, modal = true, filter, fontMap, language, ...props },
    ref
  ) {
    if (!Gtk.FontDialog) {
      return null
    }

    const dialog = useMemo(
      () =>
        new Gtk.FontDialog(
          Object.entries({
            title,
            modal,
            filter,
            fontMap,
            language,
          }).reduce(
            (acc, [key, value]) =>
              value !== undefined ? { ...acc, [key]: value } : acc,
            {} as Record<string, any>
          )
        ),
      [title, modal, filter, fontMap, language]
    )

    return <FontDialogButton ref={ref} dialog={dialog} {...props} />
  }
)
