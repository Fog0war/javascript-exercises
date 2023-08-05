const palindromes = function (str) {
   const pstr =  str.toLowerCase().replace(/[^a-z0-9]/g, ""); // "/[^a-z0-9]/g" reps all characters that are not a-z or 0-9
   return pstr.split("").reverse().join("") == pstr; // split to convert to array, reverse to flip indexes, join to reconvert to string
};

// Do not edit below this line
module.exports = palindromes;
