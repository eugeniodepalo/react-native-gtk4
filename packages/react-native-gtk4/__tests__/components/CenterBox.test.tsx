import React, { createRef } from "react"
import { render, setup, findBy } from "@/test-support/index.js"
import CenterBox from "@/components/CenterBox.js"
import { Box } from "@/generated/intrinsics.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("CenterBox", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<CenterBox />)

    const box = findBy({ type: "CenterBox" })

    expect(box.node).toBeInstanceOf(Gtk.CenterBox)
  })

  test("should forward refs", () => {
    const ref = createRef<Gtk.CenterBox>()
    const startRef = createRef<Gtk.Box>()
    const endRef = createRef<Gtk.Box>()
    const centerRef = createRef<Gtk.Box>()

    render(
      <CenterBox
        ref={ref}
        start={<Box ref={startRef} data-id="start" />}
        end={<Box ref={endRef} data-id="end" />}
      >
        <Box ref={centerRef} data-id="center" />
      </CenterBox>
    )

    const box = findBy({ type: "CenterBox" })
    const start = findBy({ props: { "data-id": "start" } })
    const end = findBy({ props: { "data-id": "end" } })
    const center = findBy({ props: { "data-id": "center" } })

    expect(ref.current).toBe(box.node)
    expect(startRef.current).toBe(start.node)
    expect(endRef.current).toBe(end.node)
    expect(centerRef.current).toBe(center.node)
  })

  test("should handle unmount gracefully", () => {
    render(<CenterBox />)

    render(null)

    const box = findBy({ type: "CenterBox" })

    expect(box).toBeNull()
  })

  test("should set start, end and center", () => {
    render(
      <CenterBox start={<Box data-id="start" />} end={<Box data-id="end" />}>
        <Box data-id="center" />
      </CenterBox>
    )

    const box = findBy<Gtk.CenterBox>({ type: "CenterBox" })
    const start = findBy({ props: { "data-id": "start" } })
    const end = findBy({ props: { "data-id": "end" } })
    const center = findBy({ props: { "data-id": "center" } })

    expect(box.node.setStartWidget).toHaveBeenCalledWith(start.node)
    expect(box.node.setEndWidget).toHaveBeenCalledWith(end.node)
    expect(box.node.setCenterWidget).toHaveBeenCalledWith(center.node)
  })

  test("should unset start, end and center when unmounted", () => {
    render(
      <CenterBox start={<Box />} end={<Box />}>
        <Box />
      </CenterBox>
    )

    const box = findBy<Gtk.CenterBox>({ type: "CenterBox" })

    render(null)

    expect(box.node.setStartWidget).toHaveBeenCalledWith(null)
    expect(box.node.setEndWidget).toHaveBeenCalledWith(null)
    expect(box.node.setCenterWidget).toHaveBeenCalledWith(null)
  })
})
