import React from "react"

interface Props {
  children: React.ReactNode
}

export default function Box({ children }: Props) {
  return <box>{children}</box>
}
