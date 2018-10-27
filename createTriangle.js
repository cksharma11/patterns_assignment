const drawTriangle = require("./src/patternsLib.js").drawTriangle;

const main = function(){
  let type = process.argv[2];
  let height = +process.argv[3];

  let triangle = drawTriangle(type, height);
  console.log(triangle);
}

main();
