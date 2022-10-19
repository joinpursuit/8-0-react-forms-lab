import { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [operation, setOperation] = useState("");
  const [numbers, setNumbers] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    function mode(arr) {
      return arr
        .sort(
          (a, b) =>
            arr.filter((v) => v === a).length -
            arr.filter((v) => v === b).length
        )
        .pop();
    }

    let numArray = numbers.split(",").map((num) => Number(num));
    let total;

    if (!operation || !numbers) {
      setResult("Invalid input.");
    } else {
      total = numArray.reduce((prev, curr) => prev + curr, 0);

      if (operation === "sum") {
        setResult(total);
      } else if (operation === "average") {
        setResult(total / numbers.split(",").length);
      } else {
        setResult(mode(numArray));
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        onChange={(event) => setNumbers(event.target.value)}
      />
      <select
        id="operation"
        name="operation"
        onChange={(event) => setOperation(event.target.value)}
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
