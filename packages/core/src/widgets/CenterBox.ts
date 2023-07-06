import { Container, Gtk } from ".."
import Widget from "../widget"

export default class CenterBox extends Widget {
  createNode(container: Container) {
    return new Gtk.CenterBox()
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
      case "shrinkCenterLast":
        this.node.setShrinkCenterLast(newValue)
        break
      case "startWidget":
        this.node.setStartWidget(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
