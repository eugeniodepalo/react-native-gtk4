import { GirClass } from "./gir/class.js"
import {
  GirBitfieldElement,
  GirClassElement,
  GirEnumElement,
  GirInterfaceElement,
  GirModule,
  GirNamespace,
  InheritanceTable,
} from "@ts-for-gir/lib"
import { ModuleLoader } from "./module-loader.js"
import { GirImport } from "./gir/import.js"
import { dirname, join } from "path"

const ROOT_PATH = dirname(join(new URL(import.meta.url).pathname, ".."))

export class Gir {
  module: GirModule
  _widgetClasses?: GirClass[]
  _classes?: GirClassElement[]
  _interfaces?: GirInterfaceElement[]
  _enumerations?: GirEnumElement[]
  _bitfields?: GirBitfieldElement[]
  _imports?: GirImport[]

  static async parse() {
    const moduleLoader = new ModuleLoader({
      environment: "node",
      root: ROOT_PATH,
      outdir: `${ROOT_PATH}/out`,
      girDirectories: [`${ROOT_PATH}/girs`],
      verbose: false,
      noNamespace: false,
      noComments: false,
      noDebugComments: false,
      fixConflicts: false,
      generateAlias: false,
      promisify: false,
      npmScope: "",
      package: false,
      packageYarn: false,
    })

    const inheritanceTable: InheritanceTable = {}
    const loadedModules = await moduleLoader.getModulesResolved(["Gtk-4.0"])
    const module = loadedModules[0].module

    for (const { module } of loadedModules) {
      GirModule.allGirModules.push(module)
      module.init(inheritanceTable)
    }

    module.start(GirModule.allGirModules)

    return new Gir(module)
  }

  constructor(module: GirModule) {
    this.module = module
  }

  get widgetClasses() {
    return (this._widgetClasses ||= this.classes
      .filter((c) => this.isWidgetClass(c))
      .map((c) => new GirClass(c, this)))
  }

  get classes() {
    return (this._classes ||= this.collectFromDependencies(
      (dep) => dep.class || []
    ))
  }

  get interfaces() {
    return (this._interfaces ||= this.collectFromDependencies(
      (dep) => dep.interface || []
    ))
  }

  get enumerations() {
    return (this._enumerations ||= this.collectFromDependencies(
      (dep) => dep.enumeration || []
    ))
  }

  get bitfields() {
    return (this._bitfields ||= this.collectFromDependencies(
      (dep) => dep.bitfield || []
    ))
  }

  get namespace() {
    return this.module.ns
  }

  private collectFromDependencies<T>(getter: (dep: GirNamespace) => T[]): T[] {
    return this.module.allDependencies.reduce((acc, dep) => {
      const module = this.module.dependencyManager.getModule(
        GirModule.allGirModules,
        dep
      )

      if (!module) {
        return acc
      }

      return [...acc, ...getter(module.ns)]
    }, getter(this.module.ns))
  }

  get imports() {
    if (this._imports) {
      return this._imports
    }

    const imports: GirImport[] = []

    for (const widgetClass of this.widgetClasses) {
      for (const import_ of widgetClass.imports) {
        if (!imports.find((i) => i.name === import_.name)) {
          imports.push(import_)
        }
      }
    }

    return (this._imports = imports)
  }

  findInterfaceByName(name: string) {
    return this.interfaces.find((i) => i.$.name === name)
  }

  findClassByName(name: string) {
    return this.classes.find((c) => c.$.name === name)
  }

  isWidgetClass(class_: GirClassElement): boolean {
    if (class_.$.name === "Widget") {
      return true
    }

    if (!class_.$.parent) {
      return false
    }

    const parentClass = this.findClassByName(class_.$.parent)

    if (!parentClass) {
      return false
    }

    return this.isWidgetClass(parentClass)
  }
}
