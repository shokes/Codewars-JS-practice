/*

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// const speedCoverter = function (km) {
//   const convert = km * 27.7778;

//  // console.log(convert);

// console.log(Math.floor(convert));
// };
// speedCoverter(1.08);
// speedCoverter(2);
// speedCoverter(2.5544);

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// const mutliarray = function (values) {
//   const newarray = values.reduce((acc, val) => acc * val);

//   console.log(newarray);
// };

// mutliarray([1, 2, 3, 4]);

// 18/4/22 - 1. Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// const solution = function (nums) {
//   if (Array.isArray(nums)) {
//     const sort = nums.sort((a, b) => a - b);
//     console.log(sort);
//   } else {
//     console.log('[]');
//   }
// };

// solution([12, 2, 34, 64, 3, 12]);
// solution([]);

//Given a varying number of integer arguments, return the digits that are not present in any of them.

function unusedDigits(arr) {
  //console.log(arr);
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const arrStr = arr.join('');

  // return digits.filter((numStr) => !arrStr.includes(numStr)).join('');
  console.log(digits.filter((numStr) => !arrStr.includes(numStr)).join(''));
}

unusedDigits([12, 34, 56, 78]);
unusedDigits([2015, 8, 26]);


Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

*/
