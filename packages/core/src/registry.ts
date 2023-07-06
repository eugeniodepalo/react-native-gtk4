import widgetRegistry from "./widgets/registry"
import ApplicationWindow from "./overrides/ApplicationWindow"
import Box from "./overrides/Box"

const registry = {
  ...widgetRegistry,
  ApplicationWindow,
  Box,
}

export default registry
export type ElementType = keyof typeof registry
