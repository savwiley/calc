//doms
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");

const addOP = document.querySelector(".add");
const multiplyOP = document.querySelector(".multiply");
const subtractOP = document.querySelector(".subtract");
const divideOP = document.querySelector(".divide");
const equals = document.querySelector(".equal");

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
  let firstN = Number(first);
  let secondN = Number(second);
  if (op === "add") {
    windowNumbs = add(firstN, secondN);
  } else if (op === "subtract") {
    windowNumbs = subtract(firstN, secondN);
  } else if (op === "multiply") {
    windowNumbs = multiply(firstN, secondN);
  } else {
    windowNumbs = divide(firstN, secondN);
  };
  windowDIV.innerText = windowNumbs;
  firstNumb = Number(windowNumbs);
  secondNumb = undefined;
  operator = "";
  windowNumbs = "";
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

//add decimal
decimal.addEventListener('click', () => {
  !windowNumbs?
    windowNumbs = "0." :
    windowNumbs.includes(".") ? null :
      windowNumbs += ".";
  windowDIV.innerText = windowNumbs;
})

//clear
clear.addEventListener('click', () => {
  firstNumb = undefined;
  secondNumb = undefined;
  operator = "";
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


//adding
addOP.addEventListener('click', () => {
  if (!firstNumb) {
    operator = "add";
    firstNumb = Number(windowNumbs);
    windowNumbs = "";
  } else {
    secondNumb = Number(windowNumbs);
    operate(firstNumb, operator, secondNumb);
    operator = "add";
  }
});

//subtract
subtractOP.addEventListener('click', () => {
  if (!firstNumb) {
    operator = "subtract";
    firstNumb = Number(windowNumbs);
    windowNumbs = "";
  } else {
    secondNumb = Number(windowNumbs);
    operate(firstNumb, operator, secondNumb);
    operator = "subtract";
  }
});

//multiply
multiplyOP.addEventListener('click', () => {
  if (!firstNumb) {
    operator = "multiply";
    firstNumb = Number(windowNumbs);
    windowNumbs = "";
  } else {
    secondNumb = Number(windowNumbs);
    operate(firstNumb, operator, secondNumb);
    operator = "multiply";
  }
});

//divide
divideOP.addEventListener('click', () => {
  if (!firstNumb) {
    operator = "divide";
    firstNumb = Number(windowNumbs);
    windowNumbs = "";
  } else {
    secondNumb = Number(windowNumbs);
    operate(firstNumb, operator, secondNumb);
    operator = "divide";
  }
});

//equals
equals.addEventListener('click', () => {
  secondNumb = Number(windowNumbs);
  operate(firstNumb, operator, secondNumb);
})