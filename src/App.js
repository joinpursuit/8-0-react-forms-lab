import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [resultForm, setResultForm] = useState("");

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setResultForm={setResultForm} />
      <section id="result">
        <p>{resultForm}</p>
      </section>
    </main>
  );
}

export default App;
