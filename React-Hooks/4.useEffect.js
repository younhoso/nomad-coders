import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  /**
   * useEffect는 
   * ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate 와 동일하다.
   * 이것 모두 상태변화를 감시할거고, componenet는 unmount될거다.
   */
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
