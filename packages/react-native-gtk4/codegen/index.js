import xml2js from "xml2js"
import fs from "fs"
import { execSync } from "child_process"

function camelize(str) {
  return str.replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase()
  })
}

const typeMap = {
  utf8: "string",
  gboolean: "boolean",
  guint: "number",
  gint: "number",
  gdouble: "number",
  gfloat: "number",
  Widget: "React.ReactElement | null",
}

async function parseGIR(file) {
  const data = fs.readFileSync(file)
  const parser = new xml2js.Parser()
  const result = await parser.parseStringPromise(data)
  return result
}

function isDescendantOfWidget(className, parentClassDict) {
  if (className === "Widget") {
    return true
  }

  while (className in parentClassDict) {
    className = parentClassDict[className]

    if (className === "Widget") {
      return true
    }
  }

  return false
}

async function getWidgetClasses(gir) {
  const parentClassDict = {}

  for (const namespace of gir.repository.namespace) {
    for (const klass of namespace.class || []) {
      if ("$" in klass && "parent" in klass.$) {
        parentClassDict[klass.$.name] = klass.$.parent
      }
    }
  }

  const interfaceDict = {}

  for (const namespace of gir.repository.namespace) {
    for (const iface of namespace.interface || []) {
      interfaceDict[iface.$.name] = iface
    }
  }

  const widgetClasses = []

  for (const namespace of gir.repository.namespace) {
    for (const klass of namespace.class || []) {
      if (isDescendantOfWidget(klass.$.name, parentClassDict)) {
        const interfaceProps = []
        const interfaceSignals = []

        for (const iface of klass.implements || []) {
          const ifaceName = iface.$.name
          const ifaceObj = interfaceDict[ifaceName]

          if (!ifaceObj) {
            continue
          }

          for (const prop of ifaceObj.property || []) {
            interfaceProps.push(prop)
          }

          for (const signal of ifaceObj["glib:signal"] || []) {
            interfaceSignals.push(signal)
          }
        }

        const props = [...(klass.property || []), ...interfaceProps]
        const signals = [...(klass["glib:signal"] || []), ...interfaceSignals]

        const widgetClass = {
          name: klass.$.name,
          parent: klass.$.name === "Widget" ? null : klass.$.parent,
          props: props.map((prop) => ({
            name: prop.$.name,
            isArray: "array" in prop,
            type: (prop.array ? prop.array[0].type : prop.type)[0].$.name,
          })),
          signals: signals.map((signal) => ({
            name: signal.$.name,
            args: (
              (signal.parameter && signal.parameter[0].instance_parameter) ||
              []
            ).map((param) => ({
              name: param.$.name,
              isArray: "array" in prop,
              type: (prop.array ? prop.array.type : prop.type)[0].$.name,
            })),
          })),
        }

        widgetClasses.push(widgetClass)
      }
    }
  }

  return widgetClasses
}

function generateWidgetFile(widgetClass) {
  const { name, props, signals, parent } = widgetClass
  let ts = ""
  ts += `import { Container, Gtk } from "../index.js"\n`

  if (name === "Widget") {
    ts += `import BaseWidget from "../widget.js"\n`
  } else {
    ts += `import ${parent} from "./${parent}.js"\n`
  }

  ts += `\n`
  ts += `export default class ${name} extends ${
    name === "Widget" ? "BaseWidget" : parent
  } {\n`
  ts += `  createNode(container: Container) {\n`
  ts += `    return new Gtk.${name}()\n`
  ts += `  }\n`

  if (props.map((prop) => prop.name).includes("child")) {
    ts += `appendChild(child: Widget) {\n`
    ts += `  this.node.setChild(child.node)\n`
    ts += `}\n`
    ts += `removeChild(child: Widget) {\n`
    ts += `  this.node.setChild(null)\n`
    ts += `}\n`
  }

  ts += `set(propName: string, newValue: any, oldValue: any) {\n`
  ts += `  super.set(propName, newValue, oldValue)\n`
  ts += `  switch (propName) {\n`

  for (const { name: propName } of props) {
    if (propName === "child") {
      continue
    }

    ts += `case "${camelize(propName)}":\n`
    ts += `  this.node.${camelize(`set-${propName}`)}(newValue)\n`
    ts += `  break\n`
  }

  for (const { name: signalName } of signals) {
    ts += `case "${camelize(`on-${signalName}`)}":\n`
    ts += `  if (oldValue) {\n`
    ts += `    this.node.off("${signalName}", oldValue)\n`
    ts += `  }\n`
    ts += `  if (newValue) {\n`
    ts += `    this.node.on("${signalName}", newValue)\n`
    ts += `  }\n`
    ts += `  break\n`
  }

  ts += `default:\n`
  ts += `  break\n`
  ts += `}\n`
  ts += `}\n`
  ts += `}\n`

  fs.writeFileSync(`src/widgets/${name}.ts`, ts)
}

