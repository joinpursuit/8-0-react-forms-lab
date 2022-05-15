
// import useState from React
import React, { useState } from "react";
import "./Form.css";

// props are the updated values to be added on the FRONT end via the parent.js - App.js
const Form = (props) => {

  // - SET STATE - #1
  // create a current INPUT tag and updated INPUT tag added to useState to manipulate
  const [textInput, setTextInput] = useState("");

    // create a current SELECT tag and updated SELECT tag added to useState to manipulate
  const [selectedOperation, setSelectedOperation] = useState("");

    // create a current  CALCULATE BUTTON and updated CALCULATE BUTTON added to useState to manipulate
  const [result, setResult] = useState("");

    // create a current ERROR STATUS and updated ERROR STATIS added to useState to manipulate
  const [className, setErrorClassName] = useState("");


// - CREATE EVENT FUNCTION - #2 AND #3 -THAT WILL CHANGE THE CURRENT VALUE TO THE UPDATED ONE

// when INPUT TAG has text submitted by the user the value will change from this to that
  const handleTextInput = (e) => {
    const { value } = e.target;
    setTextInput(value);
  };
// when SELECT TAG is submitted by the user the value will change from this to that
  const handleSelectedOperation = (e) => {
    const { value } = e.target;
    setSelectedOperation(value);
  };

// - CREATE EVENT FUNCTION - THAT WILL CALCULATE (Calculate Button) AND RETURN THE VALUE AS A PROP - UPDATED VALUE SHOWN TO THE USER{PROP}
  const handleResult = () => {
    props.handleResult(result);
  };


  // - CREATE EVENT FUNCTION - THAT WILL RESET ALL FIELDS AFTER CALCULATION 
  const clearFields = () => {
    setTextInput('');
    setSelectedOperation('');
    setErrorClassName('');
  };

  // - WHEN THE USER HAS PUT TEXT IN THE INPUT TAG AND SELECTED AN EXPRESSION THE FOLLOWING WILL BE PERFORMED ON THE TEXT 
  // the box with all an array of values - textInput.split(',').map(i => i * 1); - TURNS 1,2,3 INTO [1,2,3]
  const handleSubmit = (e) => {

    // - first take the input string values and turn them into an array seperated by comma .split(",") - iterate thorugh the array and make a new array with each value multiplied by 1 
    const myArray = textInput.split(',').map(i => i * 1);

    // SUM OF THE ARRAY - WITH OPERATION DROP DOWN 
    const sum = myArray.reduce((a, b) => (a + b));

    // AVERAGE OF ARRAAY - WITH OPERATION DROP DOWN 
    const average = Math.floor(sum / myArray.length);

    // MODE OF ARRAY - HAS IT'S OWN FUNCTION 
    const mode = getMode(myArray);


    // PREVENT PAGE FROM REFRESHING WITH OPERATION DROPDOWN IS CHOSEN
    e.preventDefault();

    // - IF NO TEXT IN INPUT FIELD -  OR IF NO SELECT OPERATION CHOSEN - OR IF THE NUMBER IN THE ARRAY IS NOT A NUMBER..RETURN INPUT IS INVALID - LEAVE THE WRONG TEXT - RUN ERROR MESSAGE
    if (!textInput || !selectedOperation || Number.isNaN(myArray[0])) {
      setResult(`Invalid input.`);
      setTextInput(textInput);
      setErrorClassName('error');

      // ELSE IF THERE IS TEXT AND SELECT OPTION IS SUM
    } else if (textInput && selectedOperation === "sum") {

      // RUN THE SUM CALCULATION AND PUT ANSWER IN RESULT SECTION - THEN CLEAR ALL FIELDS W/ FUNCTION 
      setResult(sum);
      clearFields();

      //  ELSE IF THERE IS TEXT AND SELECT OPTION IS AVAERAGE  
    } else if (textInput && selectedOperation === "average") {

      // RUN THE AVERAGE CALCULATION AND PUT ANSWER IN RESULT SECTION - THEN CLEAR ALL FIELDS W/ FUNCTION 
      setResult(average);
      clearFields();

    } else {
      // RUN THE MODE FUNCTION AND PUT ANSWER IN RESULT SECTION - THEN CLEAR ALL FIELDS W/ FUNCTION 
      setResult(mode);
      clearFields();
    }
  };

  // - MODE - IS TO COUNT THE NUMBER OF TIMES A VALUE APPEARS TAKE THE ARRAY AND CREATE AN OBJECT WITH THE KEY CURRENT KEY AND THE VALUE HIGHESTCOUNT OF 0
  const getMode = (myArray) => {
    let myModeObj = {};
    let curentKey;
    let highestCount = 0;

    // IF THE ITERATION THROUGH THE ARRAY DOES NOT HAVE AN OCCURANCE GIVE IT A VALUE OF 1
    myArray.forEach(el => {
      if (!myModeObj[el]) {
        myModeObj[el] = 1;
      } else {
        // ELSE IF THE OCCURANCE IS MORE THAT 1 ADD 2 AS ITS VALUE - AND +1 FOR EACH OCCURANCE 
        myModeObj[el] += 1;
      }
    });

    // ITERATE THROUGH THE NEW OBJECT KEY VALUES  - IF THE KEY VALUE IS GREATER THAN THE LAST KEY VALUE COMPARE AND RETURN THE KEY WITH THE HIGHESTCOUNT VALUE
    Object.entries(myModeObj).forEach(([k, v]) => {
      if (v > highestCount) {
        curentKey = k;
        highestCount = v;
      }
    });
    return curentKey;
  };

// - ATTACH THE EVENT FUNCTIONS TO THE FORM TAG - SELECT TAG - AND (onClick)CALCULATE BUTTON 
// - ADD CLASSNAME TO INPUT TAG AND SELECT TAG FOR ERROR NOTIFICATIN 
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

