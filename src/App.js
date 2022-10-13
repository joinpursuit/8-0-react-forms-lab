import { React, useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [rst,setResult] = useState({messgae:"",class:""})
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form updateResult={setResult} updateHandle={rst}/>
      <section id="result">
        <p className={rst.class}>{rst.message}</p>
      </section>
    </main>
  );
}

export default App;
