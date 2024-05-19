console.log(document.querySelector("button"));
console.log(document.querySelector("button").innerHTML);
document.querySelector("button").innerHTML = "Changed";
console.log(document.querySelector("body"));
console.log(document.querySelector("body").innerHTML);

document.querySelector(".js-button");
console.log(document.querySelector(".js-button"));
console.log(typeof document.querySelector(".js-button"));

/* 
const buttonElement = document.querySelector(".js-button");
console.log(buttonElement);

console.log(document.title);
document.title = "Changed"; // changes the title of the webpage in the browser

console.log(document.body);
console.log(typeof document.body);

console.log(document.body.innerHTML);
document.body.innerHTML = "<button>Changed</button>";

document.body.innerHTML = "hello";
document.title = "Good job!";
 */
