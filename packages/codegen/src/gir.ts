import xml2js from "xml2js"
import fs from "fs"

export interface GirAttributes {
  name: string
}

export interface GirRepository {
  namespace: GirNamespace[]
}

export interface GirType {
  $: GirAttributes & {
    name: string
  }
}

export interface GirArray {
  $: GirAttributes
  type: GirType[]
}

export interface GirProperty {
  array?: GirArray[]
  type: GirType[]
  $: GirAttributes & {
    "default-value"?: string
    "allow-none"?: string
    nullable?: string
    setter?: string
  }
}

export interface GirEnumeration {
  $: GirAttributes
}

export interface GirParameters {
  parameter: GirParameter[]
}

export interface GirParameter {
  $: GirAttributes & {
    "allow-none"?: string
    "default-value"?: string
    nullable?: string
  }
  array?: GirArray[]
  type: GirType[]
}

export interface GirMethod {
  $: GirAttributes
  parameters: GirParameters[]
}

export interface GirSignal {
  $: GirAttributes
  parameters: GirParameters[]
}

export interface GirInterface {
  $: GirAttributes
  property?: GirProperty[]
  signal?: GirSignal[]
  method?: GirMethod[]
  "glib:signal"?: GirSignal[]
}

export interface GirClass {
  $: GirAttributes & {
    parent?: string
    deprecated?: string
  }
  implements?: GirInterface[]
  ctor?: GirMethod[]
  signal?: GirSignal[]
  method?: GirMethod[]
  property?: GirProperty[]
  "glib:signal"?: GirSignal[]
}

export interface GirNamespace {
  $: GirAttributes
  interface?: GirInterface[]
  class?: GirClass[]
  enumeration?: GirEnumeration[]
}

export interface Gir {
  repository: GirRepository
}

function nameProcessor(name: string) {
  return name === "constructor" ? "ctor" : name
}

export async function parseGir(): Promise<Gir> {
  const data = fs.readFileSync("Gtk-4.0.gir")
  const parser = new xml2js.Parser({
    attrNameProcessors: [nameProcessor],
    tagNameProcessors: [nameProcessor],
  })
  const result = await parser.parseStringPromise(data)
  return result
}

function isDescendantOfWidget(
  classesByName: Record<string, GirClass>,
  className: string
) {
  if (className === "Widget") {
    return true
  }
  const klass = classesByName[className]
  if (!klass) {
    return false
  }
  const parentClassName = klass.$.parent
  if (!parentClassName) {
    return false
  }
  return isDescendantOfWidget(classesByName, parentClassName)
}

function isDeprecated(
  classesByName: Record<string, GirClass>,
  className: string
) {
  const klass = classesByName[className]
  if (className === "Widget") {
    return false
  }

  if (klass.$.deprecated === "1") {
    return true
  }

  const parentClassName = klass.$.parent
  if (!parentClassName) {
    return false
  }

  return isDeprecated(classesByName, parentClassName)
}

export function getGirWidgetClasses(gir: Gir) {
  const classesByName: Record<string, GirClass> = {}

  for (const namespace of gir.repository.namespace) {
    for (const klass of namespace.class || []) {
      classesByName[klass.$.name] = klass
    }
  }

  const widgetClasses = (gir.repository.namespace[0].class || []).filter(
    (klass) =>
      isDescendantOfWidget(classesByName, klass.$.name) &&
      !isDeprecated(classesByName, klass.$.name)
  )

  return widgetClasses
}
