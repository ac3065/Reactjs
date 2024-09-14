import React, { useState } from 'react';
import './CounterStyles.css';

export default function Counter() {
  const [count, setCounter] = useState(0);

  const DecNumber = () => {
    setCounter(count - 1);
  };

  const ResNumber = () => {
    setCounter(0);
  };

  const IncNumber = () => {
    setCounter(count + 1);
  };

  return (
    <div className="counter-container">
      <div className='panel'>
      <h1>#Project - 1</h1>
      <h1>Concept - UseState</h1>

      </div>
      <h1 className="counter-title">COUNTER: <span className="count-number">{count}</span></h1>
      <br />
      <br />
      <div className="button-group">
        <button className="counter-button decrement" onClick={DecNumber}>Decrement</button>
        <button className="counter-button reset" onClick={ResNumber}>Reset</button>
        <button className="counter-button increment" onClick={IncNumber}>Increment</button>
      </div>
    </div>
  );
}
