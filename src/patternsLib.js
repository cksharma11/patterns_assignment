const lib = require("./patternsUtilLib.js");
const {
  fillWithStar,
  fillWithSpace,
  fillSpaceEndWithStar,
  drawLine,
  generateLine,
  categorizeArguments
} = lib;

const generateFilledDiamond = function(height){
  let diamond = []; 
  let spaces = 1;
  for(let row = 0; row < height; row++,spaces += 2){
    let numOfSpacesNeeded = Math.abs((height - spaces)/2);
    let numOfStarNeeded = (height - (numOfSpacesNeeded*2));
    diamond[row] = fillWithSpace(numOfSpacesNeeded);
    diamond[row] += fillWithStar(numOfStarNeeded);
  }
  return diamond;
}

const generateHollowDiamond = function(height){
  let unwantedStars = 3; 
  let diamond = [];
  let numOfSpacesNeeded = Math.abs((height - unwantedStars)/2 +1);
  diamond [0] = fillSpaceEndWithStar(numOfSpacesNeeded);

  for(let row = 1; row < height -1; row++){
    numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
    diamond[row] = fillSpaceEndWithStar(numOfSpacesNeeded);

    numOfStarNeeded = (height - (numOfSpacesNeeded*2));
    diamond[row] += fillSpaceEndWithStar(Math.abs(numOfStarNeeded - 2));
    unwantedStars += 2;
  }

  numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
  diamond[height-1] = fillSpaceEndWithStar(numOfSpacesNeeded);
  return diamond;
}

const generateAngledDiamond = function(height){
  let diamond = [];
  let unwantedStars = 3;
  let leftSideSymbol = "/"; 
  let rightSideSymbol = "\\";
  let numOfSpacesNeeded = Math.abs((height - unwantedStars)/2 + 1 );
  diamond[0] = fillSpaceEndWithStar(numOfSpacesNeeded);

  for(let row = 1; row < height - 1; row++){
    numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
    diamond[row] = fillWithSpace(numOfSpacesNeeded);
    if(numOfSpacesNeeded == 0){
      diamond[row] = "*" + fillWithSpace(height -2) + "*";
      leftSideSymbol = "\\";
      rightSideSymbol = "/";
      unwantedStars += 2;
      continue;
    }
    numOfStarNeeded = (height - (numOfSpacesNeeded*2));
    diamond[row] += leftSideSymbol+fillWithSpace(numOfStarNeeded -2) + rightSideSymbol;
    unwantedStars += 2;
  }
  numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
  diamond[height-1] = fillSpaceEndWithStar(numOfSpacesNeeded);
  return diamond;
}

const drawDiamond = function(patternDetails){
  let {type, width} = patternDetails;
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
  let rectangle = [];
  rectangle[0] = fillWithStar(width);
  for(let row = 1; row < height-1; row++){
    rectangle[row] = "*" + fillWithSpace(width-2) + "*";
  }
  rectangle[height-1] = fillWithStar(width);
  return rectangle;
}

const generateAlternateRectangle = function(width, height){
  let rectangle = [];
  let alternateLines = [[drawLine('*',width)],[drawLine('-',width)]];
  for(let row = 0; row < height; row ++){
    rectangle[row] = alternateLines[row % 2];
  }
  return rectangle;
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
  let triangle = [];
  for(let index = 0; triangle.push(++index), index < height;);
  
  return triangle.map(function(index){
    return fillWithStar(index);
  });
}

const generateRightAlignedTriangle = function(height){  
  let triangle = [];
  let noOfSpaceNeeded = height - 1;
  for(let row = 0; row < height; row++){
    triangle[row] = drawLine(' ',noOfSpaceNeeded--);
    triangle[row] += drawLine("*", row+1);
  }
  return triangle;
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
