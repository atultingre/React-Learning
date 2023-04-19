import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section>
        <h1>{count}</h1>
        <div className="row">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
        <div className="row">
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>
    </div>
  );
};

export default UseStateHook;
