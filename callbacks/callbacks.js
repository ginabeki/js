// // callback is a function passed inside another function
// const button = document.querySelector("button");

// function toggle() {
//   button.classList.toggle("altColor");
// }
// toggle(); // call
// //callback function
// //button.addEventListener("click", toggle);

// // button.addEventListener("click", function () {
// //   button.classList.toggle("altColor");
// // });
// button.addEventListener("click", () => {
//   button.classList.toggle("altColor");
// });

// // pass paremeters into a callback function
// button.addEventListener("click", toggle("anotherAltColor"));

// JS runs consequentially from top to bottom
// we want to call a function after some conditions are met, this is called asynchronous programming
// example
function firstAction() {
  console.log("I'm the first action");
  setTimeout(secondAction, 2000);
}

function secondAction() {
  console.log("I'm the second action");
}

//firstAction();
setTimeout(firstAction, 5000); // after 5 seconds
