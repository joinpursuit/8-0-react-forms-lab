import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      inputtedValue: "",
      calcResult: "",
      selectedCalc: "",
    };
  }

  handletextChange = (e) => {
    const { value } = e.target;

    this.setState({
      inputtedValue: value,
    });
  };

  selectCalculation = (e) => {
    const { value } = e.target;

    this.setState({
      selectedCalc: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { inputtedValue } = this.state;
    let valueArr = inputtedValue.toString().split(",");

    if (inputtedValue.indexOf(",") > -1) {
      this.errorHandle(valueArr);
    } else {
      this.errorHandle(valueArr);
    }
  };

  errorHandle = (valueArr) => {
    const values = document.querySelector("#values");
    const operation = document.querySelector("#operation");
    let errors = false;

    if (valueArr.length <= 1) {
      this.setState({
        calcResult: "Invalid input.",
      });
      errors = true;
    } else {
      for (const nums of valueArr) {
        if (!Number(nums) || nums.includes(" ")) {
          this.setState({
            calcResult: "Invalid input.",
          });
          errors = true;
        } else {
          this.setState({
            inputtedValue: valueArr,
            calcResult: "",
          });
        }
      }
      if (errors === true) {
        values.classList.add("error");
        operation.classList.add("error");
      } else {
        this.doCalculations(valueArr);
        values.classList.remove("error");
        operation.classList.remove("error");
      }
    }
  };

  doCalculations = (valueArr) => {
    const { selectedCalc } = this.state;
    let result = 0;

    switch (selectedCalc) {
      case "sum":
        result = valueArr.reduce((current, next) => {
          return Number(current) + Number(next);
        });
        break;
      case "average":
        for (const values of valueArr) {
          result += Number(values) / valueArr.length;
        }
        break;
      case "mode":
        let obj = {};
        valueArr.forEach((ele) => {
          if (obj[ele]) {
            obj[ele]++;
          } else {
            obj[ele] = 1;
          }
        });
        let curValue = 0;
        for (const [key, value] of Object.entries(obj)) {
          if (value > curValue) {
            curValue = value;
            result = key;
          }
        }
        break;
      default:
        break;
    }
    if (!Number(result)) {
      this.setState({
        calcResult: "Invalid input.",
      });
    } else {
      this.setState({
        calcResult: result,
        inputtedValue: "",
        selectedCalc: "",
      });
    }
  };

  render() {
    const { inputtedValue, calcResult, selectedCalc } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          value={inputtedValue}
          onChange={this.handletextChange}
        />
        <select
          id="operation"
          name="operation"
          value={selectedCalc}
          onChange={this.selectCalculation}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={this.handleSubmit}>
          Calculate
        </button>
        <div>{calcResult}</div>
      </form>
    );
  }
}

export default Form;
