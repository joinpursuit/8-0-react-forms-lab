import { mode } from "mathjs";

function calculator(operation, list) {
  if (list.length < 1) {
    return "Invalid input.";
  }
  let nums = list.split(",");
  nums = nums.map((num) => {
    return Number(num);
  });

  if (nums.includes(NaN)) {
    return "Invalid input.";
  } else {
    switch (operation) {
      case "sum":
        return nums.reduce((a, b) => {
          return a + b;
        });
        break;
      case "average":
        return (
          nums.reduce((a, b) => {
            return a + b;
          }) / nums.length
        );
        break;
      case "mode":
        return mode(nums);
        break;
      default:
        return "Invalid input.";
    }
  }
}

export default calculator;
