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

vGiven a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

const integers = function (arr) {
  if (arr.length === 0) {
    console.log('empty');
  } else {
    const reduced = arr.reduce((num, acc) => num + acc, 0);
    if (reduced % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
};

integers([0, 1, 4]);


Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!



 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit

function celsiusToFahrenheit(arrayOfNumbers) {
  const answer = arrayOfNumbers.map((num) => Math.trunc(num * 1.8 + 32));

  return answer;
}

console.log(celsiusToFahrenheit([5, 6, 7, 8, 4, 4])); 

const myFun = () => {
  console.log('fnccledhj');
};

let myTimer = setInterval(myFun, 1000);
clearInterval(myTimer);
//myTimer = setInterval(myFun, 4000);

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
  for (i = 1; i < 1000000; i++) {
    if (!A.includes(i)) return i;
  }
}


In order to satisfy the O(N) time-complexity, construct a Set() in O(N) time and space complexity, then use a while loop which is considered constant time relative to N O(N) as well (thank you, wchargin), since the maximum possible number of iterations is equal to N and average performance of a Set#has() operation is O(1). Because O(N + N) = O(N), regarding time complexity, this solution is overall O(N) performance in both time and space:


function solution(A) {
  const set = new Set(A);
  let i = 1;

  while (set.has(i)) {
    i++;
  }

  return i;
}


1. Remove all even integers from an array
Input: [4, 1, 9, 10, 15, 22, 5, 14]

Output: [4, 10, 22, 14]


const removeEvenIntegers = function (arr) {
  const result = arr.filter((num) => num % 2 === 0);

  console.log(result);
};

removeEvenIntegers([4, 1, 9, 10, 15, 22, 5, 14]);


Find all repeated numbers from an array
Input: [1,2,4,5,6,1,3,7,9,10]
Output: [1, 2, 4, 5, 6, 3, 7, 9, 10];


const repeatedNumbers = function (arr) {
  const set = new Set(arr);
  console.log(set);
};

repeatedNumbers([1, 2, 4, 5, 6, 1, 3, 7, 9, 10]);


Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'


function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return 'hello boss';
  } else {
    return 'hello guest';
  }
}

Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters.
Examples of arrays that will be tested:

const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

Notes:

You will always be given an array with at least 1 string to check.


const checkUsernames = function (arr) {
  const result = arr.every(
    (word) =>
      word.length >= 6 && word.length <= 10 &&  /[a-z]/.test(word) &&
     /\d/.test(word) && /^[A-Za-z0-9]*$/.test(word)
    
  
  );
  console.log(result);
};
checkUsernames(['john123', 'alex222', 'sandra1']);
checkUsernames(['john_123', 'alex222', 'sandra1']);
//const result = arr.every((word) => {word.length >= 6 && word.length <= 10


const a = 5; // 00000000000000000000000000000101
const b = 3;
console.log(a ^ b);

You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }


var list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
  },
];

const list = function (arr) {
  const result = arr.reduce((total, item) => {
    console.log(total);
    const { language } = item;
    console.log(language);

    // if (!language) return total;
    if (!total[language]) {
      total[language] = 1;
    } else {
      // total[language] = {
      //   ...total[language],
      //    total[language]
      // };
      total[language] = total[language] + 1;
    }

    return total;
  }, {});
  console.log(result);
};

list(list1);

// const languages = repos.reduce((total, item) => {
//   const { language, stargazers_count } = item;
//   if (!language) return total;
//   if (!total[language]) {
//     total[language] = { label: language, value: 1, stars: stargazers_count };
//   } else {
//     total[language] = {
//       ...total[language],
//       value: total[language].value + 1,
//       stars: total[language].stars + stargazers_count,
//     };
//   }
//   return total;
// }, {});



You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Notes:

The order of the properties in the objects does not matter (except in COBOL).
The input array will always be valid and formatted as in the example above.





var list1 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];
//your function should return the following array:

[
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?',
  },
];

const solution = function (arr) {
  const modi = arr.map((item) => {
    //  item.greeting = 'hi';

    const { firstName, language } = item;
    item.greeting = `Hi ${firstName}, what do you like the most about ${language}?`;
    return item;
  });
  console.log(modi);
};

solution(list1);

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }
Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.




const meetUp = function (arr) {
  const result = arr.reduce((total, item) => {
    const { meal } = item;
    if (!total[meal]) {
      total[meal] = 1;
    } else {
      total[meal] = total[meal] + 1;
    }
    return total;
  }, {});
  console.log(result);
};


