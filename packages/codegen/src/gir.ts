import { GirClass } from "./gir/class.js"
import { GirModule, InheritanceTable } from "@ts-for-gir/lib"
import { ModuleLoader } from "./module-loader.js"

const ROOT_PATH = `${__dirname}/..`

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
    const [{ module }] = await moduleLoader.getModulesResolved(["Gtk-4.0"])

    module.init(inheritanceTable)
    module.start([module])

    return new Gir(module)
  }

  constructor(gir: GirModule) {
    this.module = gir
  }

  get widgetClasses() {
    return this.classes
      .filter(this.isWidgetClass.bind(this))
      .map((c) => new GirClass(c, this))
  }

  get classes() {
    return this.namespace.class_.filter(
      (c) => !["Inscription"].includes(c.$.name)
    )
  }

  get interfaces() {
    return this.namespace.interface
  }

  get enumerations() {
    return [
      ...this.namespace.enumeration,
      {
        $: {
          name: "Pango.EllipsizeMode",
        },
        member: [
          {
            $: {
              name: "NONE",
            },
          },
          {
            $: {
              name: "START",
            },
          },
          {
            $: {
              name: "MIDDLE",
            },
          },
          {
            $: {
              name: "END",
            },
          },
        ],
      },
      {
        $: {
          name: "Pango.WrapMode",
        },
        member: [
          {
            $: {
              name: "WORD",
            },
          },
          {
            $: {
              name: "CHAR",
            },
          },
          {
            $: {
              name: "WORD_CHAR",
            },
          },
        ],
      },
      {
        $: {
          name: "Gdk.GLAPI",
        },
        member: [
          {
            $: {
              name: "GL",
            },
          },
          {
            $: {
              name: "GLES",
            },
          },
        ],
      },
    ]
  }

  get bitfields() {
    return this.namespace.bitfield
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
    if (!name) {
      return null
    }

    return this.interfaces.find((i) => i.$.name === name)
  }

  findClassByName(name) {
    if (!name) {
      return null
    }

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
