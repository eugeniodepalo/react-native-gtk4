import React from "react"
import { render, setup } from "@/test-support/index.js"
import { Box } from "@/generated/intrinsics.js"
import useListItemFactory, {
  ListItemFactoryRenderFunction,
} from "@/hooks/useListItemFactory.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import ListProvider from "@/components/ListProvider.js"

const MockedGtk = Gtk as jest.Mocked<typeof Gtk>

describe("useListItemFactory", () => {
  let factory: Gtk.SignalListItemFactory | null | undefined
  let renderFn: ListItemFactoryRenderFunction<unknown> | null

  const Component = () => {
    factory = useListItemFactory(renderFn)
    return null
  }

  beforeEach(() => {
    setup()
    renderFn = jest.fn(() => <Box />)
  })

  test("should setup factory", () => {
    render(
      <ListProvider.Container>
        <Component />
      </ListProvider.Container>
    )

    expect(factory?.on).toHaveBeenCalledWith("setup", expect.any(Function))
    expect(factory?.on).toHaveBeenCalledWith("teardown", expect.any(Function))
    expect(factory?.on).toHaveBeenCalledWith("bind", expect.any(Function))
    expect(factory?.on).toHaveBeenCalledWith("unbind", expect.any(Function))
  })

  test("should teardown factory on unmount", () => {
    render(
      <ListProvider.Container>
        <Component />
      </ListProvider.Container>
    )

    const mockedFactoryOn = factory?.on as jest.Mock

    const [, onFactoryBind] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "bind"
    )

    const [, onFactoryUnbind] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "unbind"
    )

    const [, onFactorySetup] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "setup"
    )

    const [, onFactoryTeardown] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "teardown"
    )

    render(null)

    expect(factory?.off).toHaveBeenCalledWith("setup", onFactorySetup)
    expect(factory?.off).toHaveBeenCalledWith("teardown", onFactoryTeardown)
    expect(factory?.off).toHaveBeenCalledWith("bind", onFactoryBind)
    expect(factory?.off).toHaveBeenCalledWith("unbind", onFactoryUnbind)
  })

  test("should render empty items on setup", () => {
    renderFn = jest.fn(() => <Box name="item" />)

    render(
      <ListProvider.Container>
        <Component />
      </ListProvider.Container>
    )

    const listItem = new Gtk.ListItem()
    const mockedFactoryOn = factory?.on as jest.Mock

    const [, onFactorySetup] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "setup"
    )

    onFactorySetup(listItem)

    expect(renderFn).toHaveBeenCalledWith(null, listItem)

    const item = MockedGtk.Box.mock.instances[0]

    expect(listItem.setChild).toHaveBeenCalledWith(item)
    expect(item.setName).toHaveBeenCalledWith("item")
  })

  test("should render actual items on bind", () => {
    renderFn = jest.fn((value) => <Box name={(value as { a: "string" }).a} />)

    const index = 0
    const value = { a: "value" }

    render(
      <ListProvider.Container>
        <Component />
        <ListProvider.List>
          <ListProvider.Item value={value} />
        </ListProvider.List>
      </ListProvider.Container>
    )

    const listItem = new Gtk.ListItem() as any
    const mockedFactoryOn = factory?.on as jest.Mock

    listItem.item = { getProperty: () => index.toString() }

    const [, onFactoryBind] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "bind"
    )

    onFactoryBind(listItem)

    expect(renderFn).toHaveBeenCalledWith(value, listItem)

    const item = MockedGtk.Box.mock.instances[0]

    expect(item.setName).toHaveBeenCalledWith("value")
  })

  test("should set child to null on teardown", () => {
    renderFn = jest.fn(() => <Box name="item" />)

    render(
      <ListProvider.Container>
        <Component />
      </ListProvider.Container>
    )

    const listItem = new Gtk.ListItem()
    const mockedFactoryOn = factory?.on as jest.Mock

    const [, onFactoryTeardown] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "teardown"
    )

    onFactoryTeardown(listItem)

    expect(listItem.setChild).toHaveBeenCalledWith(null)
  })

  test("should render empty items on unbind", () => {
    renderFn = jest.fn((value) => <Box name={value as string} />)

    const index = 0
    const value = "value"

    render(
      <ListProvider.Container>
        <Component />
        <ListProvider.List>
          <ListProvider.Item value={value} />
        </ListProvider.List>
      </ListProvider.Container>
    )

    const listItem = new Gtk.ListItem() as any
    const mockedFactoryOn = factory?.on as jest.Mock

    listItem.item = { getProperty: () => index.toString() }

    const [, onFactoryUnbind] = mockedFactoryOn.mock.calls.find(
      ([name]) => name === "unbind"
    )

    onFactoryUnbind(listItem)

    expect(renderFn).toHaveBeenCalledWith(null, listItem)

    const item = MockedGtk.Box.mock.instances[0]

    expect(item.setName).toHaveBeenCalledWith(null)
  })
})
