import { Container, Gtk } from "../index.js"
import ScaleButton from "./ScaleButton.js"

export default class VolumeButton<
  T extends Gtk.VolumeButton,
> extends ScaleButton<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.VolumeButton() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
