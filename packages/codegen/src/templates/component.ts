import { WidgetClass, WidgetClassProperty } from "../index.js"
import { camelize, fromCtype } from "../helpers.js"

interface Props {
  widgetClass: WidgetClass
}

function getWidgetTypeProps({ widgetClass }: Props): WidgetClassProperty[] {
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
  ts += `type Props = Omit<JSX.IntrinsicElements["${className}"], `
  for (const { name } of widgetTypeProps) {
    ts += `"${camelize(name)}" | `
  }
  ts += `"ref"> & {\n`
  ts += `\n`
  for (const { name } of widgetTypeProps) {
    const propName = camelize(name)
    ts += `${propName}?: React.ReactElement\n`
  }
  ts += `}\n`
  ts += `\n`
  ts += `const ${className} = "${className}"\n`
  ts += `\n`
  ts += `export default forwardRef<${type}, Props>(function ${className}Component({`

  for (const { name } of widgetTypeProps) {
    ts += `${camelize(name)},`
  }

  ts += ` ...props }, ref) {`

  for (const { name, type } of widgetTypeProps) {
    const propName = camelize(name)
    const propType = fromCtype(type)

    ts += `const [${propName}Node, ${camelize(
      `set_${name}_node`
    )}] = useState<${propType} | undefined>()\n`
    ts += `const ${propName}Ref = useCallback((node: ${propType}) => {
      setTimeout(() => ${camelize(`set_${name}_node`)}(node))
    }, [])\n`
    ts += `const ${propName}Element = ${propName} ? React.cloneElement(${propName}, {
      ref: ${propName}Ref,
    }) : null\n`
  }

  ts += `return (<>`

  for (const { name } of widgetTypeProps) {
    const propName = camelize(name)
    ts += `{${propName}Element}`
  }

  ts += `<${className} ref={ref} `

  for (const { name } of widgetTypeProps) {
    const propName = camelize(name)
    ts += `${propName}={${propName}Node}`
  }

  ts += `{...props} />`
  ts += `</>)`
  ts += `})`

  return ts
}
