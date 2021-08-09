import React from "react";
import "../App.css";
// function Greet() {
//   return <h1>hello hari</h1>;
// }

//const Greet = () => <h1>hello hari</h1>;

// const Greet = (props) => {
//   console.log(props);
//   // return <h1>hello hari</h1>
//   return (
//     <div>
//       <h1>
//         hello {props.name} w.r.t {props.heroName}
//       </h1>
//       {props.children} //inner html element
//     </div>
//   );
// };

// destructing concept step -1
// const Greet = ({ name, heroName }) => {

//   return (
//     <div>
//       <h1>
//         hello {name} w.r.t {heroName}
//       </h1>
//     </div>
//   );
// };

// destructing concept step -2
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        hello {name} w.r.t {heroName}
      </h1>
    </div>
  );
};

export default Greet;
