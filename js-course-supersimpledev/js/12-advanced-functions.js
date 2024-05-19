const buttonElement = document.querySelector(".js-button");

const eventListener = () => {
  console.log("click");
  console.log("second-click");
};

buttonElement.addEventListener("click", eventListener);

buttonElement.removeEventListener("click", eventListener);

buttonElement.addEventListener("click", eventListener);


// functions are values, meaning they can be assigned to a variable as well as referenced when running a function
// regular function
function greeting() {
  console.log("hello");
}
greeting();

const num = 3;


// anonymous function (function saved inside a variable)
const func = function () {
  console.log("hola!");
};

console.log(func);
console.log(typeof func);
func();

// saving a function inside an object
const obj = {
  num: 2,
  func: function greeting_() {
    console.log("konnichiwa!");
  },
};
obj.func(); // <<< this is called a method, call the function using dot notation, when the function is saved in an object

// passing a value into a function
function display(param) {
  console.log(param);
}
display(2);

// passing a function into another function
function run(param) {
  param();
}
run(function() {
  console.log("waddup");
});



setTimeout(function () {
  console.log("timeout");
  console.log("time does not wait");
}, 3000);

console.log("next line");

setInterval(function () {
  console.log("interval");
}, 3000);

console.log("next line 2");



["make dinner", "wash dishes", "watch anime"].forEach((value, index) => {
  if (value === "wash dishes") {
    return; // basically does the same thing as "continue" in a "for" loop
  }
  console.log(index);
  console.log(value);
  // console.log('the value index in the array is: ' + `"${index}"` + ' and the value is: ' + `"${value}"`)
});

const regularFunction = function (param, param2) {
  console.log("hello");
  return 5;
};
// regularFunction();

const arrowFunction = (param, param2) => {
  console.log("hello");
  return 5;
};
// arrowFunction();

const oneParam = (param) => {
  console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());


console.log(
  [1, -3, 5].filter((value, index) => {
    /* if (value >= 0) {
    return true;
  } else {
    return false;
  }  */
    return value >= 0;
  })
);

console.log(
  [1, 1, 3].map((value, index) => {
    return value * 2;
  })
);

console.log([1, 1, 3].map((value) => value * 2));
