import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const { total, setTotal } = props;
  //state for input
  const [input, setInput] = useState("");
  //state for selector
  const [select, setSelect] = useState("");

  // handler functions
  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const numArray = input.split(",").map((num) => {
    return Number(num);
  });

  let sum = 0;
  let average = 0;
  let mode = 0;
  let count = 0;

  for (let i = 0; i < numArray.length; i++) {
    if (select === "sum") {
      console.log("sum", sum);
      numArray.forEach((num) => {
        sum += num;
      });
      console.log("total sum", sum);
      setTotal(sum);
    }

    if (select === "average") {
      numArray.forEach((num) => {
        average = sum / numArray.length;
      });
      console.log("total avgerage", average);
      setTotal(average);
    }

    if (select === "mode") {
      for (let j = 0; j < i; j++) {
        if (numArray[j] === numArray[i]) {
          mode = numArray[j];
          count++;
        }
      }
      console.log("total mode", mode);
      setTotal(mode);
    }
  }

  return (
    <>
      <form>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleInput}
          value={input}
        />
        <select
          id="operation"
          name="operation"
          onChange={handleSelect}
          value={select}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    </>
  );
};
export default Form;

// class Form extends React.Component {
//   render() {
//     return (
//       <form>
//         <input id="values" name="values" type="text" />
//         <select id="operation" name="operation">
//           <option value=""></option>
//           <option value="sum">sum</option>
//           <option value="average">average</option>
//           <option value="mode">mode</option>
//         </select>
//         <button type="submit">Calculate</button>
//       </form>
//     );
//   }
// }

// export default Form;
