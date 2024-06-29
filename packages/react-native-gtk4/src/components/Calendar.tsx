import React, { useEffect } from "react"
import { forwardRef } from "react"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import { Calendar } from "../generated/intrinsics.js"
import useForwardedRef from "../hooks/useForwardedRef.js"
import _ from "lodash"

type Props = JSX.IntrinsicElements["Calendar"] & {
  markedDays?: number[]
}

export default React.memo(
  forwardRef<Gtk.Calendar, Props>(function CalendarComponent(
    { markedDays = [], ...props },
    ref
  ) {
    const [innerRef, setInnerRef] = useForwardedRef(ref)

    useEffect(() => {
      const calendar = innerRef.current

      if (!calendar) {
        return
      }

      markedDays.forEach((day) => {
        calendar.markDay(day)
      })

      return () => {
        markedDays.forEach((day) => {
          calendar.unmarkDay(day)
        })
      }
    }, [markedDays])

    return <Calendar ref={setInnerRef} {...props} />
  }),
  _.isEqual
)
