import React from "react";
import "./Form.css";
// [1,3,3,7]
function  Form() {
  const add = (nums) => {
    let total = 0;
   nums.foreach(total)
  }
  return (
    <form>
      <input id="values" name="values" type="text" />
      <select id="operation" name="operation">
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}


 
   


export default Form;
