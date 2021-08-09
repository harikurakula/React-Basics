import React, { Component } from "react"

class LifecycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "hari ",
    }
    console.log("LifecycleB constructor ")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps")
    return null
  }
  componentDidMount() {
    console.log("LifecycleB componnetDidMount")
  }
  shouldComponentUpdate() {
    console.log("LIfeCycleB shouldComponentUpdate ")
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log("LIfeCycleB getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate() {
    console.log("LIfeCycleB componentDidUpdate")
  }
  render() {
    console.log("LifecycleB render")
    return <div>Lifecycle B</div>
  }
}

export default LifecycleB
