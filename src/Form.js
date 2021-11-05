import React from "react";
import "./Form.css";

class Form extends React.Component {

  render() {
    return (
      <form>
        <input onChange={this.props.handleInput} id="values" name="values" type="text" />
        <select onChange={this.props.handleOperationChange} id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={this.props.clearText} type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
