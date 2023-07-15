import fs from "fs"
import {
  Gir,
  parseGir,
  getGirWidgetClasses,
  GirInterface,
  GirProperty,
  GirSignal,
  GirMethod,
} from "./gir.js"
import * as templates from "./templates.js"

export interface WidgetClassProperty {
  name: string
  type: string
  array: boolean
  setter?: string
  writable: boolean
  constructOnly: boolean
}

export interface WidgetClassSignalParam {
  name: string
  type: string
  nullable: boolean
  array: boolean
}
export interface WidgetClassSignal {
  name: string
  params: WidgetClassSignalParam[]
}

export interface WidgetClass {
  name: string
  ctor: GirMethod
  parent?: string
  methods: GirMethod[]
  props: WidgetClassProperty[]
  signals: WidgetClassSignal[]
}

async function getWidgetClasses(gir: Gir): Promise<WidgetClass[]> {
  const girWidgetClasses = getGirWidgetClasses(gir)
  const interfacesByName: Record<string, GirInterface> = {}

  for (const namespace of gir.repository.namespace) {
    for (const iface of namespace.interface || []) {
      interfacesByName[iface.$.name] = iface
    }
  }

  const widgetClasses = []

  for (const klass of girWidgetClasses) {
    const interfaceProps = []
    const interfaceSignals = []

    for (const impl of klass.implements || []) {
      const iface = interfacesByName[impl.$.name]

      if (!iface) {
        continue
      }

      for (const prop of iface.property || []) {
        interfaceProps.push(prop)
      }

      for (const signal of iface["glib:signal"] || []) {
        interfaceSignals.push(signal)
      }
    }

    const props = [...(klass.property || []), ...interfaceProps]
    const signals = [...(klass["glib:signal"] || []), ...interfaceSignals]

    const uniqueProps = props.reduce((acc, prop) => {
      if (!acc.find((p) => p.$.name === prop.$.name)) {
        acc.push(prop)
      }

      return acc
    }, [] as GirProperty[])

    const uniqueSignals = signals.reduce((acc, signal) => {
      if (!acc.find((s) => s.$.name === signal.$.name)) {
        acc.push(signal)
      }

      return acc
    }, [] as GirSignal[])

    const widgetClass: WidgetClass = {
      name: klass.$.name,
      methods: klass.method || [],
      ctor: (klass.ctor || [])[0] || {},
      parent: klass.$.name === "Widget" ? undefined : klass.$.parent,
      props: uniqueProps.map((prop) => ({
        name: prop.$.name,
        array: prop.array !== undefined,
        setter: prop.$.setter,
        writable: prop.$.writable === "1",
        constructOnly: prop.$["construct-only"] === "1",
        type: (prop.array ? prop.array[0].type : prop.type)[0].$.name,
      })),
      signals: uniqueSignals.map((signal) => ({
        name: signal.$.name,
        params: (((signal.parameters || [])[0] || {}).parameter || []).map(
          (param) => ({
            name: param.$.name,
            array: param.array !== undefined,
            nullable: !!(
              param.$.nullable === "1" ||
              param.$["allow-none"] === "1" ||
              param.$["default-value"]
            ),
            type: (param.array ? param.array[0].type : param.type)[0].$.name,
          })
        ),
      })),
    }

    widgetClasses.push(widgetClass)
  }

  return widgetClasses
}

function writeToGeneratedFile(path: string, content: string | undefined) {
  if (!content) {
    return
  }
  fs.writeFileSync(`generated/${path}`, content)
}

async function main() {
  const gir = await parseGir()

  const widgetClasses = await getWidgetClasses(gir)

  for (const widgetClass of widgetClasses) {
    writeToGeneratedFile(
      `widgets/${widgetClass.name}.tsx`,
      templates.widget({ widgetClass })
    )
  }

  writeToGeneratedFile("intrinsics.ts", templates.intrinsics({ widgetClasses }))
  writeToGeneratedFile("jsx.ts", templates.jsx({ widgetClasses }))
  writeToGeneratedFile("widgets.ts", templates.widgetIndex({ widgetClasses }))
}

main()
