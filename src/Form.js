import React, { useState } from "react";
import "./Form.css";

function Form() {
  // const [result, setResult] = useState(0);
  // const [inputVar, setInputVar] = useState("");
  // const [selector, setSelector] = useState("");

  const [nickName, setNickName] = useState("");
  const [mathOptions, setMathOptions] = useState("");
  const [result, setResult] = useState("");

  // function handleNickNameChange(event) {
  //   // should i use return?
  //   return setNickName(event.target.value);
  // }
  // handle submmit
  function handleSubmit(event) {
    event.preventDefault();
    setResult(`${testVal} ${mathOptions}`);
  }
  console.log(result, "form submitted");

  // function handleTextChange(event) {
  //   console.log(event.target.value);
  // }

  let valNumArr = nickName.split(",").map(Number);

  let Mode = function (data) {
    var counts = {};
    for (let i = 0; i < data.length; i++) {
      counts[data[i]] = (counts[data[i]] || 0) + 1;
    }
    var max = 0;
    var values = [];
    for (var key in counts) {
      if (counts.hasOwnProperty(key)) {
        if (counts[key] > max) {
          max = counts[key];
          values = [key];
        } else if (counts[key] === max) {
          max = counts[key];
          values.push(key);
        }
      }
    }
    return values.join(", ");
  };

  let valSplit = nickName
    .split(",")
    .map(Number)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  let dividedBy = nickName.split(",").length;
  //
  console.log(valSplit, "split sum");
  console.log(valSplit / dividedBy, "avg val");
  console.log(Mode(valNumArr), "mode val");
  let testVal;
  // let sum = valSplit;
  // let avg = valSplit / dividedBy;
  // let valMode = Mode(valNumArr);
  if (mathOptions === "sum") {
    testVal = valSplit;
  } else if (mathOptions === "average") {
    testVal = valSplit / dividedBy;
  } else if (mathOptions === "mode") {
    testVal = Mode(valNumArr);
  }
  // further down

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />
      <select
        id="operation"
        name="operation"
        value={mathOptions}
        onChange={(e) => setMathOptions(e.target.value)}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
      {/* // */}
      {/* <input type="text" /> */}
      <h3>
        {/* {mathOptions === "sum" && sum}
        {mathOptions === "average" && avg} */}
        {result}
      </h3>

      {/* <h3>{mathOptions === "average" && avg} average</h3>
      <h3>{mathOptions === "mode" && valMode} mode</h3> */}
      {/* // */}
    </form>
  );
}

export default Form;
