import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      values: "",
      operation: "",
      result: "",
    };
  }

  mathWiz = () => {
    const { values, operation } = this.state;
    if (!values) {
      return `Invalid input.`;
    }
    const arrayOfNums = values.split(",").map((num) => Number(num));
    if (arrayOfNums.includes(NaN)) {
      return `Invalid input.`;
    }
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
        let biggestValue = -1;
        let biggestValueKey = -1;

        Object.keys(obj).forEach((key) => {
          let value = obj[key];
          if (value > biggestValue) {
            biggestValue = value;
            biggestValueKey = key;
          }
        });

        return biggestValueKey;
      }
      return getMode(arrayOfNums);
    }
  };

  handleInputValues = (e) => {
    const { value } = e.target;
    this.setState({
      values: value,
    });
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    this.setState({
      operation: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      result: this.mathWiz(),
    });
  };

  render() {
    const { values, operation, result } = this.state;
    return (
      <div>
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
        <p>{result}</p>
      </div>
    );
  }
}

export default Form;
