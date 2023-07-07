import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Calendar extends Widget {
  createNode(container: Container) {
    return new Gtk.Calendar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "day":
        this.node.setDay(newValue)
        break
      case "month":
        this.node.setMonth(newValue)
        break
      case "showDayNames":
        this.node.setShowDayNames(newValue)
        break
      case "showHeading":
        this.node.setShowHeading(newValue)
        break
      case "showWeekNumbers":
        this.node.setShowWeekNumbers(newValue)
        break
      case "year":
        this.node.setYear(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
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
      default:
        break
    }
  }
}
