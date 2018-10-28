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
  let {type, width} = categorizeArguments(patternDetails);
  let diamond = {
    filled: filledDiamond,
    hollow: hollowDiamond,
    angled: angledDiamond
  }
  return diamond[type](width);
}

const filledRectangle = function(width, height){
  let rectangle = "";
  for(let row = 0; row < height-1; row++){
    rectangle += drawLine("*", width)+"\n";
  }
  rectangle += drawLine("*", width);
  return rectangle;
}

const emptyRectangle = function(width, height){
  let rectangle = drawLine("*", width)+"\n";
  for(let row = 0; row < height-2; row++){
    rectangle += "*" + drawLine(" ", width-2) +"*\n";
  }
  rectangle += drawLine("*", width);
  return rectangle;
}

const alternativeRectangle = function(width, height){
  let rectangle = "";
  for(let row = 0; row < height; row++){
    let symbol = "-";
    if(row % 2 == 0){
      symbol = "*"; 
    }
    rectangle += drawLine(symbol, width) + "\n";
  }
  return rectangle;
}

const drawRectangle = function(patternDetails){
  let {type, width, height} = categorizeArguments(patternDetails);
  let rectangle = {
    filled: filledRectangle,
    empty: emptyRectangle,
    alternative: alternativeRectangle 
  }
  return rectangle[type](width, height);
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
  let {type, width} = categorizeArguments(patternDetails);
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
