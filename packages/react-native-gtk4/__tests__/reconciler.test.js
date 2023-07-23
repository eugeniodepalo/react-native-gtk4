import { createReconciler } from "../src/reconciler.js"
import Container from "../src/container.js"
import ReactReconciler from "react-reconciler"
import AnyWidget from "../src/widget.js"
import Label from "../src/generated/widgets/Label.js"
import { createAnyWidget } from "../src/test-support/utils.js"
import { DefaultEventPriority } from "react-reconciler/constants.js"

jest.mock("../src/generated/widgets.js", () => ({
  __esModule: true,
  Label: jest.requireMock("../src/generated/widgets/Label.js").default,
  AnyWidget: jest.requireMock("../src/widget.js").default,
}))

jest.mock("react-reconciler")
jest.mock("../src/generated/widgets/Label.js")
jest.mock("../src/container.js")
jest.mock("../src/widget.js")

describe("Reconciler", () => {
  describe("createReconciler", () => {
    it("should merge the host config", () => {
      const createInstance = jest.fn()

      createReconciler({ createInstance })

      const hostConfig = ReactReconciler.mock.calls[0][0]

      expect(Object.keys(hostConfig).length).toBeGreaterThan(1)
      expect(hostConfig.createInstance).toBe(createInstance)
    })
  })

  describe("host config", () => {
    let container
    let hostConfig

    beforeEach(() => {
      createReconciler()

      Container.mockImplementation(() =>
        Object.assign(Object.create(Container.prototype), {
          children: [],
        })
      )

      container = new Container()
      hostConfig = ReactReconciler.mock.calls[0][0]
    })

    describe("defaults", () => {
      it("should have the correct defaults", () => {
        expect(hostConfig).toMatchObject({
          supportsMutation: true,
          supportsPersistence: false,
          supportsMicrotasks: true,
          supportsHydration: false,
          isPrimaryRenderer: true,
          noTimeout: -1,
          createTextInstance: expect.any(Function),
          appendInitialChild: expect.any(Function),
          finalizeInitialChildren: expect.any(Function),
          appendChild: expect.any(Function),
          removeChild: expect.any(Function),
          insertBefore: expect.any(Function),
          removeChildFromContainer: expect.any(Function),
          prepareUpdate: expect.any(Function),
          commitMount: expect.any(Function),
          commitUpdate: expect.any(Function),
          commitTextUpdate: expect.any(Function),
          shouldSetTextContent: expect.any(Function),
          getRootHostContext: expect.any(Function),
          getChildHostContext: expect.any(Function),
          getPublicInstance: expect.any(Function),
          prepareForCommit: expect.any(Function),
          resetAfterCommit: expect.any(Function),
          preparePortalMount: expect.any(Function),
          scheduleTimeout: expect.any(Function),
          cancelTimeout: expect.any(Function),
          getCurrentEventPriority: expect.any(Function),
          getInstanceFromNode: expect.any(Function),
          beforeActiveInstanceBlur: expect.any(Function),
          afterActiveInstanceBlur: expect.any(Function),
          prepareScopeUpdate: expect.any(Function),
          getInstanceFromScope: expect.any(Function),
          detachDeletedInstance: expect.any(Function),
          clearContainer: expect.any(Function),
          appendChildToContainer: expect.any(Function),
          insertInContainerBefore: expect.any(Function),
          scheduleMicrotask: expect.any(Function),
        })
      })
    })

    describe("createInstance", () => {
      it("should create a widget", () => {
        const props = { some: "Prop" }
        hostConfig.createInstance("AnyWidget", props)
        expect(AnyWidget).toHaveBeenCalledWith(props)
      })

      it("should remove undefined props", () => {
        const props = { some: "Prop", undefined: undefined }
        hostConfig.createInstance("AnyWidget", props)
        expect(AnyWidget).toHaveBeenCalledWith({ some: "Prop" })
      })
    })

    describe("createTextInstance", () => {
      it("should create a label", () => {
        const text = "Some text"
        hostConfig.createTextInstance(text)
        expect(Label).toHaveBeenCalledWith({ label: text })
      })
    })

    describe("appendInitialChild", () => {
      it("should append a child", () => {
        const parent = createAnyWidget()
        const child = createAnyWidget()

        hostConfig.appendInitialChild(parent, child)

        expect(parent.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("finalizeInitialChildren", () => {
      it("should return true", () => {
        expect(hostConfig.finalizeInitialChildren()).toBe(true)
      })
    })

    describe("appendChild", () => {
      it("should append a child", () => {
        const parent = createAnyWidget()
        const child = createAnyWidget()

        hostConfig.appendChild(parent, child)

        expect(parent.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("removeChild", () => {
      it("should remove a child", () => {
        const parent = createAnyWidget()
        const child = createAnyWidget()

        hostConfig.removeChild(parent, child)

        expect(parent.removeChild).toHaveBeenCalledWith(child)
      })
    })

    describe("insertBefore", () => {
      it("should insert a child", () => {
        const parent = createAnyWidget()
        const child = createAnyWidget()
        const beforeChild = createAnyWidget()

        hostConfig.insertBefore(parent, child, beforeChild)

        expect(parent.insertBefore).toHaveBeenCalledWith(child, beforeChild)
      })
    })

    describe("removeChildFromContainer", () => {
      it("should remove a child", () => {
        const parent = createAnyWidget()
        const child = createAnyWidget()

        hostConfig.removeChildFromContainer(parent, child)

        expect(parent.removeChild).toHaveBeenCalledWith(child)
      })
    })

    describe("prepareUpdate", () => {
      it("should return a payload with the updates to apply", () => {
        const oldProps = { old: "Prop" }
        const newProps = { ...oldProps, new: "Prop" }

        const payload = hostConfig.prepareUpdate(
          container,
          "AnyWidget",
          oldProps,
          newProps
        )

        expect(payload).toEqual([["new", "Prop"]])
      })
    })

    describe("commitMount", () => {
      it("should call commitMount on the widget", () => {
        const widget = createAnyWidget()
        hostConfig.commitMount(widget)
        expect(widget.commitMount).toHaveBeenCalled()
      })
    })

    describe("commitUpdate", () => {
      it("should set the props on the widget", () => {
        const widget = createAnyWidget()

        const payload = [
          ["some", "prop"],
          ["another", "prop"],
        ]

        hostConfig.commitUpdate(widget, payload)

        for (const [prop, value] of payload) {
          expect(widget.set).toHaveBeenCalledWith(prop, value)
        }
      })
    })

    describe("commitTextUpdate", () => {
      it("should set the text on the label", () => {
        const label = createAnyWidget()
        const text = "Some text"

        hostConfig.commitTextUpdate(label, null, text)

        expect(label.set).toHaveBeenCalledWith("label", text)
      })
    })

    describe("shouldSetTextContent", () => {
      it("should return false", () => {
        expect(hostConfig.shouldSetTextContent()).toBe(false)
      })
    })

    describe("getRootHostContext", () => {
      it("should return null", () => {
        expect(hostConfig.getRootHostContext()).toBe(null)
      })
    })

    describe("getChildHostContext", () => {
      it("should return the parent context", () => {
        const parentContext = {}

        expect(hostConfig.getChildHostContext(parentContext)).toBe(
          parentContext
        )
      })
    })

    describe("getPublicInstance", () => {
      it("should return the widget node", () => {
        const widget = createAnyWidget()
        expect(hostConfig.getPublicInstance(widget)).toBe(widget.node)
      })
    })

    describe("prepareForCommit", () => {
      it("should return null", () => {
        expect(hostConfig.prepareForCommit()).toBe(null)
      })
    })

    describe("resetAfterCommit", () => {
      it("should return null", () => {
        expect(hostConfig.resetAfterCommit()).toBe(null)
      })
    })

    describe("preparePortalMount", () => {
      it("should be a noop", () => {
        expect(hostConfig.preparePortalMount()).toBe(undefined)
      })
    })

    describe("scheduleTimeout", () => {
      it("should call setTimeout", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "setTimeout")

        const callback = jest.fn()
        const timeout = 1000

        hostConfig.scheduleTimeout(callback, timeout)

        expect(setTimeout).toHaveBeenCalledWith(callback, timeout)
      })
    })

    describe("cancelTimeout", () => {
      it("should call clearTimeout", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "clearTimeout")

        const timeout = 1000

        hostConfig.cancelTimeout(timeout)

        expect(clearTimeout).toHaveBeenCalledWith(timeout)
      })
    })

    describe("getCurrentEventPriority", () => {
      it("should return DefaultEventPriority", () => {
        expect(hostConfig.getCurrentEventPriority()).toBe(DefaultEventPriority)
      })
    })

    describe("getInstanceFromNode", () => {
      it("should return null", () => {
        expect(hostConfig.getInstanceFromNode()).toBe(null)
      })
    })

    describe("beforeActiveInstanceBlur", () => {
      it("should be a noop", () => {
        expect(hostConfig.beforeActiveInstanceBlur()).toBe(undefined)
      })
    })

    describe("afterActiveInstanceBlur", () => {
      it("should be a noop", () => {
        expect(hostConfig.afterActiveInstanceBlur()).toBe(undefined)
      })
    })

    describe("prepareScopeUpdate", () => {
      it("should be a noop", () => {
        expect(hostConfig.prepareScopeUpdate()).toBe(undefined)
      })
    })

    describe("getInstanceFromScope", () => {
      it("should return null", () => {
        expect(hostConfig.getInstanceFromScope()).toBe(null)
      })
    })

    describe("detachDeletedInstance", () => {
      it("should be a noop", () => {
        expect(hostConfig.detachDeletedInstance()).toBe(undefined)
      })
    })

    describe("clearContainer", () => {
      it("should remove all children from the container", () => {
        container.children = [
          createAnyWidget(),
          createAnyWidget(),
          createAnyWidget(),
        ]

        hostConfig.clearContainer(container)

        for (const child of container.children) {
          expect(container.removeChild).toHaveBeenCalledWith(child)
        }
      })
    })

    describe("appendChildToContainer", () => {
      it("should append a child to the container", () => {
        const child = createAnyWidget()
        hostConfig.appendChildToContainer(container, child)
        expect(container.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("insertInContainerBefore", () => {
      it("should insert a child in the container", () => {
        const child = createAnyWidget()
        const beforeChild = createAnyWidget()

        hostConfig.insertInContainerBefore(container, child, beforeChild)

        expect(container.insertBefore).toHaveBeenCalledWith(child, beforeChild)
      })
    })

    describe("scheduleMicrotask", () => {
      it("should call queueMicrotask", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "queueMicrotask")

        const callback = jest.fn()

        hostConfig.scheduleMicrotask(callback)

        expect(queueMicrotask).toHaveBeenCalledWith(callback)
      })
    })
  })
})
