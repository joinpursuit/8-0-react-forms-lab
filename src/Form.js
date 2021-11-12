import React from "react";
import "./Form.css";

class Form extends React.Component {

  render() {
    const {handleUserInput, handleSelectInput, userInput, mathOperation, handleFormSubmit} = this.props;
   // console.log(this.calculator)
   // console.log(userInput)
    return (
      <form onSubmit={handleFormSubmit}>

        <input 
          id="values" 
          name="values" 
          type="text" 
          value={userInput}
          onChange={handleUserInput}
        />

        <select id="operation" name="operation" value={mathOperation} onChange={handleSelectInput}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>

        <button type="submit">Calculate</button>

      </form>
    );
  }
}

export default Form;

    //mode of [1, 20, 3, 20, 4, 20] = [20]
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]