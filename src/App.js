import React, { useState } from "react";
import Form from "./Form";
// import PracticeForm from "./PracticeForm";
import "./App.css";

function App() {

  const [result, setResult] = useState("");

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setResult = {setResult}/>
      {/* <PracticeForm setResult={setResult}/> */}
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  );
}


export default App

//Statistics is the measure of Gods will