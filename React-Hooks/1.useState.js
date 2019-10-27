import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  // useState는 항상 2개의 value를 리턴한다.
  //첫 인자는 기본(정적인 value), 두번째 인자는 변경될때 사용하는 value
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
