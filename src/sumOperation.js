// ------Helper Function-------

function sum(userInput) {
    return userInput.split(",").reduce((previousNum, currNum) => Number(previousNum) + Number(currNum));
}

module.exports = sum;