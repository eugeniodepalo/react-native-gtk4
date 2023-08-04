import { camelize } from "../helpers.js"

export default function (gir) {
  let ts = ""

  ts += `import React from "react"\n`

  for (const import_ of gir.imports) {
    ts += `import ${import_.name} from "${import_.moduleName}"\n`
  }

  ts += `\n`
  ts += `declare global {\n`
  ts += `  namespace JSX {\n`
  ts += `    interface IntrinsicElements {\n`

  for (const widgetClass of gir.widgetClasses) {
    if (widgetClass.parent) {
      ts += `${widgetClass.name}: JSX.IntrinsicElements["${widgetClass.parent.name}"] & {\n`
    } else {
      ts += `${widgetClass.name}: {\n`
    }

    ts += `  ref?: React.Ref<${widgetClass.type.name}>\n`

    if (widgetClass.name === "Widget") {
      ts += `children?: React.ReactNode\n`
    }

    for (const prop of widgetClass.writableProps) {
      ts += `${prop.name}${prop.isOptional ? "?" : ""}: ${prop.type.name}${
        prop.isArray ? "[]" : ""
      }${prop.isOptional ? " | null" : ""}\n`
    }

    for (const signal of widgetClass.signals) {
      ts += `${signal.name}?: (node: ${widgetClass.type.name}, \n`

      for (const param of signal.params) {
        ts += `${param.name}${param.isOptional ? "?" : ""}: ${param.type.name}${
          param.isArray ? "[]" : ""
        }, \n`
      }

      ts += `) => ${signal.returnType.name}\n`
    }

    for (const prop of widgetClass.props) {
      ts += `${prop.notifyHandlerName}?: (node: ${widgetClass.type.name}) => void\n`
    }

    ts += `}\n`
  }

  ts += `    }\n`
  ts += `  }\n`
  ts += `}\n`

  return ts
}
