import React from "react"

interface Props {
  onClick: () => void
  label: string
}

export default function Button({ onClick, label }: Props) {
  return <button on-clicked={onClick} label={label} />
}
