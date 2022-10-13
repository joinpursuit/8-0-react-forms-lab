import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [appResult, setAppResult] = useState("");

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form changeResult={(appResult) => setAppResult(appResult)} />
      <section id="result">
        <p>{appResult}</p>
      </section>
    </main>
  );
}

export default App;
