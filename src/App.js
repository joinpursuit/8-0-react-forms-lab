import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  let [submitted, setSubmitted] = useState("");

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setSubmitted={setSubmitted} />
      <section id="result">
        <p>{submitted}</p>
      </section>
    </main>
  );
}

export default App;
