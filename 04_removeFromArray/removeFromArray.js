const removeFromArray = function() {
    const priArray = Array.from(arguments);
    const secArray = priArray[0];
    
        for (let i = 1; i < priArray.length; i++) {
            for (let j = 0; j < secArray.length; j++) {
                if (secArray[j] === priArray[i]) {
                    secArray.splice(j, 1);
                    j--;
                };
            };
        };
        return secArray;
    };

// we want to compare priArray[1, 2, ... n] against secArray[0, 1, ... n], and if priArray[n] === any secArray[n2]; secArray.pop[n2], then
// return secArray.

// Do not edit below this line
module.exports = removeFromArray;
