const assert = require("assert");
const lib = require("../src/patternsLib.js");

const { drawRectangle, drawDiamond, drawTriangle } = lib;

/*----------------- Test for Rectangle -----------------*/
let line = new Array(2).fill("*").join("");
let filledRectangle_2x2 = new Array(2).fill(line).join("\n");
assert.equal(drawRectangle({type: 'filled', width: 2, height: 2}),filledRectangle_2x2);

line = new Array(5).fill("*").join("");
let filledRectangle_5x5 = new Array(5).fill(line).join("\n");
assert.equal(drawRectangle({type:'filled', width: 5, height: 5}),filledRectangle_5x5);

let emptyRectangle_2x2 = "**\n**";
assert.equal(drawRectangle({ type: "empty", width: 2, height: 2}),emptyRectangle_2x2);

let emptyRectangle_4x4 = "****\n*  *\n*  *\n****";
assert.equal(drawRectangle({ type: "empty", width: 4, height: 4}),emptyRectangle_4x4);

let starLine = new Array(3).fill("*").join("");
let dashLine = new Array(3).fill("-").join("");
let alternateRectangle_3x2 = starLine + "\n" + dashLine + "\n";
assert.equal(drawRectangle({ type: "alternative", width: 3, height: 2}), alternateRectangle_3x2);

starLine = new Array(5).fill("*").join("");
dashLine = new Array(5).fill("-").join("");
let alternateRectangle_5x5 = starLine + "\n" + dashLine;
alternateRectangle_5x5 += "\n" +starLine + "\n" + dashLine + "\n" + starLine + "\n"; 
assert.equal(drawRectangle({ type: "alternative", width: 5, height: 5}), alternateRectangle_5x5);

/*---------------- Test for trinagle ---------------------*/
let triangleLeft_2 = "*\n**";
assert.equal(drawTriangle({type: "left", width: 2}),triangleLeft_2);

let triangleLeft_4 = "*\n**\n***\n****";
assert.equal(drawTriangle({type: "left", width: 4}),triangleLeft_4);

let triangleRight_2 = " *\n**";
assert.equal(drawTriangle({ type: "right", width: 2}),triangleRight_2);

triangleRight_4 = "   *\n  **\n ***\n****";
assert.equal(drawTriangle({ type: "right", width: 4}),triangleRight_4);

/*-------------- Test for diamonds ------------------*/

let filledDiamond_3 = " *\n***\n *";
assert.equal(drawDiamond({ type: "filled", width: 3}), filledDiamond_3);

let filledDiamond_5 = "  *\n ***\n*****\n ***\n  *";
assert.equal(drawDiamond({ type: "filled", width: 5}), filledDiamond_5);

let hollowDiamond_3 = " *\n* *\n *";
assert.equal(drawDiamond({type: "hollow", width: 3}), hollowDiamond_3);

let hollowDiamond_5 = "  *\n * *\n*   *\n * *\n  *";
assert.equal(drawDiamond({ type: "hollow", width: 5}), hollowDiamond_5);

let angledDiamond_3 = " *\n* *\n *";
assert.equal(drawDiamond({type:"angled", width: 3}), angledDiamond_3);

let angledDiamond_5 = "  *\n / \\\n*   *\n \\ /\n  *";
assert.equal(drawDiamond({type: "angled", width: 5}), angledDiamond_5);
