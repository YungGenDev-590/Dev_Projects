/* const myArray = [10, 20, 30];

console.log(myArray);
console.log(typeof myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

myArray[0] = 40;
console.log(myArray);
console.log(myArray[0]);

const myArray2 = [1, 'hello', true, {name: 'socks'}];

console.log(myArray2);

Array.isArray([20, 30]);
console.log(Array.isArray([20, 30]));
console.log(Array.isArray({product: 'playstation'}));

console.log(myArray.length);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray); */

/* function runLoop() {
  let i = 1;

  while (i <= 5) {
    console.log(i);
    i = i + 1;
  }
} */

/* let i = 1;

while (i <= 5) {
  console.log(i);
  i = i++;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let randomNumber = 0;

while (randomNumber < 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber); */

/* const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];

for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
} */

/* const numb = [1, 1, 3];
let total = 0;

for (let i = 0; i < numb.length; i++) {
  const num = numb[i];
  total += num;
}

console.log(total);

const numbDoubled = [];

for (let i = 0; i < numb.length; i++) {
  const num = numb[i];
  numbDoubled.push(num * 2);
  total += num;
}

console.log(numbDoubled); */

const array1 = [1, 2, 3];
const array2 = array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);

const [fisrtValue, secondValue] = [1, 2, 3];

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
  if (i === 8) {
    break;
  }
}

let i = 1;

while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

function doubleArray(numb) {
  const numbDoubled = [];

  for (let i = 0; i < numb.length; i++) {
    const num = numb[i];
    if (num === 0) {
      return numbDoubled;
    }
    numbDoubled.push(num * 2);
  }
  return numbDoubled;
}

console.log(doubleArray([1, 1, 3]));
console.log(doubleArray([2, 2, 5, 0, 10, 20]));
