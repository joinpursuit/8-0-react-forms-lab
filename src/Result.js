import React from "react";

class Result extends React.Component {
  mathWiz = () => {
    const { values, operation } = this.props;
    if (!values || !operation) {
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
        let biggestValue = 0;
        let biggestValueKey = 0;
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
  render() {
    return <div>{this.mathWiz()}</div>;
  }
}

export default Result;
