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

const justifyLineRight = function(text, index, triangle){
  let numberOfspaces = triangle.length - text.length;
  let space = drawLine(' ',numberOfspaces);
  return space + text;
}

const fillWithStar = function(times){
  let line = new Array(times).fill('*');
  return line.join('');
}

const fillWithSpace = function(times){
  let line = new Array(times).fill(' ');
  return line.join('');
}

const fillSpaceEndWithStar = function(times){
  let line = new Array(times).fill(' ');
  return line.join('')+'*';
}


const drawLine = function(symbol, length){
  let line = new Array(length).fill(symbol);
  return line.join('');
}


const generateLine = function(symbol, length){
  let line = new Array(length+1).fill(symbol);
  return line.join('');
}

exports.fillWithStar = fillWithStar;
exports.fillWithSpace = fillWithSpace;
exports.fillSpaceEndWithStar = fillSpaceEndWithStar;
exports.drawLine = drawLine;
exports.categorizeArguments = categorizeArguments;
exports.generateLine = generateLine;
exports.justifyLineRight = justifyLineRight;
