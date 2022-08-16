// value and references types
// value types are primitives, they include number, string, boolean, symbol, undefined, null

// references types include object, function, and array

let x = 10;
let y = x;
x = 20;

//
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); //10
