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

const filledDiamond = function(height){
  let diamond = ""; let unwantedStars = 1;
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
  let unwantedStars = 3; let diamond = "";
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
  numOfSpacesNeeded = Math.abs((height - unwantedStars)/2 + 1 );
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

const drawDiamond = function(type, height){
  let diamond;
  if(type == "filled"){
    diamond = filledDiamond(height);
  }
  if(type == "hollow"){
    diamond = hollowDiamond(height);
  }
  if(type == "angled"){
    diamond = angledDiamond(height);
  }
  return diamond;
}


const drawLine = function(symbol, length){
  line = "";
  for(let index = 0; index < length; index++){
    line += symbol;
  }
  return line;
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

const drawRectangle = function(type, width, height){
  let output_rectangle;
  if(type == "filled"){
    output_rectangle = filledRectangle(width, height);
  }
  if(type == "empty"){
    output_rectangle = emptyRectangle(width, height);
  }
  if(type == "alternative"){
    output_rectangle = alternativeRectangle(width, height);
  }
  return output_rectangle;
}


const generateLine = function(symbol, length){
  let line ="";
  for(let index = 0; index <= length; index++){
    line += symbol;
  }
  return line;
}

const leftAlignedTringle = function(height){
  let tringle = "";
  for(let row = 0; row < height-1; row++){
    tringle += generateLine("*",row) + "\n";
  }
  tringle += generateLine("*",height-1);
  return tringle;
}

const rightAlignedTringle = function(height){  
  let tringle = "";
  for(let row = 0; row < height-1; row++){
    tringle += generateLine(" ", height-row-2);
    tringle += generateLine("*", row) + "\n";
  }
  tringle += generateLine("*",height-1);
  return tringle;
}

const drawTriangle = function(alignment, height){
  let tringle;
  
  if(alignment == "right"){
    tringle = rightAlignedTringle(height);
  } else{
    tringle = leftAlignedTringle(height);
  }
  
  return tringle;
}

exports.drawTriangle = drawTriangle;
exports.drawDiamond = drawDiamond;
exports.drawRectangle = drawRectangle;
