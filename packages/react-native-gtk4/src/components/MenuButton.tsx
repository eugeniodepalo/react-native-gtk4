import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { MenuButton } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import Gio from "@girs/node-gio-2.0"
import useActionGroup from "../hooks/useActionGroup.js"

type Props = Omit<
  JSX.IntrinsicElements["MenuButton"],
  "menuModel" | "popover"
> & {
  children: React.ReactNode
  popover?: React.ReactElement<JSX.IntrinsicElements["Popover"]>
}

const Context = createContext<Gio.Menu | null>(null)

const Container = forwardRef<Gtk.MenuButton, Props>(
  function MenuButtonComponent({ popover, children, ...props }, ref) {
    const innerRef = useRef<Gtk.MenuButton | null>(null)
    const [popoverNode, setPopoverNode] = useState<Gtk.Popover | null>(null)
    const menu = useMemo(() => new Gio.Menu(), [])
    const actionGroup = useActionGroup()

    useImperativeHandle(ref, () => innerRef.current!)

    useEffect(() => {
      const menuButton = innerRef.current

      if (!menuButton || !actionGroup) {
        return
      }

      const name = actionGroup.name

      menuButton.insertActionGroup(name, actionGroup.group)

      return () => {
        menuButton.insertActionGroup(name, null)
      }
    }, [actionGroup])

    const popoverRef = useCallback((node: Gtk.Popover | null) => {
      setPopoverNode(node)
    }, [])

    return (
      <Context.Provider value={menu}>
        {popover
          ? createPortal(
              React.cloneElement(popover, {
                ref: popoverRef,
              })
            )
          : null}
        <MenuButton
          ref={innerRef}
          menuModel={menu}
          popover={popoverNode ?? undefined}
          {...props}
        >
          {children}
        </MenuButton>
      </Context.Provider>
    )
  }
)

interface ItemProps {
  children?: React.ReactNode
  label?: string
  icon?: string
  type?: "item" | "section" | "submenu"
  action?: string
}

const Item = function ItemComponent({
  children,
  label,
  icon,
  action,
  type = "item",
}: ItemProps) {
  const parent = useContext(Context)
  const [menu, setMenu] = useState<Gio.Menu | null>(null)

  if (!parent) {
    throw new Error("MenuButton.Item must be used inside a MenuButton")
  }

  useEffect(() => {
    const item = new Gio.MenuItem()
    const menu = type === "item" ? null : new Gio.Menu()
    const index = parent.getNItems()

    if (action) {
      item.setDetailedAction(action)
    }

    if (icon) {
      item.setIcon(new Gio.ThemedIcon(icon))
    }

    if (label) {
      item.setLabel(label)
    }

    if (type === "submenu") {
      item.setSubmenu(menu)
    } else if (type === "section") {
      item.setSection(menu)
    }

    parent.appendItem(item)

    setMenu(menu)

    return () => {
      parent.remove(index)
    }
  }, [parent, label, icon, type, action])

  return <Context.Provider value={menu}>{children}</Context.Provider>
}

export default {
  Container,
  Item,
}
