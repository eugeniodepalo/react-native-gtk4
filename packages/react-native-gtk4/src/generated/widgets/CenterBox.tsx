import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class CenterBox<T extends Gtk.CenterBox> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.CenterBox() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "baselinePosition":
        this.node.setBaselinePosition(newValue)
        break
      case "centerWidget":
        this.node.setCenterWidget(newValue)
        break
      case "endWidget":
        this.node.setEndWidget(newValue)
        break
      case "startWidget":
        this.node.setStartWidget(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
    }
  }
}
