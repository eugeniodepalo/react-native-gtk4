import { camelize } from "../helpers"

export default function (widgetClass) {
  let ts = ""

  ts += `import ${widgetClass.import_.name} from "${widgetClass.import_.moduleName}"\n`
  ts += `import ${widgetClass.parentImport.name} from "${widgetClass.parentImport.moduleName}"\n`

  if (widgetClass.isContainer) {
    ts += `import AbstractWidget from "../../abstract/widget.js"\n`
  }

  ts += `\n`
  ts += `export default class ${widgetClass.name}<`
  ts += `  T extends ${widgetClass.type.name} = ${widgetClass.type.name}`
  ts += `> `
  ts += `extends ${widgetClass.parentImport.name}<T> {\n`

  ts += `  static createNode(${
    widgetClass.constructOnlyProps.length > 0
      ? "props: Record<string, any> = {}"
      : ""
  }) {\n`

  ts += `    return new ${widgetClass.type.name}({\n`

  for (const prop of widgetClass.constructOnlyProps) {
    ts += `${prop.name}: props.${prop.name},\n`
  }

  ts += `  })\n`
  ts += `}\n`

  if (widgetClass.name === "Widget") {
    ts += `commitMount() {}\n`
  }

  if (widgetClass.isContainer) {
    ts += `appendChild(child: AbstractWidget) {\n`
    ts += `  super.appendChild(child)\n`
    ts += `  this.node.setChild(child.node)\n`
    ts += `}\n`
    ts += `removeChild(child: AbstractWidget) {\n`
    ts += `  super.removeChild(child)\n`
    ts += `  this.node.setChild(null)\n`
    ts += `}\n`
    ts += `insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {\n`
    ts += `  super.insertBefore(child, beforeChild)\n`
    ts += `  this.node.setChild(child.node)\n`
    ts += `}\n`
  }

  ts += `set(propName: string, newValue: any) {\n`

  if (widgetClass.name !== "Widget") {
    ts += `  super.set(propName, newValue)\n`
  }

  ts += `  switch (propName) {\n`

  for (const prop of widgetClass.settableProps) {
    ts += `case "${prop.name}":\n`

    const getter = prop.getter
      ? `this.node.${prop.getter}()`
      : `this.node.${prop.name}`

    const setter = prop.setter
      ? `this.node.${prop.setter}(newValue)`
      : `this.node.${prop.name} = newValue`

    if (prop.isWriteonly) {
      ts += `${setter}\n`
    } else {
      ts += `if (${getter} !== newValue) {\n`
      ts += `  ${setter}\n`
      ts += `}\n`
    }

    ts += `break\n`
  }

  for (const signal of widgetClass.signals) {
    ts += `      case "${signal.name}":\n`
    ts += `        this.setHandler("${signal.rawName}", newValue)\n`
    ts += `        break\n`
  }

  for (const prop of widgetClass.props) {
    ts += `      case "${camelize(`on_notify_${prop.rawName}`)}":\n`
    ts += `        this.setHandler("notify::${prop.rawName}", newValue)\n`
    ts += `        break\n`
  }

  ts += `      /* istanbul ignore next */\n`
  ts += `      default:\n`
  ts += `        break\n`
  ts += `    }\n`
  ts += `  }\n`
  ts += `}\n`

  return ts
}
