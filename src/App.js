import React from "react";
import Form from "./Form";
import "./App.css";
import {useState} from "react";

function App() {
  const [output, setOutput] = useState();

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setOutput={setOutput}/>
      <section id="result">
        <p>{output}</p>
      </section>
    </main>
  );
}

export default App;
