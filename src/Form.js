import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      values: "",
      operation: "",
    };
  }

  mathWiz = () => {
    const { values, operation } = this.state;
    const arrayOfNums = values.split(",").map((num) => Number(num));
    if (operation === "sum") {
      return arrayOfNums.reduce((a, b) => a + b, 0);
    } else if (operation === "average") {
      let sum = arrayOfNums.reduce((a, b) => a + b, 0);
      return sum / arrayOfNums.length;
    } else if (operation === "mode") {
      function getMode(array) {
        const obj = {};
        array.forEach((num) => {
          if (!obj[num]) {
            obj[num] = 1;
          } else {
            obj[num] += 1;
          }
        });
        let highestValue = 0;
        let highestValueKey = -Infinity;

        for (let key in obj) {
          const value = obj[key];
          if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
          }
        }
        return highestValueKey;
      }
      return getMode(arrayOfNums);
    }
  };

  handleInputValues = (e) => {
    const { value } = e.target;
    this.setState({ values: value });
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    this.setState({
      operation: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    alert(this.mathWiz());
  };

  render() {
    const { values, operation } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={values}
          onChange={this.handleInputValues}
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={this.handleSelectChange}
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
