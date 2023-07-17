import { camelize, fromCtype } from "../helpers.js"
import { WidgetClass } from "../index.js"

interface Props {
  widgetClass: WidgetClass
}

function generateCreateNodeMethod(widgetClass: WidgetClass) {
  const { name } = widgetClass
  const type = fromCtype(name)

  let ts = ""
  ts += `  createNode() {\n`
  ts += `    return new ${type}({\n`

  for (const prop of widgetClass.props) {
    if (prop.constructOnly) {
      const name = camelize(prop.name)
      ts += `${name}: this.props.${name},\n`
    }
  }

  ts += `}) as T\n`
  ts += `  }\n`

  return ts
}

function generateSetMethod(widgetClass: WidgetClass) {
  const { props, signals } = widgetClass

  const settableProps = props.filter(
    (prop) => prop.writable && !prop.constructOnly && prop.name !== "child"
  )

  let ts = `set(propName: string, newValue: any, oldValue: any) {\n`
  ts += `  super.set(propName, newValue, oldValue)\n`
  ts += `  switch (propName) {\n`

  for (const { name, setter } of settableProps) {
    const setterName =
      setter === "set_action_target" ? `${setter}_value` : setter

    ts += `case "${camelize(name)}":\n`

    if (setterName) {
      ts += `this.node.${camelize(setterName)}(newValue)\n`
      ts += `break\n`
    } else {
      ts += `this.node.${camelize(name)} = newValue\n`
      ts += `break\n`
    }
  }

  for (const { name } of signals) {
    ts += `case "${camelize(`on_${name}`)}":\n`
    ts += `  this.setHandler("${name}", newValue)\n`
    ts += `  break\n`
  }

  for (const { name } of props) {
    ts += `case "${camelize(`on_notify_${name}`)}":\n`
    ts += `  this.setHandler("notify::${name}", newValue)\n`
    ts += `  break\n`
  }

  ts += `  }\n`
  ts += `}\n`

  return ts
}

function generateMethods(widgetClass: WidgetClass) {
  let ts = generateCreateNodeMethod(widgetClass)

  if (widgetClass.methods.find((method) => method.$.name === "set_child")) {
    ts += `appendChild(child: Widget) {\n`
    ts += `  super.appendChild(child)\n`
    ts += `  this.node.setChild(child.node)\n`
    ts += `}\n`
    ts += `removeChild(child: Widget) {\n`
    ts += `  super.removeChild(child)\n`
    ts += `  this.node.setChild(null)\n`
    ts += `}\n`
    ts += `insertBefore(child: Widget, beforeChild: Widget) {\n`
    ts += `  super.insertBefore(child, beforeChild)\n`
    ts += `  this.node.setChild(child.node)\n`
    ts += `}\n`
  }

  ts += generateSetMethod(widgetClass)

  return ts
}

function generateImports(widgetClass: WidgetClass) {
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

export default function ({ widgetClass }: Props) {
  const { name } = widgetClass
  const type = fromCtype(name)
  const genericType = `T extends ${type} = ${type}`

  const parentClass =
    widgetClass.name === "Widget" ? "BaseWidget" : widgetClass.parent

  let ts = generateImports(widgetClass)
  ts += `\n`
  ts += `export default class ${widgetClass.name}<${genericType}> extends ${parentClass}<T> {\n`
  ts += generateMethods(widgetClass)
  ts += `\n`
  ts += `}\n`
  ts += `\n`

  return ts
}
