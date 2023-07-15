import { Gtk } from "../index.js"
import Stack from "../generated/widgets/Stack.js"

const parent = {
  set: Stack.prototype.set,
}

Stack.prototype.commitMount = function <T extends Gtk.Stack>(this: Stack<T>) {}

Stack.prototype.set = function <T extends Gtk.Stack>(
  this: Stack<T>,
  propName: string,
  newValue: any,
  oldValue: any
) {
  if (propName !== "visibleChildName") {
    parent.set.call(this, propName, newValue, oldValue)
  }
}
