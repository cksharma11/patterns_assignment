const drawDiamond = require("./src/patternsLib.js").drawDiamond;

const main = function(){
  let type = process.argv[2];
  let height = +process.argv[3];

  let diamond = drawDiamond(type, height);
  console.log(diamond);
}

main();
