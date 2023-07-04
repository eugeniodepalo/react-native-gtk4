import gi from "node-gtk"
import Reconciler from "react-reconciler"

const GLib = gi.require("GLib", "2.0")
const Gtk = gi.require("Gtk", "4.0")

Gtk.init()

const camelize = (str) =>
  str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")

const hostConfig = {
  now: Date.now,
  isPrimaryRenderer: false,
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
  },

  createTextInstance() {
    throw new Error("Text nodes are not supported in GTK")
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

    for (const [propName, propValue] of Object.entries(props)) {
      if (propName === "children") {
        continue
      }

      widget[`set${camelize(propName)}`](propValue)
    }

    return widget
  },

  appendInitialChild(parentInstance, child) {
    if (parentInstance instanceof Gtk.ApplicationWindow) {
      parentInstance.setChild(child)
    } else {
      parentInstance.append(child)
    }
  },

  appendChild(parentInstance, child) {
    if (parentInstance instanceof Gtk.ApplicationWindow) {
      parentInstance.setChild(child)
    } else {
      parentInstance.append(child)
    }
  },

  removeChild(parentInstance, child) {
    if (parentInstance instanceof Gtk.ApplicationWindow) {
      parentInstance.setChild(null)
    } else {
      parentInstance.remove(child)
    }
  },

  finalizeInitialChildren(instance) {
    instance.show()
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
      instance[`set${camelize(propName)}`](propValue)
    }
  },
}

const GtkReconciler = Reconciler(hostConfig)

export function render(element, appName = "app") {
  const loop = GLib.MainLoop.new(null, false)
  const app = new Gtk.Application(appName, 0)
  const rootContainer = { app, loop }

  app.on("activate", () => {
    const container = GtkReconciler.createContainer(rootContainer, false, false)

    GtkReconciler.updateContainer(element, container, null, () => {
      loop.run()
    })
  })

  app.run([])
}
