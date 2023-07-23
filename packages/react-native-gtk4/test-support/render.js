import Container from "../src/container"
import Gtk from "@girs/node-gtk-4.0"
import { createReconciler } from "../src/reconciler.js"
import { withApplicationContext } from "../src/components/ApplicationProvider.js"
import "../src/overrides.js"

const reconciler = createReconciler()
jest.spyOn(reconciler, "createContainer")
jest.useFakeTimers()

class RenderedTree {
  constructor(node) {
    this.node = node
  }

  findByType(type, node = this.node) {
    if (node.constructor.name === type) {
      return new RenderedTree(node)
    }

    if (node.children.length > 0) {
      return node.children.find((child) => this.findByType(type, child))
    }

    return null
  }

  findByProps(props, node = this.node) {
    if (node.props) {
      const keys = Object.keys(props)
      return keys.every((key) => node.props[key] === props[key])
        ? new RenderedTree(node)
        : null
    }

    if (node.children.length > 0) {
      return node.children.find((child) => this.findByProps(props, child))
    }

    return null
  }

  findByText(text, node = this.node) {
    if (node.props && node.props.children === text) {
      return new RenderedTree(node)
    }

    if (node.children.length > 0) {
      return node.children.find((child) => this.findByText(text, child))
    }

    return null
  }

  findAllByType(type, node = this.node) {
    if (node.constructor.name === type) {
      return [new RenderedTree(node)]
    }

    if (node.children.length > 0) {
      return node.children.reduce(
        (acc, child) => [...acc, ...this.findAllByType(type, child)],
        []
      )
    }

    return []
  }

  findAllByProps(props, node = this.node) {
    if (node.props) {
      const keys = Object.keys(props)
      return keys.every((key) => node.props[key] === props[key])
        ? [new RenderedTree(node)]
        : []
    }

    if (node.children.length > 0) {
      return node.children.reduce(
        (acc, child) => [...acc, ...this.findAllByProps(props, child)],
        []
      )
    }

    return []
  }

  findAllByText(text, node = this.node) {
    if (node.props && node.props.children === text) {
      return [new RenderedTree(node)]
    }

    if (node.children.length > 0) {
      return node.children.reduce(
        (acc, child) => [...acc, ...this.findAllByText(text, child)],
        []
      )
    }

    return []
  }
}

export class Renderer {
  setup() {
    const application = new Gtk.Application()

    application.getActiveWindow = jest.fn(() => application.activeWindow)

    Gtk.ApplicationWindow.prototype.show = jest.fn(function () {
      application.activeWindow = this
    })

    Gtk.ApplicationWindow.prototype.hide = jest.fn(function () {
      application.activeWindow = null
    })

    Gtk.ApplicationWindow.prototype.destroy = jest.fn(function () {
      application.activeWindow = null
    })

    Gtk.ApplicationWindow.prototype.present = jest.fn(function () {
      application.activeWindow = this
    })

    this.application = application
    this.container = new Container(application, reconciler)
    this.instance = reconciler.createContainer.mock.results[0].value

    this.applicationContext = {
      application,
      quit: jest.fn(),
    }
  }

  render(element) {
    reconciler.updateContainer(
      withApplicationContext(element, this.applicationContext),
      this.instance,
      null,
      () => {}
    )

    jest.runAllTimers()

    return new RenderedTree(this.container)
  }
}

const renderer = new Renderer()

export function setupRenderer() {
  renderer.setup()
}

export function render(element) {
  return renderer.render(element)
}
