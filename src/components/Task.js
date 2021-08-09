import React, { Component } from "react"

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "raki",
    }
  }

  clickHandler() {
    this.setState({
      name: "hari",
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>{this.state.name}</button>
      </div>
    )
  }
}

export default Task
