import { camelize } from "../../helpers.js"
import { WidgetClass } from "../../index.js"
import { generateMethods, generateWidgetFile } from "../widget.js"

interface Props {
  widgetClass: WidgetClass
}

export default function ({ widgetClass }: Props) {
  const { ctor } = widgetClass
  let createNodeMethod = `createNode(container: Container, props: Record<string, any>) {\n`
  createNodeMethod += `  return new Gtk.ApplicationWindow({\n`
  createNodeMethod += `    application: container.app,\n`

  for (const param of ((ctor.parameters || [])[0] || {}).parameter || []) {
    const { name } = param.$
    if (name === "..." || name === "application" || name === "parent") {
      continue
    }
    createNodeMethod += `${camelize(name)}: props.${camelize(name)},\n`
  }

  createNodeMethod += `}) as T\n`
  createNodeMethod += `}\n`

  let methodSection = generateMethods({
    widgetClass,
    createNodeMethodSection: createNodeMethod,
  })

  methodSection += `commitMount() {\n`
  methodSection += `  super.commitMount()\n`
  methodSection += `  this.node.present()\n`
  methodSection += `  this.node.on("close-request", () => {\n`
  methodSection += `    if (this.container.app.getWindows().length === 1) {\n`
  methodSection += `      this.container.app.quit()\n`
  methodSection += `      this.container.loop.quit()\n`
  methodSection += `      return false\n`
  methodSection += `    }\n`
  methodSection += `    return true\n`
  methodSection += `  })\n`
  methodSection += `}\n`

  return generateWidgetFile({
    widgetClass,
    methodSection,
  })
}
