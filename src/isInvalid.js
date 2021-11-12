// Helper Function

// Return true if userInput is an empty string or not a number 

// userInput case 1 "" = ""
// userInput case 2 "a, b" => ["a", "b"] => Number("a") => Number.isNaN(NaN) 

function isInvalid (userInput) {
    return userInput === "" || userInput.split(",").some((element) => {
        Number.isNaN(Number(element))
    })
}

module.exports = isInvalid;