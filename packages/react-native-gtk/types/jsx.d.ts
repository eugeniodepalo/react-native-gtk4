declare namespace JSX {
  interface IntrinsicElements {
    ApplicationWindow: {
      title?: string
      children?: JSX.Element
    }
    Label: {
      text?: string
    }
    Box: {
      children?: React.ReactNode
    }
    Button: {
      label: string
      onClicked?: () => void
    }
  }
}
