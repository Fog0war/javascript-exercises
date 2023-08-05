const add = function(a, b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(nums) {
  return nums.reduce((a, b) => a + b, 0);
};

const multiply = function(...array) {
  let product = 1
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	let f = 1
  if (a === 0) {
    return f;
  } else {
    for (let i = 1; i <= a; i++) {
      f *= i;
    };
    return f;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
