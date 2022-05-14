0
import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

const App = () => {
  const [answer, setAnswer] = useState("");
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setAnswer={setAnswer}/>
      <section id="result">
        <p>{answer}</p>
      </section>
    </main>
  );
};

export default App;