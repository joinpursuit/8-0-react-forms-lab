// ------Helper Function-------

function mode(userInput) {
  //Group and count elements via object, transform to array, then sort to grab the element with the highest count
  const modeList = {};
  userInput.split(",").forEach((element) => {
    modeList[element] = (modeList[element] || 0) + 1; //> eg. 1,2,2,2,2,5,3 => {1:1, 2:4, 5:1, 3:1}
  });
  const sortMode = Object.entries(modeList).sort((prevValue, currValue) => prevValue[1] - currValue[1]); //> eg. [ [1,1], [2,4], [5,1], [3,1] ] => [ [1,1], [5,1], [3,1], [2,4] ]
  return sortMode[sortMode.length - 1][0]; //> [2,4] => 2 is the one with the highest count
}

module.exports = mode;