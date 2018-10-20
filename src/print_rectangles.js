const generateLine = function(symbol, length){
  line = "";
  for(let index = 0; index < length; index++){
    line += symbol;
  }
  return line;
}

const filledRectangle = function(width, height){
  let rectangle = "";
  for(let row = 0; row < height-1; row++){
    rectangle += generateLine("*", width)+"\n";
  }
  rectangle += generateLine("*", width);
  return rectangle;
}

const emptyRectangle = function(width, height){
  let rectangle = generateLine("*", width)+"\n";
  for(let row = 0; row < height-2; row++){
    rectangle += "*" + generateLine(" ", width-2) +"*\n";
  }
  rectangle += generateLine("*", width);
  return rectangle;
}

const alternativeRectangle = function(width, height){
  let rectangle = "";
  for(let row = 0; row < height; row++){
    let symbol = "-";
    if(row % 2 == 0){
      symbol = "*"; 
    }
    rectangle += generateLine(symbol, width) + "\n";
  }
  return rectangle;
}

const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
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
  console.log(output_rectangle);
}

main();
