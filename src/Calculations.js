import React from "react";

const Calculations = (props) => {
  const { values, operation } = props;
  let result = 0;

  const mode = (array) => {
    const map = new Map();
    let maxFreq = 0;
    let mode;
  
    for(const item of array) {
      let freq = map.has(item) ? map.get(item) : 0;
      freq++;
  
      if(freq > maxFreq) {
        maxFreq = freq;
        mode = item;
      }
      map.set(item, freq);
    }
    return mode;
  };



  if(operation === 'sum'){
    //this.setState({
      result = values.reduce((acc, cur) => acc + cur)
    //});  
  }
  if(operation === 'average'){
    //this.setState({
      result = values.reduce((acc, cur) => acc + cur, 0) / values.length
    //});  
  }
  if(operation === 'mode'){
    //this.setState({
      result = mode(values)
    //});  
  }
 
  return (
    <>{result}</>
  );
}
export default Calculations;