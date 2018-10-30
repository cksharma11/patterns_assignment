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

const arrangeRectArg = function(arguments, index){
  return {
    pattern: arguments[index++],
    width: arguments[index++],
    height: arguments[index++],
    index: index++
  };
}

const arrangeTriArg = function(arguments, index){
  return {
    pattern: arguments[index++],
    width: arguments[index++],
    index: index,
  };
}

const arrangeDiaArg = function(arguments, index){
  return {
    pattern: arguments[index++],
    width: arguments[index++],
    index: index,
  };
}

const groupArguments = function(arguments){
  arguments = arguments.slice(2);
  let index = 0;
  let categorizedArgList = [];
  let categories = {
    rectangle: arrangeRectArg,
    triangle: arrangeTriArg,
    diamond: arrangeDiaArg
  }
  while(arguments[index]){
    let type = arguments[index].split('_');
    let patternType = type[1];
    categorizedArgList.push(categories[patternType](arguments, index));
    index = categorizedArgList[categorizedArgList.length-1].index;
  }
  return categorizedArgList;
}

const justifyLineRight = function(text, index, triangle){
  let numberOfspaces = triangle.length - text.length;
  let space = drawLine(' ',numberOfspaces);
  return space + text;
}

const justifyLineLeft = function(text, index, triangle){
  let numberOfspaces = triangle.length - text.length;
  let space = drawLine(' ',numberOfspaces);
  return text + space;
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
exports.groupArguments = groupArguments;
exports.justifyLineLeft = justifyLineLeft;
