// ------Helper Function-------

function isInvalid(userInput) {
  return userInput === "" || userInput.split(",").some((element) => Number.isNaN(Number(element)))
}

module.exports = isInvalid;