import AnyWidget from "../widget.js"
import Gtk from "@girs/node-gtk-4.0"

export function createAnyWidget() {
  return new (class Widget extends AnyWidget {
    node = this.createNode()

    createNode() {
      return new Gtk.Widget()
    }
  })()
}

export function mockProperty(klass, name) {
  const getterName = `get${name[0].toUpperCase()}${name.slice(1)}`
  const setterName = `set${name[0].toUpperCase()}${name.slice(1)}`

  klass.prototype[getterName] = jest.fn(function () {
    return this[name]
  })

  klass.prototype[setterName] = jest.fn(function (value) {
    this[name] = value
  })
}
