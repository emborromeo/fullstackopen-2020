import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [notification, setNotification] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    personService.getAll().then(initalPersons => {
      setPersons(initalPersons);
    });
  }, []);

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleFilterNameChange = event => setFilterName(event.target.value);

  const handlePersonSubmit = event => {
    event.preventDefault();
    const duplicatePersons = persons.filter(
      person => person.name === newName.trim()
    );
    if (duplicatePersons.length) {
      const personToUpdate = duplicatePersons[0];
      const replace = window.confirm(
        `${personToUpdate.name} is already added to phonebook, replace the old number with the new one?`
      );
      if (replace) {
        personToUpdate.number = newNumber;
        personService
          .update(personToUpdate)
          .then(data => {
            setPersons(
              persons.map(person => {
                return person.id === data.id ? data : person;
              })
            );
            setNotification(`Updated ${personToUpdate.name}'s number`);
          })
      }
    } else {
      const newPerson = {
        name: newName.trim(),
        number: newNumber.trim()
      };

      personService
        .create(newPerson)
        .then(createdPerson => {
          setPersons([...persons, createdPerson]);
          setNotification(`Added ${newName}`);
        })
        .catch(err => {
          setErrorMessage(err.response.data.error);
        });
    }

    setNewName("");
    setNewNumber("");
    setTimeout(() => {
    setNotification("");
    setErrorMessage("");
    }, 5000);
  };

  const personsToShow = filterName
    ? persons.filter(person => person.name.search(filterName) !== -1)
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      {errorMessage ? (
        <Notification message={errorMessage} isError={true} />
       ) : null}
      {notification ? <Notification message={notification} /> : null}

      <Filter value={filterName} onChange={handleFilterNameChange} />


      <h3>add a new</h3>

      <PersonForm
        onSubmit={handlePersonSubmit}
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} setPersons={setPersons} errorMessage={setErrorMessage}/>
    </div>
  );
};

export default App;