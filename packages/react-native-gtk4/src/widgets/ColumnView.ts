import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ColumnView extends Widget {
  createNode(container: Container) {
    return new Gtk.ColumnView()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "columns":
        this.node.setColumns(newValue)
        break
      case "enableRubberband":
        this.node.setEnableRubberband(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "reorderable":
        this.node.setReorderable(newValue)
        break
      case "showColumnSeparators":
        this.node.setShowColumnSeparators(newValue)
        break
      case "showRowSeparators":
        this.node.setShowRowSeparators(newValue)
        break
      case "singleClickActivate":
        this.node.setSingleClickActivate(newValue)
        break
      case "sorter":
        this.node.setSorter(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      default:
        break
    }
  }
}
