import React from 'react';
import ReactDOM from 'react-dom';


const Header=(props)=>{
  return(
   <div>
     <h1>{props.course} </h1>
   </div>
  )
 }
 
 const Content=(props)=>{
   console.log(props)
   return(         
     <div>
     <Part part={props.part1}/>
     <Part part={props.part2}/>
     <Part part={props.part3}/>
     </div>            
   )
 }
 const Part=(props)=>{
   console.log(props)
   return(
     <div>
       <p>{props.part.name} {props.part.exercises}</p>
     </div>

     
   )
 }
 const Total=(props)=>{
   return(
     <div>
       <p>Number of exercises {props.exercises} </p>
     </div>
   )
 }
 const App = () => {
   const course = 'Half Stack Application Development'
   const part1 ={
     name: 'Fundamentals of React',
     exercises : 10
   }
   const part2 ={ 
     name:'Using props to pass data',
     exercises: 7
  }
   const part3 = {
     name: 'State of a component',
     exercises : 14
   }
 
   return (
     <div>
       <Header course={course} />
       <Content part1={part1} part2={part2} part3={part3}/>
       <Total exercises={part1.exercises+part2.exercises+part3.exercises}/>
     </div>
   )
 }
/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

2
const Header=(props)=>{
 return(
  <div>
    console.log(props)
    <h1>{props.course} </h1>
  </div>
 )
}

const Content=(props)=>{
  return(
    <div>
      <Part part={props.parts.part1} exercise={props.parts.exercises1}/>
      <Part part={props.parts.part2} exercise={props.parts.exercises2}/>
      <Part part={props.parts.part3} exercise={props.parts.exercises3}/>
    </div>
  )
  
}
function Part(props){
    return(
     <p>{props.part} {props.exercise}</p>
    )
}

const Total=(props)=>{
  return(
    <div>
      <p>Number of exercises {props.exercises} </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={{part1:part1,exercises1:exercises1, part2:part2, exercises2:exercises2, part3:part3, exercises3:exercises3}}/>
      <Total exercises={exercises1+exercises2+exercises3}/>
    </div>
  )
}

3

const Header=(props)=>{
  return(
   <div>
     <h1>{props.course} </h1>
   </div>
  )
 }
 
 const Content=(props)=>{
   console.log(props)
   return(         
     <div>
     <Part part={props.part1}/>
     <Part part={props.part2}/>
     <Part part={props.part3}/>
     </div>            
   )
 }
 const Part=(props)=>{
   console.log(props)
   return(
     <div>
       <p>{props.part.name} {props.part.exercises}</p>
     </div>

     
   )
 }
 const Total=(props)=>{
   return(
     <div>
       <p>Number of exercises {props.exercises} </p>
     </div>
   )
 }
 const App = () => {
   const course = 'Half Stack Application Development'
   const part1 ={
     name: 'Fundamentals of React',
     exercises : 10
   }
   const part2 ={ 
     name:'Using props to pass data',
     exercises: 7
  }
   const part3 = {
     name: 'State of a component',
     exercises : 14
   }
 
   return (
     <div>
       <Header course={course} />
       <Content part1={part1} part2={part2} part3={part3}/>
       <Total exercises={part1.exercises+part2.exercises+part3.exercises}/>
     </div>
   )
 }
*/
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
