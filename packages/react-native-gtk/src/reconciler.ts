import Reconciler, { HostConfig } from "react-reconciler"
import registry, { ElementType } from "./registry"
import { DefaultEventPriority } from "react-reconciler/constants"
import { Container } from "."
import Element from "./element"

type UpdatePayload = [string, string, any][]

const hostConfig: HostConfig<
  ElementType,
  Record<string, any>,
  Container,
  Element,
  Element,
  Element,
  Element,
  Element,
  unknown,
  UpdatePayload,
  Set<Element>,
  number,
  -1
> = {
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  isPrimaryRenderer: true,
  noTimeout: -1,
  createInstance(type, props, rootContainer) {
    const Element = registry[type]
    return new Element(rootContainer, props)
  },
  createTextInstance(text, rootContainer) {
    const Label = registry["Label"]
    return new Label(rootContainer, { text })
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
  prepareUpdate(_instance, _type, oldProps, newProps) {
    return Object.keys(newProps).reduce<UpdatePayload>((acc, propName) => {
      if (oldProps[propName] !== newProps[propName]) {
        acc.push([propName, newProps[propName], oldProps[propName]])
      }
      return acc
    }, [])
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
    textInstance.set("text", newText, oldText)
  },
  shouldSetTextContent() {
    return false
  },
  getRootHostContext() {
    return null
  },
  getChildHostContext() {
    return null
  },
  getPublicInstance(instance) {
    return instance
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
  clearContainer() {},
  appendChildToContainer() {},
}

export default Reconciler(hostConfig)
