import React, { useContext, useEffect, useRef, useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Notebook, Label } from "../generated/intrinsics.js"
import { useForwardedRef } from "../utils.js"

const Context = React.createContext<Gtk.Notebook | null>(null)

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
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const Tab = function NotebookTab({ children, label }: TabProps) {
  const notebook = useContext(Context)

  if (!notebook) {
    throw new Error("Notebook.Tab must be a child of Notebook.Container")
  }

  const childRef = useRef<Gtk.Widget | null>(null)
  const labelRef = useRef<Gtk.Label | null>(null)

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
  }, [notebook, label])

  return (
    <>
      {React.cloneElement(children, {
        ref: childRef,
      })}
      {React.cloneElement(
        label && typeof label !== "string" ? (
          label
        ) : (
          <Label ref={labelRef} label={label} />
        ),
        {
          ref: labelRef,
        }
      )}
    </>
  )
}

export default {
  Container,
  Tab,
}
