import React, { Component } from "react"
import LifecycleB from "./LifecycleB"

class LifecycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "hari ",
    }
    console.log("LIfecycleA constructor ")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LIfecycleA getDerivedStateFromProps")
    return null
  }
  componentDidMount() {
    console.log("LIfeCycleA componnetDidMount")
  }
  shouldComponentUpdate() {
    console.log("LIfeCycleA shouldComponentUpdate ")
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log("LIfeCycleA getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate() {
    console.log("LIfeCycleA componentDidUpdate")
  }
  changeState = () => {
    this.setState({
      name: "codevolution",
    })
  }
  render() {
    console.log("LifecycleA render")
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
