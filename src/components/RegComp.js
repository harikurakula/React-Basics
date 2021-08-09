import React, { Component } from "react"

class RegComp extends Component {
  render() {
    console.log("regular component render")
    return <div>Regular components{this.props.name}</div>
  }
}

export default RegComp
