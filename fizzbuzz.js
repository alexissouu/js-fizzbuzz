//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
    
 if ( x%3 === 0 && x%5 != 0) {
    console.log("fizz")
    return "fizz";
 }

 else if (x%5 === 0 && x%3 !=0) {
    console.log("buzz")
    return "buzz";
 }

 else if (x%5 === 0 && x%3 ===0) {
    console.log("fizzbuzz")
    return "fizzbuzz";
 }

 else {
    console.log(x)
    return x;
 }

};

fizzbuzz(2)
fizzbuzz(5)
fizzbuzz(6)
fizzbuzz(11)
fizzbuzz(30)

module.exports = { fizzbuzz: fizzbuzz };
