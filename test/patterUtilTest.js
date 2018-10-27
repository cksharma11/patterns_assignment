const assert = require("assert");
const lib = require("../src/patternsUtilLib.js");

const fillWithStar = lib.fillWithStar;
const fillWithSpace = lib.fillWithSpace;
const fillSpaceEndWithStar = lib.fillSpaceEndWithStar;

const repeateCharacter = function(charcater, times){
  return new Array(times).fill(charcater).join("");
}


assert.equal(fillWithStar(1),repeateCharacter("*",1));
assert.equal(fillWithStar(5), repeateCharacter("*",5)),

assert.equal(fillWithStar(10), repeateCharacter("*",10)),
assert.equal(fillWithStar(15), repeateCharacter("*",15)),


assert.equal(fillWithSpace(1),repeateCharacter(" ",1));
assert.equal(fillWithSpace(5),repeateCharacter(" ",5));

assert.equal(fillWithSpace(15),repeateCharacter(" ",15));
assert.equal(fillWithSpace(10),repeateCharacter(" ",10));


assert.equal(fillSpaceEndWithStar(3),repeateCharacter(" ",3)+"*");
assert.equal(fillSpaceEndWithStar(5),repeateCharacter(" ",5)+"*");

assert.equal(fillSpaceEndWithStar(10),repeateCharacter(" ",10)+"*");
assert.equal(fillSpaceEndWithStar(15),repeateCharacter(" ",15)+"*");


console.log("All Test Passed.")
