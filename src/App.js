import React from "react";
import { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {

  const [selectOption, setSelectOption] = useState("")
  const [numbers, setNumbers] = useState("")
  const [inputTotal, setInputTotal] = useState("")
  let array = numbers.split(",")

  let total = 0

  function handleSelectChange(event) {
    setSelectOption(event.target.value)
  }

  function handleNumbersChange(event) {
    setNumbers(event.target.value)
  }

  function helper(array) {
    for (const value of array) {
      if (!Number(value)) {
        return false
      }
    }
    return true
  }

  function calculateForm (event) {
    if (selectOption === "average") {
      for (const number of array) {
        total += Number(number);
      }
      total /= array.length
      setInputTotal(total)
    }
    if (selectOption === "mode") {
      let obj = {}
      for (const number of array) {
        if (obj[number]) {
          obj[number] += 1
        } else {
          obj[number] = 1
        }
      }
      let repeater = 0
      let mode = 0
      Object.keys(obj).forEach((key) => {
        let value = obj[key]
        if (value > repeater) {
          repeater = value
          mode = key
        }
      })
      setInputTotal(mode)   
    }
    if (selectOption === "sum") {
      for (const number of array) {
        total += Number(number);
      }
      setInputTotal(total)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    helper(array)
    if (helper(array)) {
      calculateForm(event)
    } else {
      alert("Invalid input.")
    } 
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
