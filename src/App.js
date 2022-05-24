import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

const App = () => {
  const [calculation, setCalculation] = useState('');
  return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form calculation={calculation} setCalculation={setCalculation}/>
        <section id="result">
          <p></p>
          <p>{ calculation }</p>
        </section>
      </main>
    );
  }

export default App;
