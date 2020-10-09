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

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
