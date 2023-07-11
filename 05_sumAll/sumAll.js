const sumAll = function(a, b) {
    let sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        sum = "ERROR";
    }
    else if (a < b ) {
        for (i = a; i <= b; i++) {
                sum += i;
            };
    } else if (b <= a) {
        for (i = b; i <= a; i++) {
                sum += i;
            };
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
