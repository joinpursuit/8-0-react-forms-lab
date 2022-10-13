//I AM UPDATED CODE

import React from "react";
import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [AppResult, setAppResult] = useState("");
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form changeResult={(AppResult) => setAppResult(AppResult)} />
      <section id="result">
        <p>{AppResult}</p>
      </section>
    </main>
  );
}

export default App;
