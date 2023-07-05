import React from "react"

interface Props {
  title: string
  children: JSX.Element
}

export default function Window({ title, children }: Props) {
  return <application-window title={title}>{children}</application-window>
}
