// how to pass values to a function
// returning a value
function greet() {
  return "Hello world";
  // we can't have mu;tiple return statements
}

let str = greet();
console.log(str);
// how about passing a value
function greet(user) {
  return `Hello ${user}`;
}
let user = "Navin";
let str = greet(user);
console.log(str);
