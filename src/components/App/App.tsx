import React, { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { LazyAbout } from "@/components/pages/about/About.lazy";
import princes from "@/assets/princess.png";
import zebra from "@/assets/zebra.jpg";
import Prince from "@/assets/prince.svg";

function TODO(a: number) {
  TODO2();
}
function TODO2() {
  throw new Error();
}
export const App = () => {
  const [count, setCount] = useState<number>(0);
  function eventAdder() {
    setCount(() => count + 1);
  }

  function eventSub() {
    setCount(() => count - 1);
    TODO(2);
  }

  // TODO(1223);
  // if (__PLATFORM__ === "descktop") {
  //   return <div>ISDESKTOPPLAFORM</div>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>ISMOBILEPLAFORM</div>;
  // }

  return (
    <div data-testid={"App"}>
      <h1 data-testid={"platform"}>PLATFORM ={__PLATFORM__}</h1>
      <Link to={"/about"}></Link>
      <Link to={"/shop"}></Link>
      <h1>Counter</h1>
      <button onClick={eventSub}>-</button>
      <span>{count}</span>
      <button className={classes.button} onClick={eventAdder}>
        +
      </button>
      <div>
        Images
        <img src={princes} alt="" />
        <img src={zebra} alt="" />
        <Prince width={500} height={500} color={"red"} />
      </div>
    </div>
  );
};
