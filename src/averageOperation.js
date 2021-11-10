// ------Helper Function-------

function average(userInput) {
    return userInput.split(",").reduce((previousNum, currNum) => (Number(previousNum) + Number(currNum))) / userInput.split(",").length
}

module.exports = average;