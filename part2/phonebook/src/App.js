import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios'



const App = (props) => {
  const [ persons, setPersons ] = useState([]);
  const [ newNumber, setNewNumber] = useState('');
  const [ newName, setNewName ] = useState('');
  const [ newFilter, setFiltered ] = useState('');
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


const handleChange = (event) => {
    setNewName(event.target.value);
}  

const handleChange1 = (event) => {
  setNewNumber(event.target.value);
}  
const handleChange2 = (event) => {
  setFiltered(event.target.value);
  console.log(event.target.value);
  } 

 const addName=(event)=>{
    event.preventDefault();
      const nameBook={
        name: newName,
        number: newNumber
      } 
      if(persons.find(person => person.name === newName)){
        window.alert(`${newName} is already added to phonebook`);
      }
      else{

      setPersons(persons.concat(nameBook));
      setNewName(' ');
      }
  }
  const filteredName = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value={newFilter} onChange={handleChange2}/>
      
      <h3>Add a  new</h3>
      
      <PersonForm
        onSubmit={addName}
        name={newName}
        number={newNumber}
        onNameChange={handleChange}
        onNumberChange={handleChange1}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredName}/>
       
    </div>
  )
}


export default App;