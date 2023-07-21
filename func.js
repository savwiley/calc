//doms
let one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");

const addOP = document.querySelector(".add");
const multiplyOP = document.querySelector(".multiply");
const subtractOP = document.querySelector(".subtract");
const divideOP = document.querySelector(".divide");

const windowDIV = document.querySelector("#window");

let numbers = Array.from(document.querySelectorAll(".number"));

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
let windowNumbs;


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
};

//add numbers to window
numbers.forEach(n => {
  n.addEventListener('click', (e) => {
    !windowNumbs ? 
      windowNumbs = e.target.innerText : 
      windowNumbs += e.target.innerText;
    windowDIV.innerText = windowNumbs;
  });
});

//clear
clear.addEventListener('click', () => {
  windowNumbs = "";
  windowDIV.innerText = windowNumbs;
});

//back
back.addEventListener('click', () => {
  let arr = windowNumbs.split('');
  arr.splice(-1, 1);
  windowNumbs = arr.join('');
  windowDIV.innerText = windowNumbs;
});