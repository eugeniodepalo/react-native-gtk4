import { camelize } from "../../helpers.js"
import { WidgetClass } from "../../index.js"
import { generateMethods, generateWidgetFile } from "../widget.js"

interface Props {
  widgetClass: WidgetClass
}

export default function ({ widgetClass }: Props) {
  const { ctor } = widgetClass

  let createNodeSection = `createNode(container: Container, props: Record<string, any>) {\n`
  createNodeSection += `  return new Gtk.MessageDialog({\n`

  for (const param of ((ctor.parameters || [])[0] || {}).parameter || []) {
    const { name } = param.$
    if (
      name === "..." ||
      name === "parent" ||
      name === "flags" ||
      name === "message_format" ||
      name === "type"
    ) {
      continue
    }
    createNodeSection += `${camelize(name)}: props.${camelize(name)},\n`
  }

  createNodeSection += `}) as T}\n`

  let methodSection = generateMethods({
    widgetClass,
    createNodeMethodSection: createNodeSection,
  })

  return generateWidgetFile({
    widgetClass,
    methodSection,
  })
}
