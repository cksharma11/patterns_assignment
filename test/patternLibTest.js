const assert = require("assert");
const lib = require("../src/patternsLib.js");

const { drawRectangle, drawDiamond, drawTriangle } = lib;

/*----------------- Test for Rectangle -----------------*/

let filledRectangle_5x5  = "*****\n";
filledRectangle_5x5     += "*****\n";
filledRectangle_5x5     += "*****\n";
filledRectangle_5x5     += "*****\n";
filledRectangle_5x5     += "*****";
assert.equal(drawRectangle({type:'filled',width:5,height:5}),filledRectangle_5x5);

let filledRectangle_20x5  = "********************\n";
filledRectangle_20x5     += "********************\n";
filledRectangle_20x5     += "********************\n";
filledRectangle_20x5     += "********************\n";
filledRectangle_20x5     += "********************";
assert.equal(drawRectangle({type:'filled',width:20,height:5}),filledRectangle_20x5);

let generateEmptyRectangle_2x2  = "**\n";
generateEmptyRectangle_2x2     += "**";
assert.equal(drawRectangle({type:"hollow", width:2,height:2}),generateEmptyRectangle_2x2);

let generateEmptyRectangle_4x4 = "****\n";
generateEmptyRectangle_4x4    += "*  *\n";
generateEmptyRectangle_4x4    += "*  *\n";
generateEmptyRectangle_4x4    += "****";
assert.equal(drawRectangle({type:"hollow", width:4,height:4}),generateEmptyRectangle_4x4);


let alternateRectangle_3x3  = "***\n";
alternateRectangle_3x3     += "---\n";
alternateRectangle_3x3     += "***";
assert.equal(drawRectangle({type:"alternative", width:3,height:3}),alternateRectangle_3x3);

let alternateRectangle_20x5  = "********************\n";
alternateRectangle_20x5     += "--------------------\n";
alternateRectangle_20x5     += "********************\n";
alternateRectangle_20x5     += "--------------------\n";
alternateRectangle_20x5     += "********************";
assert.equal(drawRectangle({type:"alternative", width:20,height:5}),alternateRectangle_20x5);

/*---------------- Test for triangle ---------------------*/

let triangleLeft_2  = "* \n";
triangleLeft_2     += "**";
assert.equal(drawTriangle({type:"left", width:2}),triangleLeft_2);

let triangleLeft_4 = "*   \n";
triangleLeft_4    += "**  \n";
triangleLeft_4    += "*** \n";
triangleLeft_4    += "****";
assert.equal(drawTriangle({type:"left", width:4}),triangleLeft_4);

let triangleRight_2 = " *\n";
triangleRight_2    += "**";
assert.equal(drawTriangle({type:"right", width:2}),triangleRight_2);

let triangleRight_4 = "   *\n";
triangleRight_4    += "  **\n";
triangleRight_4    += " ***\n";
triangleRight_4    += "****";
assert.equal(drawTriangle({type:"right", width:4}),triangleRight_4);

/*-------------- Test for diamonds ------------------*/

let filledDiamond_3 = " * \n";
filledDiamond_3    += "***\n";
filledDiamond_3    += " * ";
assert.equal(drawDiamond({type:"filled", width: 3}), filledDiamond_3);

let filledDiamond_5 = "  *  \n";
filledDiamond_5    += " *** \n";
filledDiamond_5    += "*****\n";
filledDiamond_5    += " *** \n";
filledDiamond_5    += "  *  ";
assert.equal(drawDiamond({type: "filled", width: 5}), filledDiamond_5);

let hollowDiamond_3 = " * \n";
hollowDiamond_3    += "* *\n";
hollowDiamond_3    += " * ";
assert.equal(drawDiamond({type: "hollow", width: 3}), hollowDiamond_3);

let hollowDiamond_5 = "  *  \n";
hollowDiamond_5    += " * * \n";
hollowDiamond_5    += "*   *\n"
hollowDiamond_5    += " * * \n";
hollowDiamond_5    += "  *  ";
assert.equal(drawDiamond({type: "hollow", width: 5}), hollowDiamond_5);

let angledDiamond_3 = " * \n";
angledDiamond_3    += "* *\n";
angledDiamond_3    += " * ";
assert.equal(drawDiamond({type :"angled", width: 3 }), angledDiamond_3);

let angledDiamond_5 = "  *  \n";
angledDiamond_5    += " / \\ \n";
angledDiamond_5    += "*   *\n";
angledDiamond_5    += " \\ / \n";
angledDiamond_5    += "  *  ";
assert.equal(drawDiamond({type: 'angled', width: 5}), angledDiamond_5);
console.log("All Test Passed.");
