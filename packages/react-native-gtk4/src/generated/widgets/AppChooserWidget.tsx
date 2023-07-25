import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class AppChooserWidget<
  T extends Gtk.AppChooserWidget = Gtk.AppChooserWidget,
> extends Widget<T> {
  createNode() {
    return new Gtk.AppChooserWidget({
      contentType: this.props.contentType,
    }) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "defaultText":
        if (this.node.getDefaultText() !== newValue) {
          this.node.setDefaultText(newValue)
        }
        break
      case "showAll":
        if (this.node.getShowAll() !== newValue) {
          this.node.setShowAll(newValue)
        }
        break
      case "showDefault":
        if (this.node.getShowDefault() !== newValue) {
          this.node.setShowDefault(newValue)
        }
        break
      case "showFallback":
        if (this.node.getShowFallback() !== newValue) {
          this.node.setShowFallback(newValue)
        }
        break
      case "showOther":
        if (this.node.getShowOther() !== newValue) {
          this.node.setShowOther(newValue)
        }
        break
      case "showRecommended":
        if (this.node.getShowRecommended() !== newValue) {
          this.node.setShowRecommended(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
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
