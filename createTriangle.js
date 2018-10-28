const drawTriangle = require("./src/patternsLib.js").drawTriangle;

const main = function(){
  let triangleDetails = process.argv;
  let triangle = drawTriangle(triangleDetails);
  console.log(triangle);
}

main();
