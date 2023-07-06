import { Container, Gtk } from ".."
import Widget from "../widget"

export default class FontDialogButton extends Widget {
  createNode(container: Container) {
    return new Gtk.FontDialogButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "dialog":
        this.node.setDialog(newValue)
        break
      case "fontDesc":
        this.node.setFontDesc(newValue)
        break
      case "fontFeatures":
        this.node.setFontFeatures(newValue)
        break
      case "language":
        this.node.setLanguage(newValue)
        break
      case "level":
        this.node.setLevel(newValue)
        break
      case "useFont":
        this.node.setUseFont(newValue)
        break
      case "useSize":
        this.node.setUseSize(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
