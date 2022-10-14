import React from "react"
import { useState } from "react"
import "./Form.css"

function Form() {
  // creating state for input values
  const [inputBox, setInputBox] = useState("")
  const [myselectOption, setSelectOption] = useState("")

  function handleTextChange(event) {
    setInputBox(event.target.value)
  }

  function myAlgo() {
    let arrayInput = inputBox.split(",")
    let sum = 0
    if (myselectOption === "sum") {
      arrayInput.reduce((acc, curr) => {
        return Number(acc) + Number(curr)
      }, sum)
    } else if (myselectOption === "average") {
      arrayInput.reduce((acc, curr) => {
        return Number(acc) + Number(curr) / arrayInput.length
      })
    } else if (myselectOption === "mode") {
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    reset()
    myAlgo()
  }

  function reset() {
    setInputBox(" ")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={inputBox}
        onChange={handleTextChange}
      />
      <select
        id="operation"
        name="operation"
        value={myselectOption}
        onChange={(event) => setSelectOption(event.target.value)}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  )
}

export default Form
