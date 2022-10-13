import  { React, useState } from "react";
import "./Form.css";
////////////////////////////////////////
function mode_(arr)
{
  let a = {};
  let max = 0;
  let rst = [];
  for(let x of arr){
    a[x]= a[x]+1 | 1;
    max = a[x] > max ? a[x] : max;
  } 
  // let max = Math.max(...Object.values(a));
  for(let x in a) if(a[x]===max) rst.push(x);
  return rst;
}
////////////////////////////////////////
function Form({updateResult,updateHandle}) {
  const [todo, setTodo] = useState({values:"",operation:""});
  //event
  const on_change = (evt) => {
    setTodo(pv=>({...pv,[evt.target.id]:evt.target.value}));
  }
  const on_submit = (evt)=>{
    evt.preventDefault();
    let value = todo['values'].split(",");
    let operation = todo['operation'];
    if (value.length<2 || value.some(el=>isNaN(el)))
    {//error
      updateResult({message:"Invalid input.",class:"error"});
      return;
    }
    if(!["sum","average","mode"].includes(operation))
    {//error
      updateResult({message:"select a opeartion",class:"error"});
      return;
    }
    let rst;
    switch(operation)
    {
      case "mode"   : rst = mode_(value); break;
      case "sum"    : rst = value.reduce((acc,cv)=>acc+Number(cv),0); break;
      case "average": rst = value.reduce((acc,cv)=>acc+Number(cv),0)/value.length; break;
    }
    updateResult({message:rst,class:""});
    setTodo(({values:"",operation:""}));
  }
  //event end
  return (
    <form onSubmit={on_submit}>
      <input id="values" className={updateHandle.class} name="values" type="text" value={todo.values} onChange={on_change} />
      <select id="operation" className={updateHandle.class} name="operation" value={todo.operation} onChange={on_change}>
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
