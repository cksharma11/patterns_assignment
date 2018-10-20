const main = require("./src/patternsLib.js").drawTriangle;

let type = process.argv[2];
let height = +process.argv[3];

let triangle = main(type, height);
console.log(triangle);
