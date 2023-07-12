import { camelize, fromCtype } from "../helpers.js"
import { WidgetClass } from "../index.js"
import BoxTemplate from "./widgets/Box.js"
import WidgetTemplate from "./widgets/Widget.js"
import ApplicationWindowTemplate from "./widgets/ApplicationWindow.js"
import FileChooserDialogTemplate from "./widgets/FileChooserDialog.js"
import MessageDialogTemplate from "./widgets/MessageDialog.js"

const templates = {
  Box: BoxTemplate,
  Widget: WidgetTemplate,
  ApplicationWindow: ApplicationWindowTemplate,
  FileChooserDialog: FileChooserDialogTemplate,
  MessageDialog: MessageDialogTemplate,
} as const

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

export function generateNodeConstructorProps(widgetClass: WidgetClass) {
  const { ctor } = widgetClass

  let ts = ""

  for (const param of ((ctor.parameters || [])[0] || {}).parameter || []) {
    const { name } = param.$
    if (name === "...") {
      continue
    }
    ts += `props.${camelize(name)},\n`
  }

  return ts
}

export function generateCreateNodeMethod(widgetClass: WidgetClass) {
  const { name } = widgetClass
  const type = fromCtype(name)

  let ts = ""

  ts += `  createNode(container: Container, props: Record<string, any>) {\n`
  ts += `    return new ${type}(${generateNodeConstructorProps(
    widgetClass
  )}) as T\n`
  ts += `  }\n`

  return ts
}

export function generateSetMethod(widgetClass: WidgetClass) {
  const { props, signals } = widgetClass

  const propNames = [
    ...props.filter((prop) => prop.name !== "child" && prop.setter),
    ...signals,
  ].map((prop) => prop.name)

  if (propNames.length === 0) {
    return ""
  }

  let ts = ""

  ts += `  set(propName: string, newValue: any, oldValue: any) {\n`
  ts += `    super.set(propName, newValue, oldValue)\n`
  ts += `    switch (propName) {\n`

  for (const { name, setter } of props) {
    if (name === "child" || !setter) {
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

  if (widgetClass.props.filter((prop) => prop.name === "child").length !== 0) {
    ts += `\n`
    ts += `  appendChild(child: Widget<any>) {\n`
    ts += `    this.node.setChild(child.node)\n`
    ts += `  }\n`
    ts += `  removeChild(child: Widget<any>) {\n`
    ts += `    this.node.setChild(null)\n`
    ts += `  }\n`
  }

  ts += setMethodSection

  return ts
}

export function generateImports(widgetClass: WidgetClass) {
  const { parent } = widgetClass
  const parentClass = camelize(parent ?? "widget")

  let ts = ""

  ts += `import { Container, Gtk } from "../../index.js"\n`
  ts += `import ${parentClass} from "./${parentClass}.js"\n`
  ts += `\n`

  return ts
}

export function generateWidgetFile({
  widgetClass,
  parentClass = camelize(widgetClass.parent ?? "widget"),
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
  const templateName = widgetClass.name as keyof typeof templates
  const template = templates[templateName]

  if (template) {
    return template({ widgetClass })
  }

  return generateWidgetFile({ widgetClass })
}
