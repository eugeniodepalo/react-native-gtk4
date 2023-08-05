import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class Expander<
  T extends Gtk.Expander = Gtk.Expander,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Expander({})
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "expanded":
        if (this.node.getExpanded() !== newValue) {
          this.node.setExpanded(newValue)
        }
        break
      case "label":
        if (this.node.getLabel() !== newValue) {
          this.node.setLabel(newValue)
        }
        break
      case "labelWidget":
        if (this.node.getLabelWidget() !== newValue) {
          this.node.setLabelWidget(newValue)
        }
        break
      case "resizeToplevel":
        if (this.node.getResizeToplevel() !== newValue) {
          this.node.setResizeToplevel(newValue)
        }
        break
      case "useMarkup":
        if (this.node.getUseMarkup() !== newValue) {
          this.node.setUseMarkup(newValue)
        }
        break
      case "useUnderline":
        if (this.node.getUseUnderline() !== newValue) {
          this.node.setUseUnderline(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyExpanded":
        this.setHandler("notify::expanded", newValue)
        break
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyLabelWidget":
        this.setHandler("notify::label-widget", newValue)
        break
      case "onNotifyResizeToplevel":
        this.setHandler("notify::resize-toplevel", newValue)
        break
      case "onNotifyUseMarkup":
        this.setHandler("notify::use-markup", newValue)
        break
      case "onNotifyUseUnderline":
        this.setHandler("notify::use-underline", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
