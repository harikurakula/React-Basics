import React from "react"
import Person from "./Person"

function NameList() {
  //   const names = ["hari", "raki", "amma"]
  //   const nameList = names.map((name) => <h2>{name}</h2>)
  //   return (
  //     <div>
  //       {/* <h2>{names[0]}</h2>
  //       <h2>{names[1]}</h2>
  //       <h2>{names[2]}</h2> */}

  //       {/* {names.map((name) => (
  //         <h2>{name}</h2>
  //       ))} */}

  //       {nameList}
  //     </div>
  //   )
  // }

  //   const persons = [
  //     {
  //       id: 1,
  //       name: "hari",
  //       age: 26,
  //       skill: "react",
  //     },
  //     {
  //       id: 2,
  //       name: "devii",
  //       age: 24,
  //       skill: "angular",
  //     },
  //   ]
  //   const personList = persons.map((person) => (
  //     <Person key={person.name} person={person} />
  //   ))
  //   // <h2>
  //   //   I am {person.name}.i am {person.age}.i am {person.age}.i am {person.skill}
  //   // </h2>

  //   return <div>{personList}</div>

  //index as key anti-pattern example............
  const names = ["hari", "raki", "amma", "hari"]

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ))
  return <div>{nameList}</div>
}

export default NameList
