import React from "react"
import { render, setup } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import useListItemFactory from "../../src/hooks/useListItemFactory.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"
import useList from "../../src/hooks/useList.js"

describe("useListItemFactory", () => {
  let factory
  let renderFn
  let list

  const Component = ({ children } = {}) => {
    list = useList()
    factory = useListItemFactory({ render: renderFn, itemsRef: list.itemsRef })

    return (
      <ListProvider.Container value={list}>{children}</ListProvider.Container>
    )
  }

  beforeEach(() => {
    setup()
    renderFn = jest.fn(() => null)
  })

  test("should setup factory", () => {
    render(<Component />)

    expect(factory.on).toHaveBeenCalledWith("setup", expect.any(Function))
    expect(factory.on).toHaveBeenCalledWith("teardown", expect.any(Function))
    expect(factory.on).toHaveBeenCalledWith("bind", expect.any(Function))
    expect(factory.on).toHaveBeenCalledWith("unbind", expect.any(Function))
  })

  test("should teardown factory on unmount", () => {
    render(<Component renderItem={() => null} />)

    const [, onFactoryBind] = factory.on.mock.calls.find(
      ([name]) => name === "bind"
    )

    const [, onFactoryUnbind] = factory.on.mock.calls.find(
      ([name]) => name === "unbind"
    )

    const [, onFactorySetup] = factory.on.mock.calls.find(
      ([name]) => name === "setup"
    )

    const [, onFactoryTeardown] = factory.on.mock.calls.find(
      ([name]) => name === "teardown"
    )

    render(null)

    expect(factory.off).toHaveBeenCalledWith("setup", onFactorySetup)
    expect(factory.off).toHaveBeenCalledWith("teardown", onFactoryTeardown)
    expect(factory.off).toHaveBeenCalledWith("bind", onFactoryBind)
    expect(factory.off).toHaveBeenCalledWith("unbind", onFactoryUnbind)
  })

  test("should render empty items on setup", () => {
    renderFn = jest.fn(() => <Box name="item" />)

    Gtk.SignalListItemFactory.mockImplementation(() => ({
      on: jest.fn(),
      off: jest.fn(),
    }))

    render(<Component />)

    const listItem = new Gtk.ListItem()

    const [, onFactorySetup] = factory.on.mock.calls.find(
      ([name]) => name === "setup"
    )

    onFactorySetup(listItem)

    expect(renderFn).toHaveBeenCalledWith(null)

    const item = Gtk.Box.mock.instances[0]

    expect(listItem.setChild).toHaveBeenCalledWith(item)
    expect(item.setName).toHaveBeenCalledWith("item")
  })

  test("should render actual items on bind", () => {
    renderFn = jest.fn((value) => <Box name={value} />)

    const id = "item"
    const value = "value"

    Gtk.SignalListItemFactory.mockImplementation(() => ({
      on: jest.fn(),
      off: jest.fn(),
    }))

    render(
      <Component>
        <ListProvider.Item id={id} value={value} />
      </Component>
    )

    const listItem = new Gtk.ListItem()

    listItem.item = {
      getProperty: jest.fn(() => id),
    }

    const [, onFactoryBind] = factory.on.mock.calls.find(
      ([name]) => name === "bind"
    )

    onFactoryBind(listItem)

    expect(renderFn).toHaveBeenCalledWith(value)

    const item = Gtk.Box.mock.instances[0]

    expect(item.setName).toHaveBeenCalledWith(value)
  })

  test("should set child to null on teardown", () => {
    renderFn = jest.fn(() => <Box name="item" />)

    Gtk.SignalListItemFactory.mockImplementation(() => ({
      on: jest.fn(),
      off: jest.fn(),
    }))

    render(<Component />)

    const listItem = new Gtk.ListItem()

    const [, onFactoryTeardown] = factory.on.mock.calls.find(
      ([name]) => name === "teardown"
    )

    onFactoryTeardown(listItem)

    expect(listItem.setChild).toHaveBeenCalledWith(null)
  })

  test("should render empty items on unbind", () => {
    renderFn = jest.fn((value) => <Box name={value} />)

    const id = "item"
    const value = "value"

    Gtk.SignalListItemFactory.mockImplementation(() => ({
      on: jest.fn(),
      off: jest.fn(),
    }))

    render(
      <Component>
        <ListProvider.Item id={id} value={value} />
      </Component>
    )

    const listItem = new Gtk.ListItem()

    listItem.item = {
      getProperty: jest.fn(() => id),
    }

    const [, onFactoryUnbind] = factory.on.mock.calls.find(
      ([name]) => name === "unbind"
    )

    onFactoryUnbind(listItem)

    expect(renderFn).toHaveBeenCalledWith(null)

    const item = Gtk.Box.mock.instances[0]

    expect(item.setName).toHaveBeenCalledWith(null)
  })
})
