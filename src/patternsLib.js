const lib = require("./patternsUtilLib.js");
const {
  fillWithStar,
  fillWithSpace,
  fillSpaceEndWithStar,
  drawLine,
  generateLine,
  categorizeArguments,
  justifyLineRight
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
  return diamond;
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
  return diamond;
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
  return diamond;
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
  return result.join('\n');
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
  return rectangle.join('\n');
}

const generateLeftAlignedTriangle = function(height){
  let triangle = new Array(height).fill('');
  
  return triangle.map(function(row, index){
    return fillWithStar(++index);
  });
}

const generateRightAlignedTriangle = function(height){  
  let triangle = generateLeftAlignedTriangle(height);
  return triangle.map(justifyLineRight);
}

const drawTriangle = function(patternDetails){
  let {type, width} = patternDetails;
  let triangle = {
    right: generateRightAlignedTriangle,
    left: generateLeftAlignedTriangle
  }
  let result = triangle[type](width);
  return result.join('\n');
}

exports.drawTriangle = drawTriangle;
exports.drawDiamond = drawDiamond;
exports.drawRectangle = drawRectangle;
exports.categorizeArguments = categorizeArguments;
