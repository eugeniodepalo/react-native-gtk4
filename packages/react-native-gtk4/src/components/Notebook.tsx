import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Notebook = "Notebook"
const Label = "Label"
const NotebookContext = React.createContext<Gtk.Notebook | null>(null)

type Props = JSX.IntrinsicElements["Notebook"] & {
  children: React.ReactNode
}

const NotebookComponent = forwardRef<Gtk.Notebook, Props>(
  function NotebookComponent({ children, ...props }, ref) {
    const [notebookNode, setNotebookNode] = useState<Gtk.Notebook | null>(null)

    useImperativeHandle(ref, () => notebookNode!)

    const notebookRef = useCallback((node: Gtk.Notebook | null) => {
      setNotebookNode(node)
    }, [])

    return (
      <NotebookContext.Provider value={notebookNode}>
        <Notebook ref={notebookRef} {...props}>
          {children}
        </Notebook>
      </NotebookContext.Provider>
    )
  }
)

interface TabProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  label?: string
}

const NotebookTab = function NotebookItem({ children, label }: TabProps) {
  const notebookNode = useContext(NotebookContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | null>(null)
  const [labelNode, setLabelNode] = useState<Gtk.Label | null>(null)

  const childRef = useCallback((node: Gtk.Widget | null) => {
    setChildNode(node)
  }, [])

  const childWithRef = React.cloneElement(children, {
    ref: childRef,
  })

  const labelRef = useCallback((node: Gtk.Label | null) => {
    setLabelNode(node)
  }, [])

  useEffect(() => {
    if (!notebookNode || !childNode) {
      return
    }

    notebookNode.appendPage(childNode, labelNode)

    return () => {
      notebookNode.removePage(notebookNode.pageNum(childNode))
    }
  }, [notebookNode, childNode, labelNode])

  return (
    <>
      <Label ref={labelRef} label={label} />
      {childWithRef}
    </>
  )
}

export default {
  Container: NotebookComponent,
  Tab: NotebookTab,
}
