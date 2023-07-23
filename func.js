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

// 12 + 7 - 5 * 3 = 42
//main
const operate = (first, op, second, equal) => {
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
  if (equal) {
    firstNumb = "";
    secondNumb = "";
    operator = "";
  }
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

//WRITE IF WE'RE MAKING LONG EQUATIONS (3 + 2 - 4 = ?)

//adding
addOP.addEventListener('click', () => {
  operator = "add";
  if (!firstNumb) {
    firstNumb = windowNumbs;
    windowNumbs = "";
  } else {
    //secondNumb isn't taking correctly
    secondNumb = windowNumbs;
    windowNumbs = "";
    operate(firstNumb, operator, secondNumb, false);
    firstNumb = windowNumbs;
  }
  console.log(firstNumb);
  console.log(secondNumb);
});

//subtract
subtractOP.addEventListener('click', () => {
  firstNumb = windowNumbs;
  operator = "subtract";
  windowNumbs = "";
});

//multiply
multiplyOP.addEventListener('click', () => {
  firstNumb = windowNumbs;
  operator = "multiply";
  windowNumbs = "";
});

//divide
divideOP.addEventListener('click', () => {
  firstNumb = windowNumbs;
  operator = "divide";
  windowNumbs = "";
});

//equals
equals.addEventListener('click', () => {
  secondNumb = windowNumbs;
  windowNumbs = "";
  operate(firstNumb, operator, secondNumb, true);
})