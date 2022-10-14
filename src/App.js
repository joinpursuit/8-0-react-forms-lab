import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [getCalc, setGetCalc] = useState(null);

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form getResult={(x) => setGetCalc(x)} />
      <section id="result">
        <p className="res">{getCalc}</p>
      </section>
    </main>
  );
}

export default App;
