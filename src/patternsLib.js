const lib = require("./patternsUtilLib.js");
const {
  fillWithStar,
  fillWithSpace,
  fillSpaceEndWithStar,
  drawLine,
  generateLine,
  categorizeArguments,
  justifyLineRight,
  justifyLineLeft,
  isFlip,
  isMirror,
  mirrorPattern,
  flipPattern
} = lib;

const generateFilledDiamond = function(height){
  let diamond = []; 
  let spaces = 1;
  for(let row = 0; row < height; row++,spaces += 2){
    let numberOfSpace = Math.abs((height - spaces)/2);
    let numOfStarNeeded = (height - (numberOfSpace*2));
    diamond[row] = fillWithSpace(numberOfSpace);
    diamond[row] += fillWithStar(numOfStarNeeded);
  }
  return diamond.map(justifyLineLeft);
}

const generateHollowDiamond = function(height){
  let unwantedStars = 3; 
  let diamond = [];
  let numberOfSpace = Math.abs((height - unwantedStars)/2 +1);
  diamond [0] = fillSpaceEndWithStar(numberOfSpace);

  for(let row = 1; row < height -1; row++){
    numberOfSpace = Math.abs((height - unwantedStars)/2);
    diamond[row] = fillSpaceEndWithStar(numberOfSpace);

    numOfStarNeeded = (height - (numberOfSpace*2));
    diamond[row] += fillSpaceEndWithStar(Math.abs(numOfStarNeeded - 2));
    unwantedStars += 2;
  }

  numberOfSpace = Math.abs((height - unwantedStars)/2);
  diamond[height-1] = fillSpaceEndWithStar(numberOfSpace);
  return diamond.map(justifyLineLeft);
}

const generateAngledDiamond = function(height){
  let diamond = [];
  let unwantedStars = 3;
  let leftSideSymbol = "/"; 
  let rightSideSymbol = "\\";
  let numberOfSpace = Math.abs((height - unwantedStars)/2 + 1 );
  diamond[0] = fillSpaceEndWithStar(numberOfSpace);

  for(let row = 1; row < height - 1; row++){
    numberOfSpace = Math.abs((height - unwantedStars)/2);
    diamond[row] = fillWithSpace(numberOfSpace);
    if(numberOfSpace == 0){
      diamond[row] = "*" + fillWithSpace(height -2) + "*";
      leftSideSymbol = "\\";
      rightSideSymbol = "/";
      unwantedStars += 2;
      continue;
    }
    numOfStarNeeded = (height - (numberOfSpace*2));
    diamond[row] += leftSideSymbol+fillWithSpace(numOfStarNeeded -2) + rightSideSymbol;
    unwantedStars += 2;
  }
  numberOfSpace = Math.abs((height - unwantedStars)/2);
  diamond[height-1] = fillSpaceEndWithStar(numberOfSpace);
  return diamond.map(justifyLineLeft);
}

const drawDiamond = function(patternDetails){
  let {type, width} = patternDetails;
  if(width % 2 == 0){ width-- };
  let diamond = {
    filled: generateFilledDiamond,
    hollow: generateHollowDiamond,
    angled: generateAngledDiamond
  }
  let result = diamond[type](width);
  return result;
}

const generateFilledRectangle = function(width, height){
  let rectangle = new Array(height).fill(fillWithStar(width));
  return rectangle;
}

const generateHollowRectangle = function(width, height){
  let rectangle = new Array(height).fill('');
  
  return rectangle.map(function(row, index){
    if(index == 0 || index == height-1){
      return drawLine('*', width);
    }
    return '*' + drawLine(' ', width-2) + '*';
  });
}

const generateAlternateRectangle = function(width, height){
  let rectangle = new Array(height).fill('');
  let characters = ['*','-'];
  
  return rectangle.map(function(row, index){
    return drawLine(characters[index%2], width);
  });
}

const drawRectangle = function(patternDetails){
  let {type, width, height} = patternDetails;
  let rectangleOfType = {
    filled: generateFilledRectangle,
    hollow: generateHollowRectangle,
    alternative: generateAlternateRectangle 
  }
  let rectangle = rectangleOfType[type](width, height);
  return rectangle;
}

const generateTriangleHelper = function(height){
  let triangle = new Array(height).fill('');
  
  return triangle.map(function(row, index){
    return fillWithStar(++index);
  });
}

const generateLeftAlignedTriangle = function(height){
  let triangle = generateTriangleHelper(height);
  return triangle.map(justifyLineLeft);
}

const generateRightAlignedTriangle = function(height){  
  let triangle = generateTriangleHelper(height);
  return triangle.map(justifyLineRight);
}

const drawTriangle = function(patternDetails){
  let {type, width} = patternDetails;
  let triangle = {
    right: generateRightAlignedTriangle,
    left: generateLeftAlignedTriangle
  }
  let result = triangle[type](width);
  return result;
}

const getMovedPattern = function(pattern ,isFlip, isMirror){
  if(isMirror){
    return mirrorPattern(pattern);
  }
  if(isFlip){
    return flipPattern(pattern);
  }
  return pattern;
}

const generatePatterns = function(argument){
  let index = 0;
  let patterns = [];
  let isFlip = argument[argument.length-1].isFlip;
  let isMirror = argument[argument.length-1].isMirror;
  while(index < argument.length-1){
    let type = argument[index].pattern;
    let width = argument[index].width;
    let height = argument[index].height;
    let generatedPattern = generatePatternOfType(type, width, height);
    generatedPattern = getMovedPattern(generatedPattern,isFlip, isMirror);
    patterns.push(generatedPattern);
    index++;
  }
  patterns = equateArrayElements(patterns);
  return patterns;
}

const generatePatternOfType = function(type, width, height){
  let patternOfType = type.split('_');
  let typeOf = patternOfType[1];
  let fillType = patternOfType[0];
  let pattern = {};
  pattern["rectangle"] = drawRectangle;
  pattern["triangle"] = drawTriangle;
  pattern["diamond"] = drawDiamond;
  return pattern[typeOf]({type:fillType, width:+width, height:+height}); 
}

const getElementsLength = function(array){
  return array.map(function(element){
    return element.length;
  });
};

const pushSpace = function(array, times){
  let lengths = getElementsLength(array);
  let numOfspaces = array[array.length-1].length;
  let space = fillWithSpace(numOfspaces);
  for(let index = 0; index < times; index++){
    array.push(space);
  }
  return array;
}

const equateArrayElements = function(array){
  let lengths = getElementsLength(array);
  let maxLength = Math.max.apply(0, lengths);
  for(let index = 0; index < array.length; index++){
    pushSpace(array[index], maxLength - lengths[index]);
  }
  return array;
}

const zipPatterns = function(pattern){
  let result = [];
  for(let index = 0; index < pattern[0].length; index++){
    result[index] = '';
    for(let innerIndex = 0; innerIndex < pattern.length; innerIndex++){
      result[index] = result[index] + ' '+ pattern[innerIndex][index]; 
    }
  }
  return result;
};

exports.drawTriangle = drawTriangle;
exports.drawDiamond = drawDiamond;
exports.drawRectangle = drawRectangle;
exports.categorizeArguments = categorizeArguments;
exports.generatePatterns = generatePatterns;
exports.zipPatterns = zipPatterns;
