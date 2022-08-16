{
  const message = "hi";
}
console.log(message); // this will bring uncaught error because message is only availabe within the block, and not outside the scope
// another example here;-
function start() {
  const message = "hi";

  if (true) {
  }
}
// global scope means variable is accesible everywhere because it is declared outside the block
// local values within a scope take precedence over global variables
// in general you should avoid using global variable as it is considered to be bad practice, because they are accesible everyone and it can ead to bugs
