import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk, Box } from "../index.js"

const Notebook = "Notebook"
const Label = "Label"

const NotebookContext = React.createContext<Gtk.Notebook | undefined>(undefined)

type Props = JSX.IntrinsicElements["Notebook"] & {
  children: React.ReactNode
}

const NotebookComponent = forwardRef<Gtk.Notebook, Props>(
  function NotebookComponent({ children, ...props }, ref) {
    const [notebookNode, setNotebookNode] = useState<Gtk.Notebook | undefined>(
      undefined
    )

    useImperativeHandle(ref, () => {
      if (!notebookNode) {
        throw new Error("notebookRef is undefined")
      }

      return notebookNode
    })

    const notebookRef = useCallback((node: Gtk.Notebook) => {
      setNotebookNode(node)
    }, [])

    return (
      <Box>
        <NotebookContext.Provider value={notebookNode}>
          <Notebook ref={notebookRef} {...props}>
            {children}
          </Notebook>
        </NotebookContext.Provider>
      </Box>
    )
  }
)

interface TabProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  label?: string
}

const NotebookTab = function NotebookItem({ children, label }: TabProps) {
  const notebookRef = useContext(NotebookContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | undefined>(undefined)
  const [labelNode, setLabelNode] = useState<Gtk.Label | undefined>(undefined)

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      setChildNode(node)
    },
  })

  const labelRef = useCallback((node: Gtk.Label) => {
    setLabelNode(node)
  }, [])

  useEffect(() => {
    if (!notebookRef || !childNode) {
      return
    }

    notebookRef.appendPage(childNode, labelNode ?? null)

    return () => {
      notebookRef.removePage(notebookRef.pageNum(childNode))
    }
  }, [notebookRef, childNode, labelNode])

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
