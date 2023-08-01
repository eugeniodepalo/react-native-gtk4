import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import CenterBox from "../../src/components/CenterBox.js"
import { Box } from "../../src/generated/intrinsics.js"
import Gtk from "@girs/node-gtk-4.0"

describe("CenterBox", () => {
  beforeEach(setup)

  test("should render", () => {
    render(<CenterBox />)

    const box = findBy({ type: "CenterBox" })

    expect(box.node).toBeInstanceOf(Gtk.CenterBox)
  })

  test("should forward refs", () => {
    const ref = createRef()
    const startRef = createRef()
    const endRef = createRef()
    const centerRef = createRef()

    render(
      <CenterBox
        ref={ref}
        start={<Box ref={startRef} id="start" />}
        end={<Box ref={endRef} id="end" />}
      >
        <Box ref={centerRef} id="center" />
      </CenterBox>
    )

    const box = findBy({ type: "CenterBox" })
    const start = findBy({ props: { id: "start" } })
    const end = findBy({ props: { id: "end" } })
    const center = findBy({ props: { id: "center" } })

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
      <CenterBox start={<Box id="start" />} end={<Box id="end" />}>
        <Box id="center" />
      </CenterBox>
    )

    const box = findBy({ type: "CenterBox" })
    const start = findBy({ props: { id: "start" } })
    const end = findBy({ props: { id: "end" } })
    const center = findBy({ props: { id: "center" } })

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

    const box = findBy({ type: "CenterBox" })

    render(null)

    expect(box.node.setStartWidget).toHaveBeenCalledWith(null)
    expect(box.node.setEndWidget).toHaveBeenCalledWith(null)
    expect(box.node.setCenterWidget).toHaveBeenCalledWith(null)
  })
})
