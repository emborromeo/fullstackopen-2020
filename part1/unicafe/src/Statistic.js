import React from 'react' //state hook
  

export const Statistic = ({ text, value }) => {
  return (
   <tr>
  <td>{text}</td>
   <td>{value}</td>  
   </tr>

  );
};
