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
    <div style={{ float: "left", marginTop: "0px", width: "400px" }}>
      <h3>React Function increment</h3>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "20px", padding: "20px", fontSize: "30px" }}>
        {count}
      </span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default FunctionCount;
