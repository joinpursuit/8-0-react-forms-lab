import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          className={this.props.errorClass}
          onChange={this.props.handleNumbers}
          id="values"
          name="values"
          type="text"
        />
        <select
          className={this.props.errorClass}
          onChange={this.props.handleOperation}
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
}

export default Form;
