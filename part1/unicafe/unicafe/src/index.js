import React, { useState } from 'react' //state hook
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { Statistics } from './Statistics';

const Header=({text})=><h1>{text}</h1>
const App=()=>{
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all= good+neutral+bad;

const goodReview = () =>setGood(good + 1)
const neutralReview = () =>setNeutral(neutral + 1)
const badReview = () =>setBad(bad + 1)


return(
<div>
    <Header text='give feedback'/>

  <Button onClick={goodReview} text='good'/>
  <Button onClick={neutralReview} text='neutral'/>
  <Button onClick={badReview} text='bad'/>
  <Header text='statistics'/>
  <Statistics good={good} neutral={neutral} bad={bad} all={all} average={(good-bad)/all} positive={(good*100)/all + '%'}/>
 
</div>
)
}

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
