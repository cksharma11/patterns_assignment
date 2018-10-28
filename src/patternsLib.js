const lib = require("./patternsUtilLib.js");
const {
  fillWithStar,
  fillWithSpace,
  fillSpaceEndWithStar,
  drawLine,
  generateLine,
  categorizeArguments
} = lib;

const filledDiamond = function(height){
  let diamond = ""; 
  let unwantedStars = 1;
  for(let row = 0; row < height-1; row++){
    numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
    diamond += fillWithSpace(numOfSpacesNeeded);

    numOfStarNeeded = (height - (numOfSpacesNeeded*2));
    diamond += fillWithStar(numOfStarNeeded) + "\n";
    unwantedStars += 2;
  }
  numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded);
  return diamond;
}

const hollowDiamond = function(height){
  let unwantedStars = 3; 
  let diamond = "";
  numOfSpacesNeeded = Math.abs((height - unwantedStars)/2 +1);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded) + "\n";

  for(let row = 1; row < height -1; row++){
    numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
    diamond += fillSpaceEndWithStar(numOfSpacesNeeded);

    numOfStarNeeded = (height - (numOfSpacesNeeded*2));
    diamond += fillSpaceEndWithStar(Math.abs(numOfStarNeeded - 2)) + "\n";
    unwantedStars += 2;
  }

  numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded);

  return diamond;
}

const angledDiamond = function(height){
  let diamond = "";
  let unwantedStars = 3;
  let leftSideSymbol = "/"; 
  let rightSideSymbol = "\\";
  let numOfSpacesNeeded = Math.abs((height - unwantedStars)/2 + 1 );
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded) + "\n";

  for(let row = 1; row < height - 1; row++){
    numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
    diamond += fillWithSpace(numOfSpacesNeeded);
    if(numOfSpacesNeeded == 0){
      diamond += "*" + fillWithSpace(height -2)+ "*"+"\n";
      leftSideSymbol = "\\";
      rightSideSymbol = "/";
      unwantedStars += 2;
      continue;
    }
    numOfStarNeeded = (height - (numOfSpacesNeeded*2));
    diamond += leftSideSymbol+fillWithSpace(numOfStarNeeded -2) + rightSideSymbol+"\n";
    unwantedStars += 2;
  }
  numOfSpacesNeeded = Math.abs((height - unwantedStars)/2);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded);
  return diamond;
}

const drawDiamond = function(patternDetails){
  let {type, width} = patternDetails;
  let diamond = {
    filled: filledDiamond,
    hollow: hollowDiamond,
    angled: angledDiamond
  }
  return diamond[type](width);
}

const filledRectangle = function(width, height){
  let rectangle = new Array(height).fill(fillWithStar(width));
  return rectangle;
}

const emptyRectangle = function(width, height){
  let rectangle = [];
  rectangle[0] = fillWithStar(width);
  for(let row = 1; row < height-1; row++){
    rectangle[row] = "*" + fillWithSpace(width-2) + "*";
  }
  rectangle[height-1] = fillWithStar(width);
  return rectangle;
}

const alternativeRectangle = function(width, height){
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
    filled: filledRectangle,
    empty: emptyRectangle,
    alternative: alternativeRectangle 
  }
  let rectangle = rectangleOfType[type](width, height);
  return rectangle.join('\n');
}

const leftAlignedTringle = function(height){
  let triangle = "";
  for(let row = 0; row < height-1; row++){
    triangle += generateLine("*",row) + "\n";
  }
  triangle += generateLine("*",height-1);
  return triangle;
}

const rightAlignedTringle = function(height){  
  let triangle = "";
  for(let row = 0; row < height-1; row++){
    triangle += generateLine(" ", height-row-2);
    triangle += generateLine("*", row) + "\n";
  }
  triangle += generateLine("*",height-1);
  return triangle;
}

const drawTriangle = function(patternDetails){
  let {type, width} = patternDetails;
  let triangle = {
    right: rightAlignedTringle,
    left: leftAlignedTringle
  }
  return triangle[type](width);
}

exports.drawTriangle = drawTriangle;
exports.drawDiamond = drawDiamond;
exports.drawRectangle = drawRectangle;
exports.categorizeArguments = categorizeArguments;
