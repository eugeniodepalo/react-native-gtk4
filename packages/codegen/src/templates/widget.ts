import { camelize, fromCtype } from "../helpers.js"
import { WidgetClass } from "../index.js"

interface Props {
  widgetClass: WidgetClass
}

export interface WidgetTemplate {
  widgetClass: WidgetClass
  parentClass?: string
  importSection?: string
  methodSection?: string
}

export interface WidgetMethodTemplate {
  widgetClass: WidgetClass
  createNodeMethodSection?: string
  setMethodSection?: string
}

export function isContainerWidget(widgetClass: WidgetClass) {
  return (
    widgetClass.methods.some((method) => method.$.name === "append") &&
    widgetClass.methods.some((method) => method.$.name === "remove")
  )
}

export function isSingleChildContainerWidget(widgetClass: WidgetClass) {
  return widgetClass.methods.some((method) => method.$.name === "set_child")
}

export function generateNodeConstructorProps(widgetClass: WidgetClass) {
  const { ctor } = widgetClass

  let ts = ""

  for (const param of ((ctor.parameters || [])[0] || {}).parameter || []) {
    const { name } = param.$
    ts += `props.${camelize(name)},\n`
  }

  return ts
}

function getSettableProps(widgetClass: WidgetClass) {
  const { props } = widgetClass
  return props.filter((prop) => prop.name !== "child" && prop.setter)
}

export function generateCreateNodeMethod(widgetClass: WidgetClass) {
  const { name } = widgetClass
  const type = fromCtype(name)

  let ts = ""

  ts += `  createNode(props: Record<string, any>) {\n`
  ts += `    return new ${type}(${generateNodeConstructorProps(
    widgetClass
  )}) as T\n`
  ts += `  }\n`

  return ts
}

export function generateSetMethod(widgetClass: WidgetClass) {
  const { props, signals } = widgetClass

  const propNames = [...getSettableProps(widgetClass), ...signals].map(
    (prop) => prop.name
  )

  if (propNames.length === 0) {
    return ""
  }

  let ts = ""

  ts += `  set(propName: string, newValue: any, oldValue: any) {\n`
  ts += `    super.set(propName, newValue, oldValue)\n`
  ts += `    switch (propName) {\n`

  for (const { name, setter } of props) {
    if (!propNames.includes(name) || !setter) {
      continue
    }

    const setterName =
      setter === "set_action_target" ? `${setter}_value` : setter

    ts += `      case "${camelize(name)}":\n`
    ts += `        this.node.${camelize(setterName)}(newValue)\n`
    ts += `        break\n`
  }

  for (const { name } of signals) {
    ts += `      case "${camelize(`on_${name}`)}":\n`
    ts += `        if (oldValue) {\n`
    ts += `          this.node.off("${name}", oldValue)\n`
    ts += `        }\n`
    ts += `        if (newValue) {\n`
    ts += `          this.node.on("${name}", newValue)\n`
    ts += `        }\n`
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

  if (isSingleChildContainerWidget(widgetClass)) {
    ts += `\n`
    ts += `  appendChild(child: Widget<any>) {\n`
    ts += `    this.node.setChild(child.node)\n`
    ts += `  }\n`
    ts += `  removeChild(child: Widget<any>) {\n`
    ts += `    this.node.setChild(null)\n`
    ts += `  }\n`
  } else if (isContainerWidget(widgetClass)) {
    ts += `\n`
    ts += `  appendChild(child: Widget<any>) {\n`
    ts += `    this.node.append(child.node)\n`
    ts += `  }\n`
    ts += `  removeChild(child: Widget<any>) {\n`
    ts += `    this.node.remove(child.node)\n`
    ts += `  }\n`
  }

  ts += setMethodSection

  return ts
}

export function generateImports(widgetClass: WidgetClass) {
  const { parent, name } = widgetClass
  const parentClass = name === "Widget" ? "BaseWidget" : parent

  let ts = `import { Container, Gtk } from "../../index.js"\n`

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
