const repeatString = function(string, num) {
    let stringRep = "";
    if (num < 0 || num === NaN) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            stringRep += `${string}`;
        };
        return stringRep;
    };    
};



// Do not edit below this line
module.exports = repeatString;
