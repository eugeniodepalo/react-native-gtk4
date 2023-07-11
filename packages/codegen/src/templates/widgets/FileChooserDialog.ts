import { camelize } from "../../helpers.js"
import { WidgetClass } from "../../index.js"
import { generateMethods, generateWidgetFile } from "../widget.js"

interface Props {
  widgetClass: WidgetClass
}

export default function ({ widgetClass }: Props) {
  const { ctor } = widgetClass
  let createNodeMethod = `createNode(container: Container, props: Record<string, any>) {\n`

  createNodeMethod += `  return new Gtk.FileChooserDialog({\n`

  for (const param of ((ctor.parameters || [])[0] || {}).parameter || []) {
    const { name } = param.$
    if (name === "..." || name === "parent" || name === "first_button_text") {
      continue
    }
    createNodeMethod += `${camelize(name)}: props.${camelize(name)},\n`
  }

  createNodeMethod += `}) as T}\n`

  let methodSection = generateMethods({
    widgetClass,
    createNodeMethodSection: createNodeMethod,
  })

  return generateWidgetFile({
    widgetClass,
    methodSection,
  })
}
