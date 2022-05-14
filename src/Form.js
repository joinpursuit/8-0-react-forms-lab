import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    const {
      values,
      operation,
      handleSelectChange,
      handleInputChange,
      handleFormSubmit,
    } = this.props;
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            id="values"
            name="values"
            type="text"
            value={values}
            onChange={handleInputChange}
          />
          <select
            id="operation"
            name="operation"
            value={operation}
            onChange={handleSelectChange}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default Form;
