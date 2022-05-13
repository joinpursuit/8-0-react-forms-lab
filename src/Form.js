import{ useState } from "react";
import "./Form.css";

const Form = () => {
    const [numbers, setNumbers] = useState(0);
    const [select, setSelect] = useState("");
    const [result, setResult] = useState();
    const getNumbers = (e) => {
    let numArr = [];
     
    const str = e.target.value;
      numArr = str.split(',');
      setNumbers(numArr)
    }

    const handleSelect = (e) => {
       const {value} = e.target;
       setSelect(value);
    }

    const handleSubmit = (e) => {
        let sum = 0;
        if (select === "") {
          setResult('Invalid input.')
        } else if (select === 'sum') {
        numbers.forEach(num => {
          sum += Number(num);
        });
        if (!isNaN(sum)) {
        setResult(sum);
        } else {
          setResult('Invalid input.')
        }
      } else if (select === 'average') {
        numbers.map(num => {
        return sum += Number(num);
        });
        setResult(sum/numbers.length)
      } else if (select === 'mode') {
        let counter = 0;
        let count = 0;
        numbers.filter(num => {
        count = 0
        numbers.forEach(mode => {
            if (num === mode) {
               count++ 
            }
            return count;
        })
        if (count > counter) {
            counter = count;
            setResult(num);
        }
        return result;
    });
      }
      e.preventDefault();
      } 
    return (
      <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text"  value={numbers} onChange={getNumbers}/>
        <select id="operation" name="operation" onChange={handleSelect} value = { select }>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" >Calculate</button>
      </form>
       <p> {result}</p> 
       </>
    );  
  }

export default Form;
