import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "16px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "16px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
