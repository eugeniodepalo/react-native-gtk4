import { DefaultEventPriority } from "react-reconciler/constants.js"
import { createRootNode } from "../src/rootNode.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Reconciler", () => {
  let rootNode
  let Label
  let Widget
  let module
  let ReactReconciler

  beforeEach(async () => {
    jest.doMock("react-reconciler")
    jest.doMock("../src/generated/widgets/Label.js")
    jest.doMock("../src/generated/widgets.js")
    jest.doMock("../src/rootNode.js")

    module = await import("../src/reconciler.js")
    Label = (await import("../src/generated/widgets/Label.js")).default
    Widget = (await import("../src/generated/widgets.js")).Widget
    ReactReconciler = await import("react-reconciler")

    rootNode = createRootNode(new Gtk.Application())
    rootNode.children = []

    Widget.createNode = jest.fn(() => new Gtk.Widget())
    Label.createNode = jest.fn(() => new Gtk.Label())
  })

  describe("createReconciler", () => {
    test("should create a reconciler", () => {
      jest.clearAllMocks()

      const reconciler = module.createReconciler()

      expect(ReactReconciler).toHaveBeenCalledWith(
        expect.objectContaining({
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
      )

      const reactReconciler = ReactReconciler.mock.results[0].value

      expect(reconciler).toBe(reactReconciler)
    })
  })

  describe("host config", () => {
    let hostConfig

    beforeEach(() => {
      hostConfig = ReactReconciler.mock.calls[0][0]
    })

    test("should have the correct defaults", () => {
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

    describe("createInstance", () => {
      test("should create a widget", () => {
        const props = { some: "Prop" }

        hostConfig.createInstance("Widget", props)

        expect(Widget.createNode).toHaveBeenCalledWith(props)

        const node = Widget.createNode.mock.results[0].value

        expect(Widget).toHaveBeenCalledWith(props, node)
      })

      test("should remove undefined props", () => {
        const props = { some: "Prop", undefined: undefined }

        hostConfig.createInstance("Widget", props, rootNode)

        expect(Widget.createNode).toHaveBeenCalledWith({ some: "Prop" })

        expect(Widget).toHaveBeenCalledWith(
          { some: "Prop" },
          expect.any(Gtk.Widget)
        )
      })
    })

    describe("createTextInstance", () => {
      test("should create a label", () => {
        const text = "Some text"

        hostConfig.createTextInstance(text, rootNode)

        expect(Label.createNode).toHaveBeenCalled()

        const node = Label.createNode.mock.results[0].value

        expect(Label).toHaveBeenCalledWith({ label: text }, node)
      })
    })

    describe("appendInitialChild", () => {
      test("should append a child", () => {
        const parent = { appendChild: jest.fn() }
        const child = {}

        hostConfig.appendInitialChild(parent, child)

        expect(parent.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("finalizeInitialChildren", () => {
      test("should return true", () => {
        expect(hostConfig.finalizeInitialChildren()).toBe(true)
      })
    })

    describe("appendChild", () => {
      test("should append a child", () => {
        const parent = { appendChild: jest.fn() }
        const child = {}

        hostConfig.appendChild(parent, child)

        expect(parent.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("removeChild", () => {
      test("should remove a child", () => {
        const parent = { removeChild: jest.fn() }
        const child = {}

        hostConfig.removeChild(parent, child)

        expect(parent.removeChild).toHaveBeenCalledWith(child)
      })
    })

    describe("insertBefore", () => {
      test("should insert a child", () => {
        const parent = { insertBefore: jest.fn() }
        const child = {}
        const beforeChild = {}

        hostConfig.insertBefore(parent, child, beforeChild)

        expect(parent.insertBefore).toHaveBeenCalledWith(child, beforeChild)
      })
    })

    describe("removeChildFromContainer", () => {
      test("should remove a child", () => {
        const parent = { removeChild: jest.fn() }
        const child = {}

        hostConfig.removeChildFromContainer(parent, child)

        expect(parent.removeChild).toHaveBeenCalledWith(child)
      })
    })

    describe("prepareUpdate", () => {
      test("should return a payload with the updates to apply", () => {
        const oldProps = { old: "Prop" }
        const newProps = { ...oldProps, new: "Prop" }

        const payload = hostConfig.prepareUpdate(
          rootNode,
          "Widget",
          oldProps,
          newProps
        )

        expect(payload).toEqual([["new", "Prop"]])
      })
    })

    describe("commitMount", () => {
      test("should call commitMount on the widget", () => {
        const widget = { commitMount: jest.fn() }

        hostConfig.commitMount(widget)

        expect(widget.commitMount).toHaveBeenCalled()
      })
    })

    describe("commitUpdate", () => {
      test("should set the props on the widget", () => {
        const widget = { set: jest.fn() }

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
      test("should set the text on the label", () => {
        const label = { set: jest.fn() }
        const text = "Some text"

        hostConfig.commitTextUpdate(label, null, text)

        expect(label.set).toHaveBeenCalledWith("label", text)
      })
    })

    describe("shouldSetTextContent", () => {
      test("should return false", () => {
        expect(hostConfig.shouldSetTextContent()).toBe(false)
      })
    })

    describe("getRootHostContext", () => {
      test("should return null", () => {
        expect(hostConfig.getRootHostContext()).toBe(null)
      })
    })

    describe("getChildHostContext", () => {
      test("should return the parent context", () => {
        const parentContext = {}

        expect(hostConfig.getChildHostContext(parentContext)).toBe(
          parentContext
        )
      })
    })

    describe("getPublicInstance", () => {
      test("should return the widget node", () => {
        const widget = {}
        expect(hostConfig.getPublicInstance(widget)).toBe(widget.node)
      })
    })

    describe("prepareForCommit", () => {
      test("should return null", () => {
        expect(hostConfig.prepareForCommit()).toBe(null)
      })
    })

    describe("resetAfterCommit", () => {
      test("should return null", () => {
        expect(hostConfig.resetAfterCommit()).toBe(null)
      })
    })

    describe("scheduleTimeout", () => {
      test("should call setTimeout", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "setTimeout")

        const callback = jest.fn()
        const timeout = 1000

        hostConfig.scheduleTimeout(callback, timeout)

        expect(setTimeout).toHaveBeenCalledWith(callback, timeout)
      })
    })

    describe("cancelTimeout", () => {
      test("should call clearTimeout", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "clearTimeout")

        const timeout = 1000

        hostConfig.cancelTimeout(timeout)

        expect(clearTimeout).toHaveBeenCalledWith(timeout)
      })
    })

    describe("getCurrentEventPriority", () => {
      test("should return DefaultEventPriority", () => {
        expect(hostConfig.getCurrentEventPriority()).toBe(DefaultEventPriority)
      })
    })

    describe("getInstanceFromNode", () => {
      test("should return null", () => {
        expect(hostConfig.getInstanceFromNode()).toBe(null)
      })
    })

    describe("getInstanceFromScope", () => {
      test("should return null", () => {
        expect(hostConfig.getInstanceFromScope()).toBe(null)
      })
    })

    describe("clearContainer", () => {
      test("should remove all children from the rootNode", () => {
        rootNode.removeChild = jest.fn()
        rootNode.children = [{}, {}, {}]

        hostConfig.clearContainer(rootNode)

        for (const child of rootNode.children) {
          expect(rootNode.removeChild).toHaveBeenCalledWith(child)
        }
      })
    })

    describe("appendChildToContainer", () => {
      test("should append a child to the rootNode", () => {
        const child = {}

        rootNode.appendChild = jest.fn()

        hostConfig.appendChildToContainer(rootNode, child)

        expect(rootNode.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("insertInContainerBefore", () => {
      test("should insert a child in the rootNode", () => {
        const child = {}
        const beforeChild = {}

        rootNode.insertBefore = jest.fn()

        hostConfig.insertInContainerBefore(rootNode, child, beforeChild)

        expect(rootNode.insertBefore).toHaveBeenCalledWith(child, beforeChild)
      })
    })

    describe("scheduleMicrotask", () => {
      test("should call queueMicrotask", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "queueMicrotask")

        const callback = jest.fn()

        hostConfig.scheduleMicrotask(callback)

        expect(queueMicrotask).toHaveBeenCalledWith(callback)
      })
    })
  })
})
