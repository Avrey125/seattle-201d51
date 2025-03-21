'use strict';
/////////////////////////////////////
// RTFM
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// // Write your code here
function sum(a, b, c = 0) { //eslint-disable-line

  var mySum = (a + b + c);
  
  return [mySum, "The sum of " + a + " and " + b + " is " + mySum + "."];
}

// console.log(sum(4, 7));

// Here is the test for sum(); uncomment it to run it
//testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here

function multiply(a, b, c = 1) { //eslint-disable-line
  
  var multiply = (a * b * c);
  return [multiply, "the product of " + a + " and " + b + " is " + multiply + "."]
}
console.log(multiply(5, 7));

// Here is the test for multiply(); uncomment it to run it
 //testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// // Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line

 var add = sum(a, b, c);

var times = multiply(a, b, c);

var sumAndMultiplyArry = [ add[0] , times[0] , a + " and " + b + " and " + c + " sum to " + add[0] + ".", "The product of " + a + " and " + b + " and " + c + " is " + times[0] + "."]
console.log(sumAndMultiplyArry);
return sumAndMultiplyArry;
}
console.log(sumAndMultiply(4 , 7, 5));

// // Here is the test for sumAndMultiply(); uncomment it to run it
 testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line
function sumArray(sumArr) { //eslint-disable-line
  var sentence = "";
  var sum = 0;
  var sum2Arr = [];
  var numberString ="";
  for( var i = 0; i < sumArr.length; i++) {
    sum = sum + sumArr[i];
    console.log(sum)
    if(sumArr[i] === sumArr[sumArr.length-1]) {
    numberString = numberString + sumArr[i].toString();
  }else{ numberString = numberString + sumArr[i].toString() + ","}
  }
  sentence = " was passed in as an array of numbers, and " + sum + " is their sum.";
  sentence = numberString + sentence;
  console.log(sentence);
  sum2Arr.push(sum);
  sum2Arr.push(sentence);
  console.log(sum2Arr)
  return sum2Arr;
}

// sumArray(testArray);
// // Here is the test for sumArray(); uncomment it to run it

//   testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
var sentence2 = "";
var mult = 0;
var mult2Arr;
var numberString2 = "";
for( var i = 0; i < multArr.length; i++) {
  mult = mult * sumArr[i];
  console.log(mult)
  if(multArr[i] === multArr[multArr.length-1]) {
  numberString = numberString2 + multArr[i].toString();
}else{ numberString = numberString + sumArr[i].toString() + ","}
}
sentence2 = "The numbers " + numberString2 + "have a product of " + mult ;
sentence2 =  sentence2;
console.log(sentence2);
sum2Arr.push(mult);
sum2Arr.push(sentence2);
console.log(mult2Arr)
return mult2Arr;
}

// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
