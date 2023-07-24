export class RenderedTree {
  constructor(node, portals = []) {
    this._node = node
    this._portals = portals
  }

  get node() {
    return this._node.node
  }

  get props() {
    return this._node.props
  }

  get children() {
    return [
      ...this._node.children,
      ...this._portals.reduce(
        (acc, portal) => [...acc, ...portal.children],
        []
      ),
    ].map((node) => new RenderedTree(node))
  }

  findAllByPredicate(predicate, root = this) {
    let result = []

    if (predicate(root._node)) {
      result.push(root)
    }

    if (root.children && root.children.length > 0) {
      const childrenResults = root.children.reduce(
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

  findAllByProps(props = {}) {
    return this.findAllByPredicate((node) => {
      if (!node.props) {
        return false
      }

      return Object.keys(props).every((key) => node.props[key] === props[key])
    })
  }

  findAllByText(text) {
    return this.findAllByPredicate(
      (node) =>
        node.constructor.name === "Label" &&
        node.props.label &&
        node.props.label.trim() === text
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
