import { Container, Gtk } from ".."
import Widget from "../widget"

export default class AppChooserWidget extends Widget {
  createNode(container: Container) {
    return new Gtk.AppChooserWidget()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "defaultText":
        this.node.setDefaultText(newValue)
        break
      case "showAll":
        this.node.setShowAll(newValue)
        break
      case "showDefault":
        this.node.setShowDefault(newValue)
        break
      case "showFallback":
        this.node.setShowFallback(newValue)
        break
      case "showOther":
        this.node.setShowOther(newValue)
        break
      case "showRecommended":
        this.node.setShowRecommended(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "contentType":
        this.node.setContentType(newValue)
        break
      case "onApplicationActivated":
        if (oldValue) {
          this.node.off("application-activated", oldValue)
        }
        if (newValue) {
          this.node.on("application-activated", newValue)
        }
        break
      case "onApplicationSelected":
        if (oldValue) {
          this.node.off("application-selected", oldValue)
        }
        if (newValue) {
          this.node.on("application-selected", newValue)
        }
        break
      default:
        break
    }
  }
}
