import React, { useState } from "react";
import "./Form.css";


const Form = (props) => {
  const [textInput, setTextInput] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("");
  const [result, setResult] = useState("");
  const [className, setErrorClassName] = useState("");

  const handleTextInput = (e) => {
    const { value } = e.target;
    setTextInput(value);
  };

  const handleSelectedOperation = (e) => {
    const { value } = e.target;
    setSelectedOperation(value);
  };

  // ADD THE VALUES TO THE RESUKT
  const handleResult = () => {
    props.handleResult(result);
  };


  // SET ALL FIELDS TO NOTHING
  const clearFields = () => {
    setTextInput('');
    setSelectedOperation('');
    setErrorClassName('');
  };

  // the box with all an array of values - textInput.split(',').map(i => i * 1); - TURNS 1,2,3 INTO [1,2,3]
  const handleSubmit = (e) => {
    const myArray = textInput.split(',').map(i => i * 1);
    // SUM OF THE ARRAY - WITH OPERATION DROP DOWN 
    const sum = myArray.reduce((a, b) => (a + b));
    // AVERAGE OF ARRA
    const average = Math.floor(sum / myArray.length);

    const mode = getMode(myArray);


    // PREVENT PAGE FROM REFRESHING WITH OPERATION DROPDOWN IS CHOSEN
    e.preventDefault();

    // ERROR MESSAGE FOR NO TEXT OR OPERATION NUMBER CHOSEN - RETURN INPUT IS INVALID - LEAVE THE WRONG TEXT - RUN ERROR MESSAGE
    if (!textInput || !selectedOperation || Number.isNaN(myArray[0])) {
      setResult(`Invalid input.`);
      setTextInput(textInput);
      setErrorClassName('error');

      // IF THERE IS TEXT AND OPERATION CHOSEN IS SUM - THEN CLEAR THE FIELDS
    } else if (textInput && selectedOperation === "sum") {
      setResult(sum);
      clearFields();

      // IF THERE IS TEXT AND OPERATION CHOSEN IS AVERAGE - THEN CLEAR THE FIELDS

    } else if (textInput && selectedOperation === "average") {
      setResult(average);
      clearFields();

    } else {
      setResult(mode);
      clearFields();
    }
  };

  // TAKE THE ARRAY AND CREATE AN OBJECT WITH THE VALUES
  const getMode = (myArray) => {
    let myModeObj = {};
    let curentKey;
    let highestCount = 0;

    // IF THE ITERATION THROUGH THE ARRAY HAS ONE OCCURANCE GIVE IT A KEY OF 1
    myArray.forEach(el => {
      if (!myModeObj[el]) {
        myModeObj[el] = 1;
      } else {
        // ELSE IF THE OCCURANCE IS MORE THAT 1 ADD 2 AS ITS KEY
        myModeObj[el] += 1;
      }
    });

    // ITERATE THROUGH THE OBJECT KEY VALUES AND RETURN THE KEY WITH TH MOST ITERATION VALUES
    Object.entries(myModeObj).forEach(([k, v]) => {
      if (v > highestCount) {
        curentKey = k;
        highestCount = v;
      }
    });
    return curentKey;
  };


  return (
    <form onSubmit={handleSubmit} >
      <input id="values" className={className} name="values" type="text" onChange={handleTextInput} value={textInput} />
      <select id="operation" name="operation"
        onChange={handleSelectedOperation}
        value={selectedOperation}
        className={className}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit" onClick={handleResult()}>Calculate
      </button>
    </form>
  );
}
export default Form;

