import { camelize, fromCtype, importModuleNames } from "../helpers.js"
import { WidgetClass } from "../index.js"

interface Props {
  widgetClasses: WidgetClass[]
}

function generateJsxElementProps(widgetClass: WidgetClass) {
  const { props, signals, name } = widgetClass
  const type = fromCtype(name)

  let ts = `ref?: React.Ref<${type}>\n`

  if (name === "Widget") {
    ts += `children?: React.ReactNode\n`
  }

  for (const { name: propName, type, array } of props) {
    if (propName === "child") {
      continue
    }

    ts += `${camelize(propName)}?: ${fromCtype(type)}${array ? "[]" : ""}\n`
  }

  for (const { name: signalName, params, returnType } of signals) {
    ts += `${camelize(`on_${signalName}`)}?: (`
    ts += `node: ${type}, `

    for (const param of params) {
      const { name, type, array, nullable } = param

      ts += `${camelize(name)}${nullable ? "?" : ""}: ${fromCtype(type)}${
        array ? "[]" : ""
      }, `
    }

    ts += `) => ${fromCtype(returnType)}\n`
  }

  for (const { name: propName } of props) {
    ts += `${camelize(`on_notify_${propName}`)}?: (`
    ts += `node: ${type}`
    ts += `) => void\n`
  }

  return ts
}

interface JsxElementTemplate {
  widgetClass: WidgetClass
  propsSection?: string
}

function generateJsxElement({ widgetClass }: JsxElementTemplate) {
  const { name, parent } = widgetClass
  const parentName = camelize(parent ?? "")

  let ts = `${name}:`

  if (name === "Widget") {
    ts += `{\n`
  } else {
    ts += `JSX.IntrinsicElements["${parentName}"] & {\n`
  }

  ts += generateJsxElementProps(widgetClass)
  ts += `}\n`

  return ts
}

export default function ({ widgetClasses }: Props) {
  let ts = ""

  const requiredImports = new Set<string>()

  for (const { props } of widgetClasses) {
    for (const { type } of props) {
      const propType = fromCtype(type).split(".")[0]

      const moduleName =
        importModuleNames[propType as keyof typeof importModuleNames]

      if (moduleName && !requiredImports.has(moduleName)) {
        requiredImports.add(moduleName)
        ts += `import ${propType} from "${moduleName}"\n`
      }
    }
  }

  ts += `import React from "react"\n`
  ts += `\n`

  ts += `declare global {\n`
  ts += `  namespace JSX {\n`
  ts += `    interface IntrinsicElements {\n`

  for (const widgetClass of widgetClasses) {
    ts += generateJsxElement({ widgetClass })
  }

  ts += `}\n`
  ts += `}\n`
  ts += `}\n`

  return ts
}
