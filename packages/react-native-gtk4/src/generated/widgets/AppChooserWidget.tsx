import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class AppChooserWidget<
  T extends Gtk.AppChooserWidget = Gtk.AppChooserWidget,
> extends Widget<T> {
  static createNode(props: Record<string, any> = {}) {
    return new Gtk.AppChooserWidget({
      contentType: props.contentType,
    })
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
        this.node.accessibleRole = newValue
        break
      case "onApplicationActivated":
        this.setHandler("application-activated", newValue)
        break
      case "onApplicationSelected":
        this.setHandler("application-selected", newValue)
        break
      case "onNotifyDefaultText":
        this.setHandler("notify::default-text", newValue)
        break
      case "onNotifyShowAll":
        this.setHandler("notify::show-all", newValue)
        break
      case "onNotifyShowDefault":
        this.setHandler("notify::show-default", newValue)
        break
      case "onNotifyShowFallback":
        this.setHandler("notify::show-fallback", newValue)
        break
      case "onNotifyShowOther":
        this.setHandler("notify::show-other", newValue)
        break
      case "onNotifyShowRecommended":
        this.setHandler("notify::show-recommended", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyContentType":
        this.setHandler("notify::content-type", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