You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.


var list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript',
  },

  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

const meetUp = function (arr) {
  let count = 0;
  arr.map((item) => {
    if (item.continent === 'Europe' && item.language === 'JavaScript') {
      count++;
    } else {
      count;
    }
  });

  console.log(count);
};

meetUp(list1);



Kiyo has been given a series of problems and she needs your help to solve them!

You will be given a two-dimensional array such as the one below.

a = 
[
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
]

Remove everything but odd integers from each sub-array.

Sum the remaining odd integers of each sub-array. 

Sum of odds ( a[0] = 1 + 3 + 5 + 7 + 9 ) = 25
       
Find the Least common multiple of the arrays.

 (25, 25, 25, 25, 25, 25, 25, 25, 25)
  ^                                ^ 
  |                                |
a[0]-----------------------------a[8]

example : lcm( 25, 25, 25, 25, 25, 25, 25, 25, 25 ) = 25

example : lcm( 37, 29, 19, 38, 31, 28, 15, 24, 9 ) = 1592632440
Integers are between 0 and 9. Sub-array size is always 9. The number of sub-arrays varies between 9 and 18.

Watch out for non-integers mixed in the arrays. If all arrays are empty return 0.


a = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

const kiyo = function (arr) {
  const result = arr
    .map((item) => item.filter((num) => num % 2 !== 0))
    .map((item) => item.reduce((acc, num) => acc + num, 0));

  // const results = result.map((item) => item.reduce((acc, num) => acc + num, 0));
  // console.log(result);

  maximum = Math.max(...result);
  // console.log(maximum);

  for (i = 1; i < maximum; i++) {
    // if (result.every((num) => i % num === 1)) console.log(i);
    // if (result.every((num) => i / num === 0)) {
    //   console.log(i);
    // }

    result.every((num) => {
      if (i % num == 0) console.log('working');
    });
  }
};
kiyo(a);
//   for (i = 1; i < 1000000; i++) {
//     if (!A.includes(i)) return i;
//   }

// const yii = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = yii.every((num) => num > 1);
// console.log(result);

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]


const countBy = function (x, y) {
  let z = [];

  for (i = x; i <= x * y; i += x) {
    z.push(i);
  }
  console.log(z);
};

countBy(1, 10);
countBy(2, 5);


You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.




var list1 = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'Python',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'Ruby',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'Ruby',
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 95,
    language: 'JavaScript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 18,
    language: 'JavaScript',
  },
  {
    firstName: 'Joao',
    lastName: 'D.',
    country: 'Portugal',
    continent: 'Europe',
    age: 25,
    language: 'JavaScript',
  },
];

const list = function (arr) {
  const result = arr.reduce((total, item) => {
    const { language } = item;
    if (!total[language]) {
      total[language] = 1;
    } else {
      total[language] = total[language] + 1;
    }
    return total;
  }, {});
  console.log(result);

  const { Python, Ruby, JavaScript } = result;

  if (
    JavaScript > 2 * Ruby ||
    JavaScript > 2 * Python ||
    Ruby > 2 * JavaScript ||
    Ruby > 2 * Python ||
    Python > 2 * JavaScript ||
    Python > 2 * Ruby
  ) {
    console.log('false');
  } else {
    console.log('true');
  }
};

list(list1);


You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]

const integers = function(arr) {
arr.
}

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"


const accepts = function (num, str) {
  let result = [];
  for (i = 1; i <= num; i++) {
    result.push(str);
  }
  console.log(result.join(''));
};

accepts(3, '*');


You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
Notes:

The original order should be preserved.
If there are no GitHub admin developers in a given language then return an empty array [].
The input array will always be valid and formatted as in the example above.
The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.



var list1 = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 49,
    language: 'Ruby',
    githubAdmin: 'no',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 34,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
    githubAdmin: 'no',
  },
];

const findAdmin = function (arr, language) {
  let data = [];

  arr.map((item) => {
    if (item.language === language && item.githubAdmin === 'yes') {
      data.push(item);
    } else {
      return;
    }
  });
  return data;
};

findAdmin(list1, 'JavaScript');



You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
your function should return true.

Notes:

The input array will always be valid and formatted as in the example above.



var list1 = [
  {
    firstName: 'Emma',
    lastName: 'Z.',
    country: 'Netherlands',
    continent: 'Europe',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'Javascript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
  },
];

