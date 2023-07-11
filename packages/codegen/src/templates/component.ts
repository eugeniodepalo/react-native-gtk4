import { WidgetClass, WidgetClassProperty } from "../index.js"
import { camelize, fromCtype } from "../helpers.js"

interface Props {
  widgetClass: WidgetClass
}

export function getWidgetTypeProps({
  widgetClass,
}: Props): WidgetClassProperty[] {
  return widgetClass.props.filter(
    (prop) => prop.type === "Widget" && prop.name !== "child" && prop.setter
  )
}

export function shouldGenerateComponent({ widgetClass }: Props): boolean {
  const widgetTypeProps = getWidgetTypeProps({ widgetClass })
  return widgetTypeProps.length > 0
}

export default function ({ widgetClass }: Props): string | undefined {
  if (!shouldGenerateComponent({ widgetClass })) {
    return
  }

  const className = camelize(widgetClass.name)
  const type = fromCtype(widgetClass.name)
  const widgetTypeProps = getWidgetTypeProps({ widgetClass })

  let ts = ""

  ts += `import React from "react"\n`
  ts += `import { useState, useCallback, forwardRef } from "react"\n`
  ts += `import { Gtk } from "../../index.js"\n`
  ts += `\n`
  ts += `const ${className} = "${className}"\n`
  ts += `\n`
  ts += `export default forwardRef<${type}, JSX.IntrinsicElements["${className}"]>(function ${className}Component({`

  for (const { name } of widgetTypeProps) {
    ts += `${camelize(name)},`
  }

  ts += ` ...props }, ref) {`

  for (const { name, type } of widgetTypeProps) {
    const propName = camelize(name)
    const propType = fromCtype(type)
    ts += `const [${propName}Ref, ${camelize(
      `set_${name}`
    )}Ref] = useState<${propType} | undefined>()\n`
    ts += `useCallback((node: ${propType}) => {
      ${camelize(`set_${name}`)}Ref(node)
    }, [])\n`
  }

  ts += `return (<>`

  for (const { name } of widgetTypeProps) {
    const propName = camelize(name)
    ts += `{${propName}}`
  }

  ts += `<${className} ref={ref} `

  for (const { name } of widgetTypeProps) {
    const propName = camelize(name)
    ts += `${propName}={${propName}Ref}`
  }

  ts += `{...props} />`
  ts += `</>)`
  ts += `})`

  return ts
}
