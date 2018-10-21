const assert = require("assert");
const lib = require("../src/patternsLib.js");

const { drawRectangle, drawDiamond, drawTriangle } = lib;

/*----------------- Test for Rectangle -----------------*/
let line = new Array(2).fill("*").join("");
let filledRectangle_2x2 = new Array(2).fill(line).join("\n");
assert.equal(drawRectangle('filled',2,2),filledRectangle_2x2);

line = new Array(5).fill("*").join("");
let filledRectangle_5x5 = new Array(5).fill(line).join("\n");
assert.equal(drawRectangle('filled',5,5),filledRectangle_5x5);

let emptyRectangle_2x2 = "**\n**";
assert.equal(drawRectangle("empty", 2,2),emptyRectangle_2x2);

let emptyRectangle_4x4 = "****\n*  *\n*  *\n****";
assert.equal(drawRectangle("empty", 4,4),emptyRectangle_4x4);

let starLine = new Array(3).fill("*").join("");
let dashLine = new Array(3).fill("-").join("");
let alternateRectangle_3x2 = starLine + "\n" + dashLine + "\n";
assert.equal(drawRectangle("alternative", 3, 2), alternateRectangle_3x2);

starLine = new Array(5).fill("*").join("");
dashLine = new Array(5).fill("-").join("");
let alternateRectangle_5x5 = starLine + "\n" + dashLine;
alternateRectangle_5x5 += "\n" +starLine + "\n" + dashLine + "\n" + starLine + "\n"; 
assert.equal(drawRectangle("alternative", 5, 5), alternateRectangle_5x5);

/*---------------- Test for trinagle ---------------------*/
let triangleLeft_2 = "*\n**";
assert.equal(drawTriangle("left", 2),triangleLeft_2);

let triangleLeft_4 = "*\n**\n***\n****";
assert.equal(drawTriangle("left", 4),triangleLeft_4);

let triangleRight_2 = " *\n**";
assert.equal(drawTriangle("right", 2),triangleRight_2);

triangleRight_4 = "   *\n  **\n ***\n****";
assert.equal(drawTriangle("right", 4),triangleRight_4);
