import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input onChange={this.props.handleInput} id="values" name="values" type="text" className={this.props.errorClass} />
        <select onChange={this.props.handleOperationChange} id="operation" name="operation" className={this.props.errorClass} >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={this.props.afterSubmit} type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;