import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class GLArea<T extends Gtk.GLArea> extends Widget<T> {
  createNode() {
    return new Gtk.GLArea({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "autoRender":
        this.node.setAutoRender(newValue)
        break
      case "hasDepthBuffer":
        this.node.setHasDepthBuffer(newValue)
        break
      case "hasStencilBuffer":
        this.node.setHasStencilBuffer(newValue)
        break
      case "useEs":
        this.node.setUseEs(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onCreateContext":
        this.setHandler("create-context", newValue)
        break
      case "onRender":
        this.setHandler("render", newValue)
        break
      case "onResize":
        this.setHandler("resize", newValue)
        break
    }
  }
}
