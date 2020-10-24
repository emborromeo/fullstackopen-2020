import React from 'react';


const Phonebook=({person})=>{
    return(
      <li>{person.name} {person.number}</li>
    )
    }
const Persons=({persons,  setPersons})=>{
   

    return(
        <div>
        {persons.map(person =>
        <Phonebook person={person} />)}
        </div>
    )
}


export default Persons;