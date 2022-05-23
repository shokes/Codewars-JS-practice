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


Complete the function which converts a binary number (given as a string) to a decimal number.



function binToDec(bin) {
 // const toNum = +bin;
  console.log(parseInt(bin, 2));
}

binToDec('1101000');


Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1





const checkCase = function (a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    console.log(-1);
  } else if (a == )
  }
};

checkCase(9, 'tttt');
// checkCase('r');


In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]




const filteredL = function (lists) {
  const filtered = lists.filter((list) => typeof list === 'number');
  console.log(filtered);
};

filteredL([1, 2, 'aasf', '1', '123', 123]);


For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.


// 2 9 14 7 15

const bingoGame = function (array) {
  const filterDuplicates = [...new Set(array)];

  console.log(filterDuplicates);

  // const checkWin = filterDuplicates.every(
  //   (num) => num === 2 || 9 || 14 || 7 || 15
  // );
  // console.log(checkWin);

  // const checkWin = filterDuplicates.includes(2 && 9 && 14 && 7 && 15);
  // console.log(checkWin);

  const checkWin = filterDuplicates.includes(2 && 9 && 14 && 7 && 15);

  if (checkWin) {
    console.log('Win');
  } else {
    console.log('Lose');
  }

  // console.log(checkWin);
};

bingoGame([2, 3, 4, 4, 5, 5, 2]);
bingoGame([2, 1, 5, 3, 6, 2, 14, 9, 14, 7, 15]);
bingoGame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
bingoGame([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]);
function bingo(a) {
  return a.includes(2) &&
    a.includes(7) &&
    a.includes(9) &&
    a.includes(14) &&
    a.includes(15)
    ? 'WIN'
    : 'LOSE';
}


Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.



const volume = function (length, width, height) {
  return length * width * height;
};

const vol = volume(3, 4, 5);

console.log(vol);

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]


const checkVowels = function (str) {
  const convert = str.toLowerCase();
  //  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  convert.split('').map((element, index) => {
    //   console.log(element, index);
    if (element === 'a' || 'e' || 'i' || 'o' || 'u' || 'y') {
      console.log(index);
    } else {
      console.log('nothing');
    }
  });

  // console.log(convert);
};

checkVowels('Super');


Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.


const maskify = function (str) {
  const lastNumber = str.slice(-4);

  const maskedNumber = lastNumber.padStart(str.length, '*');

  console.log(maskedNumber);
};

maskify('ronaldo');

We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.


const plural = function (num) {
  if (num === 0 || num === 1) {
    console.log('singlar');
  } else {
    console.log('plural');
  }
};

plural(8.2);
plural(0);
plural(1);


Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


const integer = function (arr) {
  let newArr = [];

  if (!Array.isArray(arr) || !arr.length) {
    newArr = [];
    console.log(newArr);
  } else {
    const filterPostive = arr.filter((num) => num > 0);
    //  console.log(filterPostive.length);
    newArr.push(filterPostive.length);

    const filteredArr = arr
      .filter((num) => num < 1)
      .reduce((num, acc) => num + acc, 0);
    //  console.log(filteredArr);
    newArr.push(filteredArr);

    console.log(newArr);
  }
};

integer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
integer([]);
integer(null);


Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


const reverse = function (arr) {
  const newArr = String(arr)
    .split('')
    .map((num) => {
      Number(num);
    });

  console.log(newArr);
};

reverse(34534);


Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"


const nameShuffler = function (names) {
  const newArr = names.split(' ').reverse().join(' ');

  console.log(newArr);
};

nameShuffler('john McClane');


Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"


const stringWords = function (a, b) {
  if (a.length > b.length) {
    console.log(`${b}${a}${b}`);
  } else if (a.length < b.length) {
    console.log(`${a}${b}${a}`);
  }
};

stringWords('1', '22');
stringWords('22', '1');
stringWords('', '1');
stringWords('Soon', 'Me');


Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


const check = function (num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};

check(2);
check(3);
check(4);

You are given array of integers, your task will be to count all pairs in that array and return their count.

*/

