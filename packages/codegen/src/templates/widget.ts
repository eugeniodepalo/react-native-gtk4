import { camelize, fromCtype, underscore } from "../helpers.js"
import { WidgetClass } from "../index.js"

interface Props {
  widgetClass: WidgetClass
}

interface WidgetTemplate {
  widgetClass: WidgetClass
  parentClass?: string
  importSection?: string
  methodSection?: string
}

interface WidgetMethodTemplate {
  widgetClass: WidgetClass
  createNodeMethodSection?: string
  setMethodSection?: string
}

function generateNodeConstructorProps(widgetClass: WidgetClass) {
  let ts = ""

  for (const prop of widgetClass.props) {
    if (prop.constructOnly) {
      const name = camelize(prop.name)
      ts += `${name}: this.props.${name},\n`
    }
  }

  return ts
}

function getSettableProps(widgetClass: WidgetClass) {
  const { props } = widgetClass
  return props.filter((prop) => prop.name !== "child" && prop.writable)
}

export function generateCreateNodeMethod(widgetClass: WidgetClass) {
  const { name } = widgetClass
  const type = fromCtype(name)

  let ts = ""

  ts += `  createNode() {\n`
  ts += `    return new ${type}({${generateNodeConstructorProps(
    widgetClass
  )}}) as T\n`
  ts += `  }\n`

  return ts
}

export function generateSetMethod(widgetClass: WidgetClass) {
  const { props, signals } = widgetClass

  const propNames = [...getSettableProps(widgetClass), ...signals].map(
    (prop) => prop.name
  )

  let ts = ""

  ts += `  set(propName: string, newValue: any, oldValue: any) {\n`
  ts += `    super.set(propName, newValue, oldValue)\n`
  ts += `    switch (propName) {\n`

  for (const { name, setter, writable, constructOnly } of props) {
    if (!propNames.includes(name) || !writable || constructOnly) {
      continue
    }

    const setterName =
      setter === "set_action_target" ? `${setter}_value` : setter

    ts += `      case "${camelize(name)}":\n`

    if (setterName) {
      ts += `        this.node.${camelize(setterName)}(newValue)\n`
      ts += `        break\n`
    } else {
      ts += `        this.node.${camelize(name)} = newValue\n`
      ts += `        break\n`
    }
  }

  for (const { name } of props) {
    ts += `      case "${camelize(`on_notify_${name}`)}":\n`
    ts += `        this.setHandler("notify::${name}", newValue)\n`
    ts += `        break\n`
  }

  for (const { name } of signals) {
    ts += `      case "${camelize(`on_${name}`)}":\n`
    ts += `        this.setHandler("${name}", newValue)\n`
    ts += `        break\n`
  }

  ts += `    }\n`
  ts += `  }\n`

  return ts
}

export function generateMethods({
  widgetClass,
  createNodeMethodSection = generateCreateNodeMethod(widgetClass),
  setMethodSection = generateSetMethod(widgetClass),
}: WidgetMethodTemplate) {
  let ts = ""

  ts += createNodeMethodSection

  if (widgetClass.methods.find((method) => method.$.name === "set_child")) {
    ts += `  appendChild(child: Widget<any>) {\n`
    ts += `    super.appendChild(child)\n`
    ts += `    this.node.setChild(child.node)\n`
    ts += `  }\n`
    ts += `  removeChild(child: Widget<any>) {\n`
    ts += `    super.removeChild(child)\n`
    ts += `    this.node.setChild(null)\n`
    ts += `  }\n`
    ts += `  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {\n`
    ts += `    super.insertBefore(child, beforeChild)\n`
    ts += `    this.node.setChild(child.node)\n`
    ts += `  }\n`
  }

  ts += setMethodSection

  return ts
}

export function generateImports(widgetClass: WidgetClass) {
  const { parent, name } = widgetClass
  const parentClass = name === "Widget" ? "BaseWidget" : parent

  let ts = `import { Gtk } from "../../index.js"\n`

  if (name === "Widget") {
    ts += `import BaseWidget from "../../widget.js"\n`
    ts += `\n`
  } else {
    ts += `import ${parentClass} from "./${parentClass}.js"\n`
    ts += `\n`
  }

  return ts
}

export function generateWidgetFile({
  widgetClass,
  parentClass = widgetClass.name === "Widget"
    ? "BaseWidget"
    : widgetClass.parent,
  importSection = generateImports(widgetClass),
  methodSection = generateMethods({ widgetClass }),
}: WidgetTemplate) {
  const { name } = widgetClass
  const type = fromCtype(name)
  const genericType = `T extends ${type}`

  let ts = ""

  ts += importSection
  ts += `\n`
  ts += `export default class ${widgetClass.name}<${genericType}> extends ${parentClass}<T> {\n`
  ts += methodSection
  ts += `\n`
  ts += `}\n`
  ts += `\n`

  return ts
}

export default function ({ widgetClass }: Props) {
  return generateWidgetFile({ widgetClass })
}
