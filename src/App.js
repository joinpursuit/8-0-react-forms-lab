import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [someState, setSomeState] = useState("")
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setSomeState={setSomeState}/>
      <section id="result">
        <p>{someState}</p>
      </section>
    </main>
  );
}

export default App;
