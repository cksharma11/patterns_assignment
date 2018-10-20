const main = require("./src/patternsLib.js").drawDiamond;

let type = process.argv[2];
let height = +process.argv[3];

let diamond = main(type, height);
console.log(diamond);
