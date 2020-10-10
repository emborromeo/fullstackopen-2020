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
     <Part part={props.course[0]}/>
     <Part part={props.course[1]}/>
     <Part part={props.course[2]}/>
    
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
       <p>Number of exercises {props.course[0].exercises+props.course[1].exercises+props.course[2].exercises}</p>
     </div>
   )
 }
 const App = () => {
   const course = {
   name: 'Half Stack Application Development',
   parts: [
   {
     name: 'Fundamentals of React',
     exercises : 10
   },
   { 
     name:'Using props to pass data',
     exercises: 7
  },
   {
     name: 'State of a component',
     exercises : 14
   }
  ]
}
   return (
     <div>
       <Header course={course.name} />
       <Content course={course.parts}/>
       <Total course={course.parts}/>
     </div>
   )
 }
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

