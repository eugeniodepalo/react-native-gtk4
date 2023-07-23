export class RenderedTree {
  constructor(node) {
    this._node = node
  }

  get node() {
    return this._node.node
  }

  get props() {
    return this._node.props
  }

  get children() {
    return this._node.children.map((child) => new RenderedTree(child))
  }

  findAllByPredicate(predicate, node = this._node) {
    let result = []

    if (predicate(node)) {
      result.push(new RenderedTree(node))
    }

    if (node.children && node.children.length > 0) {
      const childrenResults = node.children.reduce(
        (acc, child) => [...acc, ...this.findAllByPredicate(predicate, child)],
        []
      )

      result = [...result, ...childrenResults]
    }

    return result
  }

  findAllByType(type) {
    return this.findAllByPredicate((node) => node.constructor.name === type)
  }

  findAllByProps(props) {
    return this.findAllByPredicate((node) => {
      if (!node.props) return false
      const keys = Object.keys(props)
      return keys.every((key) => node.props[key] === props[key])
    })
  }

  findAllByText(text) {
    return this.findAllByPredicate(
      (node) => node.constructor.name === "Label" && node.props.text === text
    )
  }

  findByType(type) {
    return this.findAllByType(type)[0] ?? null
  }

  findByProps(props) {
    return this.findAllByProps(props)[0] ?? null
  }

  findByText(text) {
    return this.findAllByText(text)[0] ?? null
  }

  findByPredicate(predicate) {
    return this.findAllByPredicate(predicate)[0] ?? null
  }

  fireEvent(event, ...args) {
    const handler = this._node.handlers[event]

    if (!handler) {
      return
    }

    handler(...args)
    jest.runAllTimers()
  }
}
