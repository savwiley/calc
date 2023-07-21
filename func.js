//basics
const add = (a, b) => {
  return a + b
};

const subtract = (a, b) => {
  return a - b
};

const multiply = (a, b) => {
  return a * b
};

const divide = (a, b) => {
  return a / b
};


//variables
let firstNumb;
let operator;
let secondNumb;


//main
const operate = (first, op, second) => {
  if (op === "add") {
    add(first, second);
  } else if (op === "subtract") {
    subtract(first, second);
  } else if (op === "multiply") {
    multiply(first, second);
  } else {
    divide(first, second);
  };
}