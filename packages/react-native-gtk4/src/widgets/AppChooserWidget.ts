import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class AppChooserWidget<
  T extends Gtk.AppChooserWidget,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.AppChooserWidget() as T
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
