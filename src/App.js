import React from "react";
import Form from "./Form";
import "./App.css";
import { useState } from "react";
function App() {
  // set state to tranfer result
  const [myResult, setMyResult] = useState(``)

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form result ={myResult} setResult={setMyResult} />
      <section id="result">
        <p>{myResult}</p>
      </section>
    </main>
  );
}

export default App;
