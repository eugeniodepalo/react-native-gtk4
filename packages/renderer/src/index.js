import gi from "node-gtk"
import Reconciler from "react-reconciler"

const GLib = gi.require("GLib", "2.0")
const Gtk = gi.require("Gtk", "4.0")

Gtk.init()
gi.startLoop()

const camelize = (str) =>
  str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")

const appendChild = (parent, child) => {
  if (parent.setChild) {
    parent.setChild(child)
  } else {
    parent.append(child)
  }
}

const setProperty = (instance, propName, propValue) => {
  if (propName === "children") {
    return
  }

  if (propName.startsWith("on-")) {
    const signalName = propName.replace("on-", "")

    if (instance._handlers[signalName]) {
      instance.off(signalName, instance._handlers[signalName])
    }

    if (typeof propValue !== "function") {
      delete instance._handlers[signalName]
      return
    }

    instance._handlers[signalName] = propValue
    instance.on(signalName, propValue)
    return
  }

  instance[`set${camelize(propName)}`](propValue)
}

const hostConfig = {
  now: Date.now,
  isPrimaryRenderer: true,
  supportsMutation: true,

  prepareForCommit() {},
  resetAfterCommit() {},
  appendChildToContainer() {},

  getRootHostContext(rootContainerInstance) {
    return rootContainerInstance
  },

  shouldSetTextContent() {
    return false
  },

  clearContainer(container) {
    container.app.quit()
    container.loop.quit()
  },

  createTextInstance(text) {
    const label = new Gtk.Label()
    label.setText(text)
    return label
  },

  commitTextUpdate(textInstance, _prevText, newText) {
    textInstance.setText(newText)
  },

  getPublicInstance(instance) {
    return instance
  },

  createInstance(type, props, rootContainerInstance) {
    const className = camelize(type)
    const WidgetClass = Gtk[className]
    let widget

    if (type === "application-window") {
      widget = new WidgetClass(rootContainerInstance.app)

      widget.on("close-request", () => {
        if (rootContainerInstance.app.getWindows().length === 0) {
          rootContainerInstance.app.quit()
          rootContainerInstance.loop.quit()
        }

        return false
      })
    } else {
      widget = new WidgetClass()
    }

    widget._handlers = {}

    for (const [propName, propValue] of Object.entries(props)) {
      setProperty(widget, propName, propValue)
    }

    return widget
  },

  appendInitialChild: appendChild,
  appendChild,

  removeChild(parentInstance, child) {
    if (parentInstance.setChild) {
      parentInstance.setChild(null)
    } else {
      parentInstance.remove(child)
    }
  },

  finalizeInitialChildren() {
    return true
  },

  prepareUpdate(_instance, _type, oldProps, newProps) {
    return Object.entries(newProps).filter(
      ([propName, propValue]) => oldProps[propName] !== propValue
    )
  },

  getChildHostContext(parentHostContext) {
    return parentHostContext
  },

  commitUpdate(instance, updatePayload) {
    for (const [propName, propValue] of updatePayload) {
      setProperty(instance, propName, propValue)
    }
  },

  commitMount(instance) {
    instance.show()
  },
}

const GtkReconciler = Reconciler(hostConfig)

export default function render(element, app) {
  const loop = GLib.MainLoop.new(null, false)
  const rootContainer = { app, loop }

  app.on("activate", () => {
    const container = GtkReconciler.createContainer(rootContainer, false, false)

    GtkReconciler.updateContainer(element, container, null, () => {
      GLib.idleAdd(GLib.PRIORITY_DEFAULT, () => {
        loop.run()
        return false
      })
    })
  })

  app.run([])
}

export { Gtk }
