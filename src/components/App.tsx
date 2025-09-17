import React, { useState } from "react";
import classes from './App.module.scss'

export const App = () => {
  const [count, setCount] = useState<number>(0);
  function eventAdder() {
    setCount(() => count + 1);
  }

  function eventSub() {
    setCount(() => count - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={eventSub}>-</button>
      <span>{count}</span>
      <button className={classes.button} onClick={eventAdder}>+</button>
    </div>
  );
};
