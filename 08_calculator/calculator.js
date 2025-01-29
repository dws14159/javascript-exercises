const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let ret=0;
  for (let i=0; i<arr.length; i++)
    ret += arr[i];
  return ret;
};

const multiply = function(arr) {
	let ret=1;
  for (let i=0; i<arr.length; i++)
    ret *= arr[i];
  return ret;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  let ret=1;
  for (let i=1; i<=num; i++)
    ret *= i;
  return ret;
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
