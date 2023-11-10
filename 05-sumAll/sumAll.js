const sumAll = function (start, finish) {
    let sum = 0;

    if (typeof start !== "number" || typeof finish !== "number") {
        return "ERROR";
    } else if (start < 0 || finish < 0) {
        return "ERROR";
    }

    if (start > finish) {
        let temp = finish;
        finish = start;
        start = temp;
    }

    for (let i = start; i <= finish; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
