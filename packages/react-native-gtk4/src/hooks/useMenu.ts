import Gio from "@girs/node-gio-2.0"
import GLib from "@girs/node-glib-2.0"
import { useMemo } from "react"

interface MenuItem {
  label?: string
  icon?: string
  action?: string
  section?: boolean
  attributes?: Record<string, GLib.Variant>
  children?: MenuItem[]
}

function buildMenu(menu: Gio.Menu, items: MenuItem[]) {
  for (const item of items) {
    const menuItem = new Gio.MenuItem()

    if (item.label) {
      menuItem.setLabel(item.label)
    }

    if (item.icon) {
      const icon = Gio.ThemedIcon.new(item.icon)
      menuItem.setIcon(icon)
    }

    if (item.action) {
      menuItem.setDetailedAction(item.action)
    }

    if (item.attributes) {
      for (const [key, value] of Object.entries(item.attributes)) {
        menuItem.setAttributeValue(key, value)
      }
    }

    if (item.children) {
      const itemMenu = new Gio.Menu()

      if (item.section) {
        menuItem.setSection(itemMenu)
      } else {
        menuItem.setSubmenu(itemMenu)
      }

      buildMenu(itemMenu, item.children)
    }

    menu.appendItem(menuItem)
  }
}

export default function useMenu(
  items: MenuItem[],
  deps: React.DependencyList | undefined
) {
  return useMemo(() => {
    const menu = new Gio.Menu()
    buildMenu(menu, items)
    return menu
  }, deps)
}
