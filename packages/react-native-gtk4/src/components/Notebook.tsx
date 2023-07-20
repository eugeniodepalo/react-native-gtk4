import React, {
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"

const Notebook = "Notebook"
const Label = "Label"
const NotebookContext = React.createContext<Gtk.Notebook | null>(null)

type Props = JSX.IntrinsicElements["Notebook"] & {
  children: React.ReactNode
}

const NotebookContainer = forwardRef<Gtk.Notebook, Props>(
  function NotebookContainer({ children, ...props }, ref) {
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
  label?: string | React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const NotebookTab = function NotebookItem({ children, label }: TabProps) {
  const notebookNode = useContext(NotebookContext)

  const childRef = useRef<Gtk.Widget | null>(null)
  const labelRef = useRef<Gtk.Label | null>(null)

  const setLabelRef = useCallback(
    (node: Gtk.Label | null) => {
      const prevNode = labelRef.current

      labelRef.current = node

      if (!notebookNode) {
        return
      }

      if (prevNode) {
        notebookNode.removePage(notebookNode.pageNum(prevNode))
      }

      if (node && childRef.current) {
        notebookNode.appendPage(childRef.current, node)
      }
    },
    [notebookNode, label]
  )

  return (
    <>
      {React.cloneElement(children, {
        ref: childRef,
      })}
      {React.cloneElement(
        label && typeof label !== "string" ? (
          label
        ) : (
          <Label ref={setLabelRef} label={label} />
        ),
        {
          ref: setLabelRef,
        }
      )}
    </>
  )
}

export default {
  Container: NotebookContainer,
  Tab: NotebookTab,
}