function generateComponentsIndexFile(widgetClasses) {
  let ts = ""

  for (const { name, props } of widgetClasses) {
    const widgetTypeProps = props.filter(
      (prop) => prop.type === "Widget" && prop.name !== "child"
    )

    if (widgetTypeProps.length === 0) {
      continue
    }

    ts += `export { default as ${name} } from "./components/${name}.js"\n`
  }

  fs.writeFileSync(`src/components.ts`, ts)
}

function generateWidgetsIndexFile(widgetClasses) {
  let ts = ""

  for (const { name, props } of widgetClasses) {
    const widgetTypeProps = props.filter(
      (prop) => prop.type === "Widget" && prop.name !== "child"
    )

    if (widgetTypeProps.length !== 0) {
      continue
    }

    ts += `export const ${name} = "${name}"\n`
  }

  fs.writeFileSync(`src/elements.ts`, ts)
}

function generateJSXDefinitionFile(widgetClasses) {
  let ts = ""
  ts += `declare namespace JSX {\n`
  ts += `  interface IntrinsicElements {\n`

  for (const { name, props, signals, parent } of widgetClasses) {
    ts += `    ${name}:`

    if (name !== "Widget") {
      ts += `JSX.IntrinsicElements["${parent}"] & {\n`
    } else {
      ts += `{\n`
      ts += `ref?: React.Ref<any>\n`
    }

    if (name === "Box") {
      ts += `children?: React.ReactNode\n`
    }

    if (props.map((prop) => prop.name).includes("child")) {
      ts += `children?: React.ReactElement\n`
    }

    for (const { name: propName, type, isArray } of props) {
      if (propName === "child") {
        continue
      }
      const isNamespaced = type.includes(".")
      const propType = isNamespaced ? type : `Gtk.${type}`
      ts += `${camelize(propName)}?: ${typeMap[type] || propType}${
        isArray ? "[]" : ""
      }\n`
    }

    for (const { name: signalName } of signals) {
      ts += `${camelize(`on-${signalName}`)}?: () => void\n`
    }

    ts += `}\n`
  }
  ts += `}\n`
  ts += `}\n`

  fs.writeFileSync(`jsx.d.ts`, ts)
}

function generateRegistryFile(widgetClasses) {
  let ts = ""

  for (const { name } of widgetClasses) {
    ts += `import ${name} from "./widgets/${name}.js"\n`
  }

  ts += `\n`
  ts += `export {\n`

  for (const { name } of widgetClasses) {
    ts += `${name},\n`
  }

  ts += `}\n`
  fs.writeFileSync(`src/registry.ts`, ts)
}

function generateComponentFile(widgetClass) {
  const { name, props } = widgetClass

  const widgetTypeProps = props.filter(
    (prop) => prop.type === "Widget" && prop.name !== "child"
  )

  if (widgetTypeProps.length === 0) {
    return
  }

  let ts = ""
  ts += `import React from "react"\n`
  ts += `import { useState, useCallback, forwardRef } from "react"\n`
  ts += `\n`
  ts += `const ${name} = "${name}"\n`
  ts += `\n`
  ts += `export default forwardRef<any, JSX.IntrinsicElements["${name}"]>(function ${name}Component({ `
  ts += widgetTypeProps.map((prop) => camelize(prop.name)).join(", ")
  ts += `, ...props }, ref) {\n`

  for (const { name: rawPropName } of widgetTypeProps) {
    const propName = camelize(rawPropName)
    ts += `const [${propName}Ref, ${camelize(
      `set-${propName}`
    )}Ref] = useState<any>(null)\n`
    ts += `useCallback((node: any) => {\n`
    ts += `  ${camelize(`set-${propName}`)}Ref(node)\n`
    ts += `}, [])\n`
  }

  ts += `return <>\n`

  for (const { name: rawPropName } of widgetTypeProps) {
    const propName = camelize(rawPropName)
    ts += `{${propName}}\n`
  }

  ts += `<${name} ref={ref} `

  for (const { name: rawPropName } of widgetTypeProps) {
    const propName = camelize(rawPropName)
    ts += `${propName}={${propName}Ref}`
  }

  ts += `{...props} />\n`
  ts += `</>\n`
  ts += `})\n`

  fs.writeFileSync(`src/components/${name}.tsx`, ts)
}

async function main() {
  const girFilePath = "codegen/Gtk-4.0.gir"
  const gir = await parseGIR(girFilePath)
  const widgetClasses = await getWidgetClasses(gir)

  for (const widgetClass of widgetClasses) {
    generateWidgetFile(widgetClass)
    generateComponentFile(widgetClass)
  }

  generateComponentsIndexFile(widgetClasses)
  generateWidgetsIndexFile(widgetClasses)
  generateJSXDefinitionFile(widgetClasses)
  generateRegistryFile(widgetClasses)

  execSync(`pnpm exec prettier --write src/widgets/**/*.{ts,tsx}`)
  execSync(`pnpm exec prettier --write src/components/**/*.{ts,tsx}`)
  execSync(`pnpm exec prettier --write jsx.d.ts`)
}

main()
