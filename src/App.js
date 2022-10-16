import React , {useState} from "react";
import Form from "./Form";
import "./App.css";

function App() {

  const [submit, setSubmit] = useState("")

  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setSubmit = {setSubmit}/>
      <section id="result">
        <p>{submit}</p>
      </section>
    </main>
  );
}

export default App;
