//WAYS TO ACCEPT USER INPUT USING JS
//var myName = window.prompt("What your name?");

//console.log("Hello", myName);

//Document object mode (D0M) is a representation of html document

document.getElementById("myButton").onclick = function () {
  var myName = document.getElementById("myText").value;
  console.log("Hello", myName);
};
