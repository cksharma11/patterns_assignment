const lib = require('./src/patternsUtilLib.js');
const lib2 = require('./src/patternsLib.js');
const groupArguments = lib.groupArguments;
const generatePatterns = lib2.generatePatterns;

const main = function(){
  let arguments = process.argv;
  let categorizeArguments = groupArguments(process.argv);
  let patterns = generatePatterns(categorizeArguments);
  for(pattern of patterns){
    console.log(pattern);
  }
  console.log(patterns.join(''))
}

main();
