import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {

  // need to show the result from form.js with props

  const [result, setResult] = useState("")

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setOutput={setResult} result={result}/>
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  );
}

export default App;
