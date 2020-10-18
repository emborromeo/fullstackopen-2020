import React from 'react' //state hook
  

export const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
);
