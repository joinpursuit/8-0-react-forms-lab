import React from "react";
import "./Form.css";

class Form extends React.Component {
  
  render() {
    return (
      <form onSubmit={this.props.onChildSubmit}>
        <input className={this.props.errorState ? "error":""} id="values" name="values" type="text" value={this.props.val} onChange={this.props.onUserInput} />
        <select className={this.props.errorState ? "error":""} id="operation" name="operation" value={this.props.oper} onChange={this.props.onSelection}>
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
