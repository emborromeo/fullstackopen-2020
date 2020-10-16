import React from 'react' //state hook
  

export const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>No Feedback given</div>
    );
  }
  return (
    <div>
      <Statistics text='good' value={props.good}/>
      <Statistics text='neutral' value={props.neutral}/>
      <Statistics text='bad' value={props.bad}/>
      <Statistics text='all' value={props.all}/>
      <Statistics text='average' value={props.average}/>
      <Statistics text='positive' value={props.positive}/>
    </div>
  );

};
