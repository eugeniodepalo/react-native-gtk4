import xml2js from "xml2js"
import fs from "fs"
import { WidgetClass } from "./gir/widgetClass.js"

const girFilePath = `${__dirname}/../Gtk-4.0.gir`
const keywordsToReplace = new Set(["constructor", "class"])

export class Gir {
  static async parse() {
    const nameProcessor = (name) => {
      return keywordsToReplace.has(name) ? `${name}_` : name
    }

    const data = await fs.promises.readFile(girFilePath)

    const parser = new xml2js.Parser({
      attrNameProcessors: [nameProcessor],
      tagNameProcessors: [nameProcessor],
    })

    return new Gir(await parser.parseStringPromise(data))
  }

  constructor(xml) {
    this.xml = xml
  }

  get widgetClasses() {
    return this.classes
      .filter(this.isWidgetClass.bind(this))
      .map((c) => new WidgetClass(c, this))
  }

  get classes() {
    return this.namespace.class_
  }

  get interfaces() {
    return this.namespace.interface
  }

  get namespace() {
    return this.xml.repository.namespace[0]
  }

  get imports() {
    const imports = []

    for (const widgetClass of this.widgetClasses) {
      for (const import_ of widgetClass.imports) {
        if (!imports.find((i) => i.name === import_.name)) {
          imports.push(import_)
        }
      }
    }

    return imports
  }

  findInterfaceByName(name) {
    return this.interfaces.find((i) => i.$.name === name)
  }

  findClassByName(name) {
    return this.classes.find((c) => c.$.name === name)
  }

  isWidgetClass(class_) {
    if (!class_) {
      return false
    }

    if (class_.$.name === "Widget") {
      return true
    }

    return this.isWidgetClass(this.findClassByName(class_.$.parent))
  }
}
