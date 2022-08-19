// destructuring
// const [q, r, ...rest] = [1, 2, 3, 4, 5];
// console.log(q, r); // 1, 2
// console.log(rest); // 3, 4, 5
// rest variable gets the rest of the values inform of an array

// another example
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0]; // 'A'
// const [a, b] = alphabet;
// console.log(a); // A
// console.log(b); // B
// use comma to skip to the next element, for instance const[a,,b]
const newArray = [...alphabet, ...numbers];
// this is same as newArray = alphabet.concat(numbers)
console.log(newArray); // "A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6"

function sumMultiply(a, b) {
  return [a + b, a * b];
}
const array = sumMultiply(2, 3);
console.log(array); // [5, 6]
