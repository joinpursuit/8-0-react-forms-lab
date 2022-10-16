import React from "react";
import "./Form.css";
  import {useState} from 'react' 

//   let newAvgDisplay = []
// let newArrayAvg = []
// let start=0
// function HandleSelectChange(event) {
//   let [selectOption, setSelectOption] = useState("");
//   setSelectOption(event.target.value); 
  
//  }
//  newArrayAvg.push(selectOption).split(",")

//   for (let i=0;i<newArrayAvg.length;i++){
//     start += Number(newArrayAvg[i])
//   }
//   let computed =start/newArrayAvg.length  
//   newAvgDisplay.push(computed)

// let AvgValue =0
// function Form() {
//   const [sumNumber, setsumNumber] = useState("")
//   const [AvgNumber, setAvgNumber] = useState("")
//   const [modeNumber, setmodeNumber] = useState("")
//   let invalid = ""
  
  function Form(){
// let renderingValues =[]
const [details, setDetails]=useState({
  values:[],
  operation:"",
  val:0
  });
 const handleChange = (e) => {

const name = e.target.name
const value = e.target.value
console.log(name,value);
setDetails((prev)=>{
return {...prev, [name]: value}
})
 };
  // document.getElementById("values").value
  // setsumNumber( 
  //      let initial =0
  //      for(let i=0; i<elemsum.length;i++){
  //        initial += Number(elemsum[i])
  //      }
  //      sumNumber= `${initial}`
  
  // )
//THE CODE BELOW WILL CALCULATE THE SUM OF THE NUMBERS IN THE ARRAY IN THE TEXT INPUT FIELD
  console.log(details)
  let initializer =0
if (details.operation==="sum"){
  let captureValue = details.values.split(",")
  console.log(captureValue)
     for(let i=0;i<captureValue.length;i++){
      initializer+= Number(captureValue[i])
      console.log(captureValue[i])

     }
     console.log(initializer)
    details.val = initializer
    console.log(initializer)  
    console.log(details)

}

//THE CODE BELWO WILL CALCULATE THE AVERAGE OF THE NUMBERS IN THE ARRAY IN THE TEXT INPUT FIELD

if (details.operation==="average"){
  let captureValue = details.values.split(",")
  console.log(captureValue)
     for(let i=0;i<captureValue.length;i++){
      initializer+= Number(captureValue[i])
      console.log(captureValue[i])

     }
     console.log(initializer)
    details.val = initializer/captureValue.length;
    console.log(initializer)  
    console.log(details)

}
//THE CODE BELWO WILL CALCULATE THE MODE OF THE NUMBERS IN THE ARRAY IN THE TEXT INPUT FIELD

if (details.operation==="mode"){
  let captureValue = details.values.split(",")
  console.log(captureValue)
    // count amount of occurences of each number

  // create object
  const obj = {};
  // loop over array
  captureValue.forEach(number => {
    // for each number in array,
    // if it doesn't already exist as a key on the
    // object, create one and set its value to 1.
    if (!obj[Number(number)]) {
      obj[Number(number)] = 1;
    } else {
      // if it already exists as key on the object,
      // increment its corresponding value.
      obj[Number(number)] += 1;
    }
  });
  console.log(obj)
  // return object key with highest value.
  let highestValue = 0;
  let highestValueKey = -Infinity;

  for (let key in obj) {
    const value = obj[key];
    if (value > highestValue) {
      highestValue = value;
      highestValueKey = key;
    }
  }

  // convert key back to number
   details.val = highestValueKey;
}



//     const [sumname, setsumname]=useState("");
//     setsumname(renderingValues[renderingValues.length-1])
//  if(details.operation==="sum"){
// let start = 0
// let splitter = (details.values).split(",")
//       for(let i=0; i<splitter.length;i++){
//       start+= Number(splitter[i])
//  }
//  renderingValues.push(start)
// }

// if(details.operation==="average"){
//   let start = 0
// let splitter = (details.values).split(",")
// console.log(splitter)
//       for(let i=0; i<(splitter).length;i++){
//       start+= Number((splitter)[i])
//  }
//   start = start/splitter.length
//   renderingValues.push(start)
// }
//  if (details.operation==="mode"){
//   let array = (details.values).split(",")

//   const obj = {};
//   // loop over array
//   array.forEach(number => {
//     // for each number in array,
//     // if it doesn't already exist as a key on the
//     // object, create one and set its value to 1.
//     if (!obj[Number(number)]) {
//       obj[Number(number)] = 1;
//     } else {
//       // if it already exists as key on the object,
//       // increment its corresponding value.
//       obj[Number(number)] += 1;
//     }
//   });
  
//   // return object key with highest value.
//   let highestValue = 0;
//   let highestValueKey = -Infinity;

//   for (let key in obj) {
//     const value = obj[key];
//     if (value > highestValue) {
//       highestValue = value;
//       highestValueKey = key;
//     }
//   }

//   // convert key back to number
//   renderingValues.push((Number(highestValueKey)));
// }
// if(!details.values.includes(",")){setsumname("INVALID")}


      // }//     if(event.target.values==="average"){
//         let initial=0
//       for(let i=0; i<e.length;i++){
//         initial+= Number(e[i])
//       }
//       setAvgNumber(`${initial/e.length}`);
//       }

//       if(event.target.values==="mode"){
//         const obj = {};
//         // loop over array
//         e.forEach(number => {
//           // for each number in array,
//           // if it doesn't already exist as a key on the
//           // object, create one and set its value to 1.
//           if (!obj[Number(number)]) {
//             obj[Number(number)] = 1;
//           } else {
//             // if it already exists as key on the object,
//             // increment its corresponding value.
//             obj[Number(number)] += 1;
//           }
//         });
        
//         // return object key with highest value.
//         let highestValue = 0;
//         let highestValueKey = -Infinity;
      
//         for (let key in obj) {
//           const value = obj[key];
//           if (value > highestValue) {
//             highestValue = value;
//             highestValueKey = key;
//           }
//         }
      
//         // convert key back to number
//         setmodeNumber(Number(highestValueKey));
//       }
//       event.preventDefault();
// //   }
// const handleEvent = event=>{
//   invalid=""
// let e=event.target.value
// if(event.target.values==="sum"){
// let initial=0
// for(let i=0; i<e.length;i++){
//   initial+= Number(e[i])
// }
// setsumNumber(`${initial}`)

// }
// else if(event.target.values==="average"){
//   let initial=0
// for(let i=0; i<e.length;i++){
//   initial+= Number(e[i])
// }
// setAvgNumber(`${initial/e.length}`);
// }

// else if(event.target.values==="mode"){
//   const obj = {};
//   // loop over array
//   e.forEach(number => {
//     // for each number in array,
//     // if it doesn't already exist as a key on the
//     // object, create one and set its value to 1.
//     if (!obj[Number(number)]) {
//       obj[Number(number)] = 1;
//     } else {
//       // if it already exists as key on the object,
//       // increment its corresponding value.
//       obj[Number(number)] += 1;
//     }
//   });
  
//   // return object key with highest value.
//   let highestValue = 0;
//   let highestValueKey = -Infinity;

//   for (let key in obj) {
//     const value = obj[key];
//     if (value > highestValue) {
//       highestValue = value;
//       highestValueKey = key;
//     }
//   }

  // convert key back to number
//   setmodeNumber(Number(highestValueKey));
// }
// else{invalid = "Invalid"}
// event.preventDefault();
// }
// let valueArray=[]
const handleSubmit = event => {
  document.getElementById("render").innerHTML=""
  event.preventDefault();


  document.getElementById("render").innerHTML = `${details.val}`
// if(details.val !== NaN){
//   document.getElementById("values").value= ""
// }

  if(details.values.length===0 || details.operation === "" || details.val === NaN){
    document.getElementById("render").innerHTML = "Invalid input."
  }
  // Number(document.getElementById("render").innerHTML) === NaN
  console.log((document.querySelector("form input").value.split(",")).map(element => !isNaN(element)).includes(true));
if((document.querySelector("form input").value.split(",")).map(element => !isNaN(element)).includes(true)){
  document.querySelector("form input").value = "";
  document.querySelector("form input").classList.add("error")
  document.querySelector("form select").value = ""
  document.querySelector("form select").classList.add("error")
}
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input id="values" name="values" type="text" onChange={handleChange}/>
      <select id="operation" name="operation"onChange={handleChange}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">Average</option>
        <option value="mode">mode</option>
      </select>
      <button  type="submit">Calculate</button>
    </form>
    <p id="render"></p>

    </div>
  );
}





// function Values(e){
// const values = e.target.value;
// newArray.push(values)
// }
// Values()


export default Form;
