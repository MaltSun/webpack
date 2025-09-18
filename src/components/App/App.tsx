import React, { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { LazyAbout } from "@/components/pages/about/About.lazy";

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
      <Link to={"/about"}></Link>
      <Link to={"/shop"}></Link>
      <h1>Counter</h1>
      <button onClick={eventSub}>-</button>
      <span>{count}</span>
      <button className={classes.button} onClick={eventAdder}>
        +
      </button>
      <LazyAbout />
    </div>
  );
};
