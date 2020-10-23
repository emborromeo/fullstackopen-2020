import React from 'react';

const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => { 
      return sum + part.exercises;
    },0);
    console.log(total);
    return <p>Number of exrcises {total}</p>
  }

  export default Total