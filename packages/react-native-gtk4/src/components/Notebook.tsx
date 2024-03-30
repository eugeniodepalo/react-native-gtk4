import React, { useContext, useEffect, useState, createContext } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Notebook, Label } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import { createPortal } from "../portal.js"

const Context = createContext<Gtk.Notebook | null>(null)

type Props = JSX.IntrinsicElements["Notebook"] & {
  children: React.ReactNode
}

const Container = forwardRef<Gtk.Notebook, Props>(function NotebookContainer(
  { children, ...props },
  ref
) {
  const [notebook, setNotebook] = useState<Gtk.Notebook | null>(null)
  const [, setInnerRef] = useForwardedRef(ref, setNotebook)

  return (
    <Notebook ref={setInnerRef} {...props}>
      {notebook ? (
        <Context.Provider value={notebook}>{children}</Context.Provider>
      ) : null}
    </Notebook>
  )
})

interface TabProps {
  children: React.ReactElement & { ref?: React.Ref<Gtk.Widget> }
  label: string | (React.ReactElement & { ref?: React.Ref<Gtk.Widget> })
}

const Tab = function NotebookTab({ children, label }: TabProps) {
  const notebook = useContext(Context)

  if (!notebook) {
    throw new Error("Notebook.Tab must be a child of Notebook.Container")
  }

  const labelElement = (
    typeof label === "string" ? <Label label={label} /> : label
  ) as React.ReactElement & { ref?: React.Ref<Gtk.Widget> }

  const [childRef, setChildRef] = useForwardedRef(children.ref)
  const [labelRef, setLabelRef] = useForwardedRef(labelElement?.ref)

  useEffect(() => {
    const child = childRef.current
    const label = labelRef.current

    if (!child || !label) {
      return
    }

    notebook.appendPage(child, label)

    return () => {
      notebook.removePage(notebook.pageNum(label))
    }
  }, [notebook, labelRef.current, childRef.current])

  return (
    <>
      {React.cloneElement(children, {
        ref: setChildRef,
      })}
      {labelElement
        ? createPortal(
            React.cloneElement(labelElement, {
              ref: setLabelRef,
            })
          )
        : null}
    </>
  )
}

export default {
  Container,
  Tab,
}
