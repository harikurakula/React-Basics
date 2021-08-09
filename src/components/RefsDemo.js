import React, { Component } from "react"

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    //1 st way approach......
    this.inputRef = React.createRef()
    //2nd way approach.....
    this.cbRef = null
    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }
  componentDidMount() {
    //1 st way approach...
    // this.inputRef.current.focus()
    // console.log(this.inputRef)

    // 2 nd way........
    if (this.cbRef) {
      this.cbRef.focus()
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo
