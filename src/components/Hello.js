import React from "react";

const Hello = () => {
  //WITH JSX
  //   return (
  //     <div>
  //       <h1>hello amma</h1>
  //     </div>
  //   );
  //return React.createElement("div", null, "h1", "hello amma");
  return React.createElement(
    //WITHOUT JSX
    "div",
    null, //{id:"hello",className:"dummyclass"}
    React.createElement("h1", null, "hello amma")
  );
};

export default Hello;
