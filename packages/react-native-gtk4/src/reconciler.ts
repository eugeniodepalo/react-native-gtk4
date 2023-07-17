import Reconciler, { HostConfig } from "react-reconciler"
import * as widgets from "./generated/widgets.js"
import { DefaultEventPriority } from "react-reconciler/constants.js"
import Widget from "./widget.js"
import Label from "./generated/widgets/Label.js"
import Container from "./container.js"

type ElementType = keyof typeof widgets
type UpdatePayload = [string, string, any][]
type WidgetConstructor = new (props: Record<string, any>) => Widget

const hostConfig: HostConfig<
  ElementType,
  Record<string, any>,
  Container,
  Widget<any>,
  Widget<any>,
  Widget<any>,
  Widget<any>,
  Widget<any>,
  unknown,
  UpdatePayload,
  Set<Widget<any>>,
  ReturnType<typeof setTimeout>,
  -1
> = {
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  isPrimaryRenderer: true,
  noTimeout: -1,
  createInstance(type, props) {
    const Widget = widgets[type] as WidgetConstructor
    return new Widget(props)
  },
  createTextInstance(text) {
    return new Label({ label: text })
  },
  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child)
  },
  finalizeInitialChildren() {
    return true
  },
  appendChild(parentInstance, child) {
    parentInstance.appendChild(child)
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child)
  },
  insertBefore(parentInstance, child, beforeChild) {
    parentInstance.insertBefore(child, beforeChild)
  },
  removeChildFromContainer(container, child) {
    container.removeChild(child)
  },
  prepareUpdate(_instance, _type, oldProps, newProps) {
    return Object.keys(newProps).reduce((acc, propName) => {
      if (oldProps[propName] !== newProps[propName]) {
        acc.push([propName, newProps[propName], oldProps[propName]])
      }
      return acc
    }, [] as UpdatePayload)
  },
  commitMount(instance) {
    instance.commitMount()
  },
  commitUpdate(instance, updatePayload) {
    for (const [propName, newValue, oldValue] of updatePayload) {
      instance.set(propName, newValue, oldValue)
    }
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.set("label", newText, oldText)
  },
  shouldSetTextContent() {
    return false
  },
  getRootHostContext() {
    return null
  },
  getChildHostContext(parentHostContext) {
    return parentHostContext
  },
  getPublicInstance(instance) {
    return instance.node
  },
  prepareForCommit() {
    return null
  },
  resetAfterCommit() {
    return null
  },
  preparePortalMount() {},
  scheduleTimeout(fn, delay) {
    return setTimeout(fn, delay)
  },
  cancelTimeout(id) {
    clearTimeout(id)
  },
  getCurrentEventPriority() {
    return DefaultEventPriority
  },
  getInstanceFromNode() {
    return null
  },
  beforeActiveInstanceBlur() {},
  afterActiveInstanceBlur() {},
  prepareScopeUpdate() {},
  getInstanceFromScope() {
    return null
  },
  detachDeletedInstance() {},
  clearContainer(container) {
    for (const child of container.children) {
      container.removeChild(child)
    }
  },
  appendChildToContainer(container, child) {
    container.appendChild(child)
  },
  insertInContainerBefore(container, child, beforeChild) {
    container.insertBefore(child, beforeChild)
  },
}

export default Reconciler(hostConfig)
