import { GirProperty } from "../gir.js"
import { camelize, fromCtype, underscore } from "../helpers.js"
import { WidgetClass, WidgetClassProperty } from "../index.js"
import { isContainerWidget, isSingleChildContainerWidget } from "./widget.js"

interface Props {
  enums: string[]
  widgetClasses: WidgetClass[]
}

export function isPropNullable(prop: GirProperty, enums: string[]) {
  if (prop.array) {
    return true
  }

  const type = fromCtype(prop.type[0].$.name)

  if (["string", "number", "boolean", "Gtk.Widget"].includes(type)) {
    return true
  }

  if (
    [
      "cursor",
      "layout_manager",
      "root",
      "display",
      "action_target",
      "transient_for",
    ].includes(underscore(prop.$.name))
  ) {
    return true
  }

  if (enums.includes(prop.type[0].$.name)) {
    return true
  }

  const {
    nullable,
    "allow-none": allowNone,
    "default-value": defaultValue,
  } = prop.$

  return !!(nullable === "1" || allowNone === "1" || defaultValue)
}

export function paramsToJsxElementProps(
  widgetClass: WidgetClass,
  enums: string[]
): WidgetClassProperty[] {
  const props: WidgetClassProperty[] = []
  const { ctor } = widgetClass

  for (const param of ((ctor.parameters || [])[0] || {}).parameter || []) {
    const { name } = param.$

    if (props.map((prop) => underscore(prop.name)).includes(underscore(name))) {
      continue
    }

    props.push({
      name,
      type: param.array
        ? `${param.array[0].type[0].$.name}[]`
        : param.type[0].$.name,
      nullable: isPropNullable(param, enums),
      array: !!param.array,
    })
  }

  return props
}

export function generateJsxElementProps(
  widgetClass: WidgetClass,
  enums: string[]
) {
  const { props, signals, name } = widgetClass
  const type = fromCtype(name)
  let ts = ""

  ts += `ref?: React.Ref<${type}>\n`

  if (isContainerWidget(widgetClass)) {
    ts += `children?: React.ReactNode\n`
  } else if (isSingleChildContainerWidget(widgetClass)) {
    ts += `children?: React.ReactElement\n`
  }

  const uniqueProps = paramsToJsxElementProps(widgetClass, enums)

  for (const prop of props) {
    const { name } = prop

    if (name === "child") {
      continue
    }

    if (
      uniqueProps
        .map((prop) => underscore(prop.name))
        .includes(underscore(name))
    ) {
      continue
    }

    uniqueProps.push(prop)
  }

  for (const { name: propName, type, array, nullable } of uniqueProps) {
    if (propName === "child") {
      continue
    }

    ts += `${camelize(propName)}${nullable ? "?" : ""}: ${fromCtype(type)}${
      array ? "[]" : ""
    }\n`
  }

  for (const { name: signalName, params } of signals) {
    ts += `${camelize(`on_${signalName}`)}?: (`

    for (const param of params) {
      const { name, type, array, nullable } = param
      ts += `${camelize(name)}${nullable ? "?" : ""}: ${fromCtype(type)}${
        array ? "[]" : ""
      }, `
    }

    ts += `) => boolean\n`
  }

  return ts
}

export interface JsxElementTemplate {
  widgetClass: WidgetClass
  propsSection?: string
  enums: string[]
}

export function generateJsxElement({
  widgetClass,
  enums,
  propsSection = generateJsxElementProps(widgetClass, enums),
}: JsxElementTemplate) {
  const { name, parent } = widgetClass
  const parentName = camelize(parent ?? "")
  let ts = ""

  ts += `${name}:`

  if (name === "Widget") {
    ts += `{\n`
  } else {
    ts += `JSX.IntrinsicElements["${parentName}"] & {\n`
  }

  ts += propsSection
  ts += `}\n`

  return ts
}

export default function ({ widgetClasses, enums }: Props) {
  let ts = ""

  const requiredImports = new Set<string>()

  for (const widgetClass of widgetClasses) {
    const { props } = widgetClass

    for (const { type, setter } of props) {
      const importName = fromCtype(type)
      if (importName.includes(".") && setter) {
        requiredImports.add(importName.split(".")[0])
      }
    }

    for (const { type } of paramsToJsxElementProps(widgetClass, enums)) {
      const importName = fromCtype(type)
      if (importName.includes(".")) {
        requiredImports.add(importName.split(".")[0])
      }
    }
  }

  ts += `import { \n`

  for (const importName of requiredImports) {
    ts += `${importName}, `
  }

  ts += `} from "../index.js"\n`

  ts += `import React from "react"\n`
  ts += `\n`

  ts += `declare global {\n`
  ts += `  namespace JSX {\n`
  ts += `    interface IntrinsicElements {\n`

  for (const widgetClass of widgetClasses) {
    ts += generateJsxElement({ widgetClass, enums })
  }

  ts += `}\n`
  ts += `}\n`
  ts += `}\n`

  return ts
}
