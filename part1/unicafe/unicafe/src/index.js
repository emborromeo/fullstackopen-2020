import React, { useState } from 'react' //state hook
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { Statistic } from './Statistic';


const Header=({text})=><h1>{text}</h1>

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>No Feedback given</div>
    );
  }
  return (
    <table>
      <tbody> 
    <Statistic text="good" value={props.good}/>
    <Statistic text="neutral" value={props.neutral}/>
    <Statistic text="bad" value={props.bad}/>
    <Statistic text="all" value={props.all}/>
    <Statistic text="average" value={props.average}/>
    <Statistic text="positive" value={props.positive}/>
   </tbody>
   </table>

  )

}
const App=()=>{
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all= good+neutral+bad

return(
<div>
    <Header text='give feedback'/>

  <Button onClick={()=> {setGood(good+1)}} text='good'/>
  <Button onClick={()=>{setNeutral(neutral+1)}} text='neutral'/>
  <Button onClick={()=>{setBad(bad+1)}} text='bad'/>
  <Header text='statistics'/>
  <Statistics good={good}neutral={neutral}bad={bad}all={all}average={(good-bad)/all}positive={(good*100)/all + '%'}/>

</div>
)
}

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
