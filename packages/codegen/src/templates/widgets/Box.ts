import { WidgetClass } from "../../index.js"
import { generateMethods, generateWidgetFile } from "../widget.js"

interface Props {
  widgetClass: WidgetClass
}

export default function ({ widgetClass }: Props) {
  let methodSection = generateMethods({ widgetClass })

  methodSection += `appendChild(child: Widget<any>) {\n`
  methodSection += `  this.node.append(child.node)\n`
  methodSection += `}\n`
  methodSection += `removeChild(child: Widget<any>) {\n`
  methodSection += `  this.node.remove(child.node)\n`
  methodSection += `}\n`

  return generateWidgetFile({
    widgetClass,
    methodSection,
  })
}
