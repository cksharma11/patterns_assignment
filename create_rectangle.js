const main = require("./src/patternsLib.js").drawRectangle;

let type = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];

let rectangle = main(type, width, height);
console.log(rectangle);
