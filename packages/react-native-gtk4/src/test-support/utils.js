import AbstractNode from "../abstract/node.js"
import AbstractWidget from "../abstract/widget.js"
import AbstractContainer from "../abstract/container.js"
import Gtk from "@girs/node-gtk-4.0"

export function createMockWidget() {
  return new (class extends AbstractWidget {
    node = this.createNode()
    set = jest.fn()
    commitMount = jest.fn()

    createNode() {
      return new Gtk.Widget()
    }
  })()
}

export function createMockNode() {
  return new (class extends AbstractNode {})()
}

export function createMockContainer() {
  return new (class extends AbstractContainer {})()
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
