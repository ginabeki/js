// Arrow function =>
/**
 * - function (args) {
 * // execution here
 * }
 * // === a better way here ===
 * (args) => {
 * // execution here
 * }
 * x => x*2 create a function that takes an argument x and returns x*2
 * == this == syntax
 */

function setup() {
  noCanvas();
  const counter1 = new Counter(100, 500);
}

// function setup() {
//   createCanvas(start, time);
//   background(0);
//   let button = createButton("press");
//   button.mousePressed(() => background(random(255)));
// }

class Counter {
  constructor(start, time) {
    this.count = start;
    this.wait = 500;
    this.p = createP("");

    setInterval(() => {
      this.count++;
      this.p.html(this.count);
    }, wait);
  }
}
