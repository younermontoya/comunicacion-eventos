import React from 'react'
import { useState } from 'react'
import { Person } from './Person';

export const Persons = () => {
//vafdsfdsf
  const [persons, setPersons] = useState([
    {
        id:1,
        name: "Youner Montoya",
        role: "Full-Stack",
        img: "https://i.pinimg.com/564x/28/8d/b1/288db1e44fa6a5d865f8d9a1bb8d8197.jpg"

    },
    {
      id:2,
      name: "Juan Carlos",
      role: "Backend Developer",
      img:"https://bootdey.com/img/Content/avatar/avatar1.png"

  },
  {
    id:3,
    name: "Andres Torres",
    role: "Frontend Developer",
    img: "https://bootdey.com/img/Content/avatar/avatar2.png"
},
  ]);


  return (

    <div className="container">
    <div className='d-flex flex-row' >
      <h2>IT Team</h2>
      {persons.map((person) => {
        return(
          <div>
          <Person 
          key={person.id}
          name={person.name}
          rol={person.role}
          img={person.img}
          />
        </div>
        )
      })}
    </div>
    </div>
  )
}

