import { useState } from "react";

import './Counter.scss'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(prev => prev + 1)
  };

  return (
    <div>
      <div className='container'>Counter: {counter}</div>
      <button type="button" onClick={handleCounter}>COUNT</button>
    </div>
  );
};

export default Counter;