// import usestate from React - updated values 
import React, { useState } from "react";

// import the Form with all the functionality
import Form from "./Form";
import "./App.css";

function App() {

  // add the calculated values to the FRONT END so the user can see
  const [result, setResult] = useState("");

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>

      {/* add the form the the App.js that will perform the calculations and return the updated results to the user */}
      <Form
        handleResult={result => setResult(result)}
      />
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  );
}


export default App;