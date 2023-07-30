import ReactReconciler, { HostConfig } from "react-reconciler"
import * as widgets from "./generated/widgets.js"
import { DefaultEventPriority } from "react-reconciler/constants"
import AbstractWidget from "./abstract/widget.js"
import Label from "./generated/widgets/Label.js"
import Gtk from "@girs/node-gtk-4.0"
import { ApplicationContext } from "./components/ApplicationProvider.js"
import { Container } from "./container.js"
import _ from "lodash"

type ElementType = keyof typeof widgets
type UpdatePayload = [string, any][]

type WidgetConstructor = new (
  props: Record<string, any>,
  context: ApplicationContext
) => AbstractWidget

function definedProps(obj: Record<string, any>) {
  return _.omitBy(
    obj,
    (value, key) => value === undefined || key === "children"
  )
}

const hostConfig: HostConfig<
  ElementType,
  Record<string, any>,
  Container,
  AbstractWidget,
  AbstractWidget,
  AbstractWidget,
  AbstractWidget,
  Gtk.Widget,
  unknown,
  UpdatePayload,
  Set<AbstractWidget>,
  ReturnType<typeof setTimeout>,
  -1
> = {
  supportsMutation: true,
  supportsPersistence: false,
  supportsMicrotasks: true,
  supportsHydration: false,
  isPrimaryRenderer: true,
  noTimeout: -1,
  createInstance(type, props, container) {
    const Widget = widgets[type] as WidgetConstructor
    return new Widget(definedProps(props), container.context)
  },
  createTextInstance(text, container) {
    return new Label({ label: text }, container.context)
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
    return Object.keys(definedProps(newProps)).reduce((acc, propName) => {
      if (oldProps[propName] !== newProps[propName]) {
        acc.push([propName, newProps[propName]])
      }
      return acc
    }, [] as UpdatePayload)
  },
  commitMount(instance) {
    instance.commitMount()
  },
  commitUpdate(instance, updatePayload) {
    for (const [propName, newValue] of updatePayload) {
      instance.set(propName, newValue)
    }
  },
  commitTextUpdate(textInstance, _oldText, newText) {
    textInstance.set("label", newText)
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
  /* istanbul ignore next */ preparePortalMount() {},
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
  /* istanbul ignore next */ beforeActiveInstanceBlur() {},
  /* istanbul ignore next */ afterActiveInstanceBlur() {},
  /* istanbul ignore next */ prepareScopeUpdate() {},
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
  scheduleMicrotask(fn) {
    queueMicrotask(fn)
  },
}

export type Reconciler = ReturnType<typeof ReactReconciler>
export const Reconciler = ReactReconciler(hostConfig)
