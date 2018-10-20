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

const main = function(){
  let alignment = process.argv[2];
  let height = process.argv[3];
  let tringle;
  
  if(alignment == "right"){
    tringle = rightAlignedTringle(height);
  } else{
    tringle = leftAlignedTringle(height);
  }

  console.log(tringle);
}

main();
