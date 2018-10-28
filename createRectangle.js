const drawRectangle = require("./src/patternsLib.js").drawRectangle;

const main = function(){
  let rectangleDetails = process.argv;
  let rectangle = drawRectangle(rectangleDetails);
  console.log(rectangle);
}

main();
