import React, { useState } from "react";

function Counter() {
  // states
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  // increment
  const increment = () => {
    setCount(count + 1);
    setMsg("");
  };

  // decrement (no below 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMsg("");
    } else {
      setMsg("You cannot go below 0");
    }
  };

  // reset
  const reset = () => {
    setCount(0);
    setMsg("");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#f0f8ff",
        padding: "30px",
        borderRadius: "10px"
      }}
    >
      <h2 style={{ color: "#333" }}>Counter Application</h2>

      <h1 style={{ color: "blue" }}>{count}</h1>

      {/* message */}
      {msg && <p style={{ color: "red" }}>{msg}</p>}

      {/* success message */}
      {count === 5 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          🎉 You reached 5!
        </p>
      )}

      <button
        onClick={increment}
        style={{ backgroundColor: "green", color: "white", padding: "10px" }}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px",
          margin: "0 10px"
        }}
      >
        Decrement
      </button>

      <button
        onClick={reset}
        style={{ backgroundColor: "red", color: "white", padding: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;

