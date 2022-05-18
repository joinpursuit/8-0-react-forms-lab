import {useState} from "react";
import "./Form.css";

const Form = () => {
const [numArray, setnumArray] = useState('')

const handleArray = (e) =>{
  const {value} = e.target
  // alert( value)
setnumArray(value.split(",").map(i => +i))
}

const handleOperation = (e) => {
  const {value} = e.target;
  if(value === "sum"){
    setnumArray( numArray.reduce((a, b) => a + b) )
  }
  if(value === "average")  {
    setnumArray(numArray.reduce((a, b) => a + b)/ numArray.length )
  }  


}
    return (
      <form>
        <h1>{numArray}</h1>
        <input id="values" name="values" type="text" 
        onChange={handleArray}
        />
        <select id="operation" name="operation"
        onChange={ handleOperation }
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit"> This Calculate button is useless lol</button>
      </form>
    );
  
}

export default Form;
