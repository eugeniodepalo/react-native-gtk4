import { GirClass } from "./gir/class.js"
import {
  GirClassElement,
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
      npmScope: "@react-native-gtk4",
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

  constructor(gir: GirModule) {
    this.module = gir
  }

  get widgetClasses() {
    return this.classes
      .filter((c) => this.isWidgetClass(c))
      .map((c) => new GirClass(c, this))
  }

  get classes() {
    return this.collectFromDependencies("class")
  }

  get interfaces() {
    return this.collectFromDependencies("interface")
  }

  get enumerations() {
    return this.collectFromDependencies("enumeration")
  }

  get bitfields() {
    return this.collectFromDependencies("bitfield")
  }

  get namespace() {
    return this.module.ns
  }

  private collectFromDependencies<T extends keyof Omit<GirNamespace, "$">>(
    prop: T
  ) {
    const initialValue = this.namespace[prop] || []

    return this.module.allDependencies
      .reduce(
        (acc, dep) => {
          const module = this.module.dependencyManager.getModule(
            GirModule.allGirModules,
            dep
          )

          if (!module) {
            return acc
          }

          return acc.concat(module.ns[prop] || [])
        },
        initialValue as NonNullable<GirNamespace[T]>[]
      )
      .flat()
  }

  get imports() {
    const imports: GirImport[] = []

    for (const widgetClass of this.widgetClasses) {
      for (const import_ of widgetClass.imports) {
        if (!imports.find((i) => i.name === import_.name)) {
          imports.push(import_)
        }
      }
    }

    return imports
  }

  findInterfaceByName(name: string) {
    if (!name) {
      return null
    }

    return this.interfaces.find((i) => i.$.name === name)
  }

  findClassByName(name: string | null | undefined) {
    if (!name) {
      return null
    }

    return this.classes.find((c) => c.$.name === name)
  }

  isWidgetClass(class_: GirClassElement | null | undefined): boolean {
    if (!class_) {
      return false
    }

    if (class_.$.name === "Widget") {
      return true
    }

    return this.isWidgetClass(this.findClassByName(class_.$.parent))
  }
}
