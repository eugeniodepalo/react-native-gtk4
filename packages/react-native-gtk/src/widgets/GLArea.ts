import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class GLArea extends Widget {
  createNode(container: Container) {
    return new Gtk.GLArea()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "allowedApis":
        this.node.setAllowedApis(newValue)
        break
      case "api":
        this.node.setApi(newValue)
        break
      case "autoRender":
        this.node.setAutoRender(newValue)
        break
      case "context":
        this.node.setContext(newValue)
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
        this.node.setAccessibleRole(newValue)
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
      default:
        break
    }
  }
}
