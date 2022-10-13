import React from "react";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form />
      <section id="result">
        <handleCalc />
        <p>ANSWER GOES HERE:{}</p>
      </section>
    </main>
  );
}

export default App;
