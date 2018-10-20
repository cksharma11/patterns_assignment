const fillWithStar = function(heightOfDiamond){
  let filledString = "";
  for(let index = 0; index < heightOfDiamond; index++){
    filledString += "*";
  }
  return filledString;
}

const fillWithSpace = function(heightOfDiamond){
  let filledString = "";
  for(let index = 0; index < heightOfDiamond; index++){
    filledString += " ";
  }
  return filledString;
}

const fillSpaceEndWithStar = function(heightOfDiamond){
  let filledString = "";
  for(let index =0; index < heightOfDiamond; index++){
    filledString += " ";
  }
  return filledString + "*";
}

const filledDiamond = function(heightOfDiamond){
  let diamond = ""; let unwantedStars = 1;
  for(let row = 0; row < heightOfDiamond-1; row++){
    numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2);
    diamond += fillWithSpace(numOfSpacesNeeded);

    numOfStarNeeded = (heightOfDiamond - (numOfSpacesNeeded*2));
    diamond += fillWithStar(numOfStarNeeded) + "\n";
    unwantedStars += 2;
  }
  numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded);
  return diamond;
}

const hollowDiamond = function(heightOfDiamond){
  let unwantedStars = 3; let diamond = "";
  numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2 +1);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded) + "\n";

  for(let row = 1; row < heightOfDiamond -1; row++){
    numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2);
    diamond += fillSpaceEndWithStar(numOfSpacesNeeded);

    numOfStarNeeded = (heightOfDiamond - (numOfSpacesNeeded*2));
    diamond += fillSpaceEndWithStar(Math.abs(numOfStarNeeded - 2)) + "\n";
    unwantedStars += 2;
  }

  numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded);

  return diamond;
}

const angledDiamond = function(heightOfDiamond){
  let diamond = "";
  let unwantedStars = 3;
  let leftSideSymbol = "/"; 
  let rightSideSymbol = "\\";
  numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2 + 1 );
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded) + "\n";

  for(let row = 1; row < heightOfDiamond - 1; row++){
    numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2);
    diamond += fillWithSpace(numOfSpacesNeeded);
    if(numOfSpacesNeeded == 0){
      diamond += "*" + fillWithSpace(heightOfDiamond -2)+ "*"+"\n";
      leftSideSymbol = "\\";
      rightSideSymbol = "/";
      unwantedStars += 2;
      continue;
    }
    numOfStarNeeded = (heightOfDiamond - (numOfSpacesNeeded*2));
    diamond += leftSideSymbol+fillWithSpace(numOfStarNeeded -2) + rightSideSymbol+"\n";
    unwantedStars += 2;
  }
  numOfSpacesNeeded = Math.abs((heightOfDiamond - unwantedStars)/2);
  diamond += fillSpaceEndWithStar(numOfSpacesNeeded);
  return diamond;
}

const main = function(){
  let type = process.argv[2];
  let heightOfDiamond = +process.argv[3];
  let diamond;

  if(type == "filled"){
    diamond = filledDiamond(heightOfDiamond);
  }
  if(type == "hollow"){
    diamond = hollowDiamond(heightOfDiamond);
  }
  if(type == "angled"){
    diamond = angledDiamond(heightOfDiamond);
  }

  console.log(diamond);
}

main();
