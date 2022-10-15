import React from "react"
import Form from "./Form"
import "./App.css"
import { useState } from "react"

function App() {
  const [result, setResults] = useState("")
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setResults={setResults} />
      <section id="result">
        <p>{result}</p>
      </section>
    </main>
  )
}

export default App
