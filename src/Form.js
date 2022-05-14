import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [nums, setNums] = useState("");
  const [selected, setSelect] = useState("");
  const h3 = document.querySelector('h3');
  const error = () => document.querySelector('h3').innerHTML = "Invalid input."


  const onSubmit = (e) => {
    e.preventDefault();
    if (nums === "" && selected === "") {
      error();
    }
  };

  const onSelect = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSelect(value);
    console.log(value)

    let inputArray = nums.split(",").map(num => Number(num));
    console.log(nums)

    if (inputArray.includes(NaN)) {
      error();
    } else {
      console.log(inputArray)
      if (value === 'sum') {
        let total = 0;
        inputArray.map(el => total += el);
        h3.innerHTML = total;
      } else if (value === "average") {
        let total = 0;
        inputArray.map(el => total += Number(el));
        h3.innerHTML = total / inputArray.length;
      } else if (value === 'mode') {
        let object = {};
        for (let element of inputArray) {
          if (object[element]) {
            object[element] += 1;
          } else {
            object[element] = 1;
          }
        }
        let modeValue = Object.keys(object).reduce((a, b) => { return object[a] > object[b] ? a : b });
        h3.innerHTML = modeValue;
      }
    }
  }




  return (
    <form onSubmit={onSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        // value={nums}
        onChange={e => {
          setNums(e.target.value);
        }}
      />

      <select
        id="operation"
        name="operation"
        value={selected}
        onChange={onSelect}
      >

        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>

      <h3></h3>
    </form>
  );

}

export default Form;
