import React from "react";
import { useState } from "react";
import "./Form.css";

function Form(props) {
  //******** STATES *******/

  // Textbox
  // const [userTextBox, setUserTextBox] = useState([]);
  const [numArr, setNumArr] = useState([]);

  // Select Box
  const [mySelect, setMySelect] = useState("");

  //********** HELPERS *******/

  //Errors
  const errors = () => {
    // typeof userTextBox !== "number" ? alert("invalid input") : null;
  };

  const convertToNumbers = (e) => {
    const textBoxVals = e.target.value.split(",");
    setNumArr(textBoxVals.map((e) => Number(e)));
  };

  const calculate = () => {
    let sum;
    let average;
    let modeObj = {};
    let modeOccurence = 0;
    let modeNum;

    let modeArr = [];
    if (mySelect === "sum") {
      // console.log(numArr);
      sum = numArr.reduce((acc, num) => {
        return (acc += num);
      }, 0);
      props.changeResult(sum);
    }
    if (mySelect === "average") {
      sum = numArr.reduce((acc, num) => {
        return (acc += num);
      }, 0);
      average = sum / numArr.length;
      props.changeResult(average);
    }

    if (mySelect === "mode") {
      modeObj = {};
      numArr.forEach((e) => {
        if (modeObj[e]) {
          modeObj[e] += 1;
        } else {
          modeObj[e] = 1;
        }
      });
      for (const key in modeObj) {
        // console.log(modeObj);
        if (modeOccurence < modeObj[key]) {
          modeOccurence = modeObj[key];
          modeNum = key;
        }
      }
      props.changeResult(modeNum);
    }
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
    // console.log(sum);
  };

  //********* RETURN ********/

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={convertToNumbers}
        id="values"
        name="values"
        type="text"
      />
      <select
        value={mySelect}
        onChange={(e) => setMySelect(e.target.value)}
        id="operation"
        name="operation"
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
