import React, { Component } from "react"

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome hari</div>

    //3 rd approach terinary operator....
    // return this.state.isLoggedIn ? (
    //   <div>welocome hari</div>
    // ) : (
    //   <div>welcome Guest</div>
    // )
    //2 nd approach element variable/.......
    // let Message;
    // if (this.state.isLoggedIn) {
    //   Message = <div>welocme hari</div>;
    // } else {
    //   Message = <div>welocme guest</div>;
    // }
    // return <div>{Message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>welcome hari</div>;
    // } else {
    //   return <div>weclome guest</div>;
    // }

    //jsx lo if else not working..........so declare them outside..

    // return (
    //   <div>
    //     <div>welcome hari</div>
    //     <div>welocome guest</div>
    //   </div>
    // );
  }
}
export default UserGreeting
