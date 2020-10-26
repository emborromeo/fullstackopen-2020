import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries';
import Search from './components/Search';

const  App = () => {
  const [countries, setCountries] = useState([]);
  const [ newFilter, setNewFilter ] = useState('');
 
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

console.log(countries);
  return(
    <div>
      <Search value={newFilter} onChange={handleChange}/>

      <Countries countries={countries} filter={newFilter}/>


    </div>

  )
}


export default App;
