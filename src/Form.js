import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    const {numbersArr, operator, handleNumbers, handleOperation, handleFormSubmit} = this.props;
    return (
      <form onSubmit = {handleFormSubmit}>
        <input id="values" name="values" type="text" value = {numbersArr} onChange = {handleNumbers} />
        <select id="operation" name="operation" value = {operator} onChange = {handleOperation}>
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
