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
        if (oldValue) {
          this.node.off("create-context", oldValue)
        }
        if (newValue) {
          this.node.on("create-context", newValue)
        }
        break
      case "onRender":
        if (oldValue) {
          this.node.off("render", oldValue)
        }
        if (newValue) {
          this.node.on("render", newValue)
        }
        break
      case "onResize":
        if (oldValue) {
          this.node.off("resize", oldValue)
        }
        if (newValue) {
          this.node.on("resize", newValue)
        }
        break
    }
  }
}
