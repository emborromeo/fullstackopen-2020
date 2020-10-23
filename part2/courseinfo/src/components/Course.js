import React from 'react';
import Header  from './Header';
import Part from './Part';
import Total from './Total';


const Course=({course})=>{ 
    console.log(course);
    const {name, parts}=course;
    return(
      <div>
        <Header name={name}/>     
        {parts.map(part => <Part key={part.id} part={part} />)}
       <Total parts={parts}/>
      </div>
    )
  }

export default Course