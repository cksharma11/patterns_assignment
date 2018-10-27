const drawRectangle = require("./src/patternsLib.js").drawRectangle;

const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];

  let rectangle = drawRectangle(type, width, height);
  console.log(rectangle);
}

main();
