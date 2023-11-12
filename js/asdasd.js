'use strict';

function createReversedArray() {
  const args = Array.from(arguments);
  let massive = [];
  let i = 0;
  for (const arg of args) {
    massive[i] = arg;
    i++;
  }
  
  const reversedMassive = massive.reverse();
  return reversedMassive;
}


console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(164, 48, 291));
console.log(createReversedArray(412, 371, 94, 63, 176));