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



There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



const betterThanAverage = function (classPoints, yourPoints) {
  const classTotalPoints = classPoints.reduce((acc, point) => acc + point);
  console.log(classTotalPoints / classPoints.length);
  const classAverage = classTotalPoints / classPoints.length;

  if (yourPoints > classAverage) {
    console.log('true');
  } else {
    console.log('false');
  }
};

betterThanAverage([20, 50, 69, 80, 70], 56);



DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space 
"   space WALK   " => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output.


const convertString = function (str) {
  const intoArray = str.split(' ');
  console.log(intoArray);
  const stringLength = intoArray
    .map((word) =>
      word.length > 2
        ? word[0].toUpperCase() + word.substr(1).toLowerCase()
        : word
    )
    .join(' ');

  console.log(stringLength);
  // if(word.length > 2) {
  //   const toLowerCase = intoArray.map((word) => word.toLowerCase());
  //   const firstLetterUpper = toLowerCase.map(
  //     (wor) => wor[0].toUpperCase() + wor.substr(1)
  //   );
  //   console.log(firstLetterUpper.join(' '));
  // }else {
  //   return;
  // }
};

convertString('apple of WALK');
convertString('   space WALK   ');

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



const squareSum = function (numbers) {
  const result = numbers.map((num) => num * num);
  console.log(result);
  // .reduce((acc, val) => acc + val, 0);
  // console.log(result);
};

squareSum([1, 2, 2]);


Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]



const processArray = function (parameter) {
  const result = parameter.map((para) =>
    Number.isInteger(Math.sqrt(para)) ? Math.sqrt(para) : para * para
  );
  // .map((num) => (Number.isInteger(num) ? num : num * num));
  console.log(result);
};

processArray([4, 3, 9, 7, 2, 1]);
*/
