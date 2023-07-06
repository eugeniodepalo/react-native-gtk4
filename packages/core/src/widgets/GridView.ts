import { Container, Gtk } from ".."
import ListBase from "./ListBase"

export default class GridView extends ListBase {
  createNode(container: Container) {
    return new Gtk.GridView()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "enableRubberband":
        this.node.setEnableRubberband(newValue)
        break
      case "factory":
        this.node.setFactory(newValue)
        break
      case "maxColumns":
        this.node.setMaxColumns(newValue)
        break
      case "minColumns":
        this.node.setMinColumns(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "singleClickActivate":
        this.node.setSingleClickActivate(newValue)
        break
      case "tabBehavior":
        this.node.setTabBehavior(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
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
