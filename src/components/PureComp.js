import React, { PureComponent } from "react"

class PureComp extends PureComponent {
  render() {
    console.log("pure componnet renderrrrrr")
    return <div>PURE COMPONENT{this.props.name}</div>
  }
}

export default PureComp
