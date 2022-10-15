import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [userInput, setUserInput] = useState("");
  const [selection, SetUserSelection] = useState("");
  const [err, setErr] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value.split(","));
    console.log(e.target.value.split(","));
  };

  const handleUserS = (e) => {
    SetUserSelection(e.target.value);
  };

  const form = (e) => {
    e.preventDefault();
    if (!selection || !userInput || userInput !== Number) {
      setErr("Invalid input");
      console.log(err);
    }
    let sum = 0;
    let result;
    //let obj = {}
    if (selection === "sum") {
      userInput.forEach((input) => {
        sum += Number(input);
      });
      console.log(sum);
    }
    if (selection === "average") {
      result = userInput.reduce((a, b) => a + b, 0) / userInput.length;
      console.log(result);
    }
    // if(selection === 'mode') {
    // userInput.forEach((input) => {
    //   if(obj[userInput]) {
    //     obj[userInput] += 1
    //   }else{
    //     obj[userInput] = 1
    //   }
    // })
    // }
  };

  return (
    <form onSubmit={form}>
      <input
        type="text"
        id="values"
        name="values"
        value={userInput}
        className={err}
        onChange={handleUserInput}
      />

      <select
        id="operation"
        name="operation"
        value={selection}
        className={err}
        onChange={handleUserS}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>

      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
//value={userInput}  onChange={(e)=>takeUserInput(e.target.value)

// const inputBody = () => {
//   //setUserInput([userInput]) //setUserInput will place userInput into an array to  iterate the input and perform the calculation on submit
// };


