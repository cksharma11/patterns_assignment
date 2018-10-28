const categorizeArguments = function(arguments){
  if(arguments[4] == undefined){
    arguments.push(arguments[3]);
  }
  return {
    type: arguments[2],
    width: +arguments[3],
    height: +arguments[4],
  }
}

const fillWithStar = function(height){
  let filledString = "";
  for(let index = 0; index < height; index++){
    filledString += "*";
  }
  return filledString;
}

const fillWithSpace = function(height){
  let filledString = "";
  for(let index = 0; index < height; index++){
    filledString += " ";
  }
  return filledString;
}

const fillSpaceEndWithStar = function(height){
  let filledString = "";
  for(let index =0; index < height; index++){
    filledString += " ";
  }
  return filledString + "*";
}


const drawLine = function(symbol, length){
  line = "";
  for(let index = 0; index < length; index++){
    line += symbol;
  }
  return line;
}


const generateLine = function(symbol, length){
  let line ="";
  for(let index = 0; index <= length; index++){
    line += symbol;
  }
  return line;
}

exports.fillWithStar = fillWithStar;
exports.fillWithSpace = fillWithSpace;
exports.fillSpaceEndWithStar = fillSpaceEndWithStar;
exports.drawLine = drawLine;
exports.categorizeArguments = categorizeArguments;
exports.generateLine = generateLine;
