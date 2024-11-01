// components/Counter.js
"use client"; // Ensures this component runs on the client

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1>Counter: {count}</h1>
      <div className="mt-4">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
