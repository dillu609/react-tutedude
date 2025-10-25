import React, { useState } from "react";

const FunctionCount = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>React Function increment</h3>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default FunctionCount;
