import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Calendar<T extends Gtk.Calendar> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Calendar() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "showDayNames":
        this.node.setShowDayNames(newValue)
        break
      case "showHeading":
        this.node.setShowHeading(newValue)
        break
      case "showWeekNumbers":
        this.node.setShowWeekNumbers(newValue)
        break
      case "onDaySelected":
        if (oldValue) {
          this.node.off("day-selected", oldValue)
        }
        if (newValue) {
          this.node.on("day-selected", newValue)
        }
        break
      case "onNextMonth":
        if (oldValue) {
          this.node.off("next-month", oldValue)
        }
        if (newValue) {
          this.node.on("next-month", newValue)
        }
        break
      case "onNextYear":
        if (oldValue) {
          this.node.off("next-year", oldValue)
        }
        if (newValue) {
          this.node.on("next-year", newValue)
        }
        break
      case "onPrevMonth":
        if (oldValue) {
          this.node.off("prev-month", oldValue)
        }
        if (newValue) {
          this.node.on("prev-month", newValue)
        }
        break
      case "onPrevYear":
        if (oldValue) {
          this.node.off("prev-year", oldValue)
        }
        if (newValue) {
          this.node.on("prev-year", newValue)
        }
        break
    }
  }
}
