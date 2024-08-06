/**
 * Extremely Basic

Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.

Input: The input file will contain 2 integer numbers.
Output: Print the letter X (uppercase) with a blank space before and after the equal signal followed by the value of X, according to the following example.
Obs.: don't forget the endline after all.

*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var X = A + B;
console.log("X = " + X);

/**
 * SUBMISSION # 40740086
Problem: 1001 - Extremely Basic
Answer: Accepted
Language: JavaScript 12.18 (nodejs 12.18.3) [+2s]
Runtime: 0.120s
File size: 297 Bytes
Memory: -
Submission: 8/6/24, 1:20:50 AM
 */
