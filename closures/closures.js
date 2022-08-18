// closures
// every scope has access to everything outside to every thing inside the outer file

const myName = "Gina";
function printName() {
  console.log(myName);
}
printName();

// most use case of closures

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ` + outerVariable);
    console.log(`Inner Variable: ` + innerVariable);
  };
}
const newFunction = outerFunction("outside");
newFunction("inside");
