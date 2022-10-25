import React from "react";
import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {

  const [selectOption, setSelectOption] = useState("")
  const [numbers, setNumbers] = useState([])
  const [inputTotal, setInputTotal] = useState("")

  function handleSelectChange(event) {
    setSelectOption(event.target.value)
  }

  function handleNumbersChange(event) {
    setNumbers(event.target.value)
    
  }

  function calculateForm (selectOption) {
    if (selectOption === "average") {

    }
    if (selectOption === "mode") {
      
    }
    if (selectOption === "sum") {
      let total = 0
      console.log(total)
      setInputTotal(total)
      console.log(inputTotal)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    calculateForm(selectOption)
  }

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form handleSelectChange={handleSelectChange} handleSubmit={handleSubmit} handleNumbersChange={handleNumbersChange}/>
      <section id="result">
        <p>{inputTotal}</p>
      </section>
    </main>
  );
}

export default App;
