const reverseString = function (words) {
    let reversedMessage = [];
    let wordsArray = words.split("");
    for (let i = wordsArray.length; i >= 0; i--) {
        reversedMessage.push(wordsArray[i]);
    }
    return reversedMessage.join("");
};

// Do not edit below this line
module.exports = reverseString;
