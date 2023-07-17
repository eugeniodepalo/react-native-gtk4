import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Calendar<
  T extends Gtk.Calendar = Gtk.Calendar,
> extends Widget<T> {
  createNode() {
    return new Gtk.Calendar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "day":
        this.node.day = newValue
        break
      case "month":
        this.node.month = newValue
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
        this.node.year = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onDaySelected":
        this.setHandler("day-selected", newValue)
        break
      case "onNextMonth":
        this.setHandler("next-month", newValue)
        break
      case "onNextYear":
        this.setHandler("next-year", newValue)
        break
      case "onPrevMonth":
        this.setHandler("prev-month", newValue)
        break
      case "onPrevYear":
        this.setHandler("prev-year", newValue)
        break
      case "onNotifyDay":
        this.setHandler("notify::day", newValue)
        break
      case "onNotifyMonth":
        this.setHandler("notify::month", newValue)
        break
      case "onNotifyShowDayNames":
        this.setHandler("notify::show-day-names", newValue)
        break
      case "onNotifyShowHeading":
        this.setHandler("notify::show-heading", newValue)
        break
      case "onNotifyShowWeekNumbers":
        this.setHandler("notify::show-week-numbers", newValue)
        break
      case "onNotifyYear":
        this.setHandler("notify::year", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
