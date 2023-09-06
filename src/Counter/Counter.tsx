import React, { useState } from 'react';
import './Counter.css';

interface CounterProps {
  initialValue: number;
}

const Counter = ( initialValue:CounterProps ) => {
  const [count, setCount] = useState<number>(initialValue.initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
