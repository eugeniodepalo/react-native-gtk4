import { WidgetProperty } from "./widgetProperty.js"
import { WidgetSignal } from "./widgetSignal.js"
import { WidgetInterface } from "./widgetInterface.js"
import { WidgetType } from "./widgetType.js"
import { WidgetImport } from "./widgetImport.js"

export class WidgetClass {
  constructor(class_, gir) {
    this.class_ = class_
    this.gir = gir
  }

  get name() {
    return this.class_.$.name
  }

  get type() {
    return new WidgetType(this.name, this.gir)
  }

  get parent() {
    const parent = this.gir.findClassByName(this.class_.$.parent)

    if (!parent) {
      return null
    }

    if (parent.$.name === "GOject.Object") {
      return null
    }

    return new WidgetClass(parent, this.gir)
  }

  get parentImport() {
    if (!this.parent) {
      return {
        name: "BaseWidget",
        moduleName: "../../widget.js",
      }
    }

    return {
      name: this.parent.name,
      moduleName: `./${this.parent.name}.js`,
    }
  }

  get import_() {
    return new WidgetImport(this.type, this.gir)
  }

  get imports() {
    const imports = []

    for (const prop of this.writableProps) {
      if (prop.import_ && !imports.find((i) => i.name === prop.import_.name)) {
        imports.push(prop.import_)
      }
    }

    for (const signal of this.signals) {
      for (const import_ of signal.imports) {
        if (!imports.find((i) => i.name === import_.name)) {
          imports.push(import_)
        }
      }
    }

    return imports
  }

  get isContainer() {
    return (this.class_.method || []).some(
      (method) => method.$.name === "set_child"
    )
  }

  get writableProps() {
    return this.props.filter(
      (prop) => !prop.isReadonly && prop.name !== "child"
    )
  }

  get settableProps() {
    return this.writableProps.filter((prop) => !prop.isConstructOnly)
  }

  get constructOnlyProps() {
    return this.writableProps.filter((prop) => prop.isConstructOnly)
  }

  get props() {
    const props = [...(this.class_.property || [])].map((prop) => {
      if (this.name === "Notebook" && prop.$.name === "page") {
        prop.$.getter = "get_current_page"
        prop.$.setter = "set_current_page"
      }

      return new WidgetProperty(prop, this.gir)
    })

    for (const iface of this.interfaces) {
      for (const prop of iface.props) {
        if (!props.find((p) => p.name === prop.name)) {
          props.push(prop)
        }
      }
    }

    return props
  }

  get signals() {
    const signals = [...(this.class_["glib:signal"] || [])].map(
      (signal) => new WidgetSignal(signal, this.gir)
    )

    for (const iface of this.interfaces) {
      for (const signal of iface.signals) {
        if (!signals.find((s) => s.name === signal.name)) {
          signals.push(signal)
        }
      }
    }

    return signals
  }

  get interfaces() {
    const interfaces = []

    for (const impl of this.class_.implements || []) {
      const interface_ = this.gir.findInterfaceByName(impl.$.name)

      if (!interface_) {
        continue
      }

      interfaces.push(new WidgetInterface(interface_, this.gir))
    }

    return interfaces
  }
}
