import Entry from "../generated/widgets/Entry.js"

const parent = {
  set: Entry.prototype.set,
}



Entry.prototype.set = function (
  this: Entry,
  propName: string,
  value: any
) {
  if (propName === "text") {
    if (this.node.text !== value) {
      this.node.setText(value)
    }

    return
  }

  parent.set.call(this, propName, value)
}
