import React from "react";
import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  function getResult(x) {
    setResult(x);
  }

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form getResult={getResult} />
      <section id="result">{result && <p>{result}</p>}</section>
    </main>
  );
}

export default App;
