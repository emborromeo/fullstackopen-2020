import React from "react";

import personsService from "../services/persons";

const Persons = ({ persons, setPersons , errorMessage}) => {
  const handlePersonDelete = personToDelete => {
   const { id, name } = personToDelete;
    const answer = window.confirm (`Delete ${name} ?`)
    if (answer) {
      personsService.deletePerson(id)
      .then(data => {
        setPersons(persons.filter(person => person.id !== id))})
      .catch(error =>{
          setPersons(
            persons.filter(person => {
              return person.id !== personToDelete.id;
            })
          );
          errorMessage(
            `${personToDelete.name}  has already been removed from the server`
          );
        })
  }
    }


  return (
    <div>
      {persons.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
          <button
            onClick={() => {
              handlePersonDelete(person);
            }}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;