const check = function (arr) {
  const result = arr.reduce((total, item) => {
    const { language } = item;
    if (!total[language]) {
      total[language] = 1;
    } else {
      total[language] = total[language] + 1;
    }

    return total;
  }, {});
  console.log(result);
  const { Ruby } = result;
  if (Ruby >= 1) {
    return console.log('true');
  } else {
    console.log('false');
  }
};

check(list1);




Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.


var list1 = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
];

const createUsername = function (arr) {
  arr.map((item) => {
    const { firstName, lastName, age } = item;

    const d = new Date();
    let Currentyear = d.getFullYear();

    firstLetterLastName = lastName[0].toLowerCase();
    //  year = Currentyear - age;
    // console.log(firstLetterLastName);

    item.username = `${firstName.toLowerCase()}${firstLetterLastName}${
      Currentyear - age
    }`;
    console.log(item);
  });
};

createUsername(list1);

function addUsername(list) {
  return list.map(function (x) {
    x.username =
      x.firstName.toLowerCase() +
      x.lastName[0].toLowerCase() +
      (new Date().getFullYear() - x.age);
    return x;
  });
}


You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.


var list1 = [
  {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Java',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 70,
    language: 'Python',
  },
];

const averageAge = function (arr) {
  let theAge = [];
  arr.map((item) => {
    theAge.push(item.age);
  });

  const total = theAge.reduce((acc, num) => acc + num, 0);
  return (total / theAge.length).toFixed(0);
};

averageAge(list1);




You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.
const yu = 'ABC'.charCodeAt(2);

console.log(yu);

var list1 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];

const findOddNames = (arr) => {
  const yo = arr.filter((item) => {
    return (
      item.firstName
        .split('')
        .reduce((acc, letter) => acc + letter.charCodeAt(0), 0) %
        2 !==
      0
    );
  });
  console.log(yo);
};

findOddNames(list1);

// function findOddNames(list) {
//   return list.filter((d) => {
//     return (
//       d.firstName.split('').reduce((r, e) => r + e.charCodeAt(0), 0) % 2 !== 0
//     );
//   });
// }

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.


var list1 = [
  {
    firstName: null,
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: null,
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

const question = function (arr) {
  arr.every((item) => {
    return (
      item.continent !== null &&
      item.country !== null &&
      item.age !== null &&
      item.firstName !== null &&
      item.language !== null &&
      item.lastName !== null
    );
  })
    ? arr.filter((item) => {
        const { firstName, lastName, country, continent, age, language } = item;
        if (
          firstName === null ||
          lastName === null ||
          country === null ||
          continent === null ||
          age === null ||
          language === null
        ) {
          item.question = `Hi, could you please provide your ${
            firstName === null
              ? 'firstName'
              : null || lastName === null
              ? 'lastName'
              : null || country === null
              ? 'country'
              : null || continent === null
              ? 'continent'
              : null || age === null
              ? 'age'
              : null || language === null
              ? 'language'
              : null
          }`;
          return item;
        }
      })
    : [];

  // console.log(filtered);
};

question(list1);

// if (firstName === null) {
//   item.question = `Hi, could you please provide your ${firstName} `;
// } else if (lastName === null) {
//   item.question = `Hi, could you please provide your ${lastName} `;
// } else if (country === null) {
//   item.question = `Hi, could you please provide your ${country} `;
// } else if (continent === null) {
//   item.question = `Hi, could you please provide your ${continent} `;
// } else if (age === null) {
//   item.question = `Hi, could you please provide your ${age} `;
// } else if (language === null) {
//   item.question = `Hi, could you please provide your ${language} `;
// } else {
//   console.log('ff');
// }


You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:

The input array will always be valid and formatted as in the example above and will never be empty.



var list1 = [
  {
    firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 49,
    language: 'PHP',
  },
  {
    firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 38,
    language: 'Python',
  },
  {
    firstName: 'Emilija',
    lastName: 'S.',
    country: 'Lithuania',
    continent: 'Europe',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP',
  },
];

const oldestDeveloper = function (arr) {
  let ages = [];
  arr.map((item) => {
    ages.push(item.age);
  });
  console.log(ages);
  const oldest = Math.max(...ages);
  console.log(oldest);

  const result = arr.filter((item) => item.age === oldest);

  console.log(result);
};

oldestDeveloper(list1);
*/
