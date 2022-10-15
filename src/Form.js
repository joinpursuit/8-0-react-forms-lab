import React from "react"
import { useState } from "react"
import "./Form.css"

function Form({ result, setResults }) {
  // creating state for input values
  const [inputBox, setInputBox] = useState("")
  const [select, setSelectOption] = useState("")
  const [error, setErrors] = useState(false)

  function handleTextChange(event) {
    setInputBox(event.target.value)
  }

  function myAlgo(inputBox) {
    let arrayInput = inputBox.split(",")
    const myInputAlgo = arrayInput.reduce((a, b) => {
      return Number(a) + Number(b)
    }, 0)

    if (!inputBox || !select || inputBox === !Number) {
      setErrors(true)
      return setResults("Invalid input.")
    }

    if (select === "sum") {
      return myInputAlgo
    }
    if (select === "average") {
      return myInputAlgo / arrayInput.length
    }
    if (select === "mode") {
      let obj = {}
      arrayInput.forEach((element) => {
        if (!obj[element]) {
          obj[element] = 1
        } else {
          obj[element] += 1
        }
      })

      let inputValue = 0
      let mykey
      for (let newkey in obj) {
        if (obj[newkey] > inputValue) {
          mykey = newkey
          inputValue = obj[newkey]
        }
      }
      return mykey
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    setResults(myAlgo(inputBox))
    if (!inputBox || !select || inputBox === !Number) {
      setErrors(true)
      return setResults("Invalid input.")
    }
    reset()
    setErrors(false)
    if (result === "Invalid input.") {
      reset(result)
    }
  }

  function reset() {
    setInputBox(" ")
    setSelectOption(" ")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={error ? "error" : null}
        id="values"
        name="values"
        type="text"
        value={inputBox}
        onChange={handleTextChange}
      />
      <select
        className={error ? "error" : null}
        id="operation"
        name="operation"
        value={select}
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
