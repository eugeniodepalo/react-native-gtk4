import { Gir } from "@/gir.js"

export default function (gir: Gir) {
  let ts = ""

  ts += `import React from "react"\n`

  for (const type of gir.typeDependencies) {
    ts += `import ${type.import_.name} from "${type.import_.moduleName}"\n`
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
      ts += `${prop.name}?: ${prop.type?.name}${
        prop.isArray ? "[]" : ""
      }${prop.isOptional ? " | null" : ""}\n`
    }

    for (const signal of widgetClass.signals) {
      ts += `${signal.name}?: (node: ${widgetClass.type.name}, \n`

      for (const param of signal.params) {
        ts += `${param.name}: ${param.type?.name}${
          param.isArray ? "[]" : ""
        }${param.isOptional ? " | null" : ""},\n`
      }

      ts += `) => ${signal.returnType?.name}\n`
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
