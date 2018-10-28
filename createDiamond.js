const drawDiamond = require("./src/patternsLib.js").drawDiamond;

const main = function(){
  let patternDetails = process.argv;
  let diamond = drawDiamond(patternDetails);
  console.log(diamond);
}

main();
