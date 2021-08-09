import React, { Component } from "react"
import "./index.scss"

export class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "hello",
    }
    // this.clickHandler = this.clickHandler.bind(this)
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "goodbye!",
  //     });
  //console.log(this)----undefined
  //   }
  clickHandler = () => {
    this.setState({
      message: "goodbye!",
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1 st approach performance immplemantions*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 2 nd approach */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

        {/* 3 rd Approach best one used in realtime applications */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
