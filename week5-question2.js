//1.Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

var num = 10;
function addFive(num) {
  return num + 5;
}
var result = addFive(num);
console.log(result);

//output : 15

//2. Write a function called “getOpposite”.
// Given a number, return its opposite

var num = 5;
function getOpposite(num) {
  return isNaN(-num) ? -1 : -num;
}
var result = getOpposite(num);

console.log(result);

//output : -5

//3.Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
  return min * 60;
}
var secs = toSeconds(min);

console.log(secs);

//output : 300

//4.Create a function that takes a string and returns it as an integer.

var mystr = "5";
function toInteger(mystr) {
  return parseInt(mystr);
}
var myint = toInteger(mystr);

console.log(myint);

//output : 5

//5.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
  return myint + 1;
}
var myNextint = nextNumber(myint);

console.log(myNextint);

//output : 1

//6.Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
  return arr[0];
}
var data = getFirstElement(arr);

console.log(data);

//output: 1

//7.Convert Hours into Seconds
// Write a function that converts hours into seconds.

var arr = [1, 2, 3];
function hourToSeconds(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 60 * 60;
  }
  return arr;
}
var data = hourToSeconds(arr);

console.log(data);

//output [3600,7200,10800]

//8.Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

function findPerimeter(num1, num2) {
  return num * num2;
}
var peri = findPerimeter(6, 7);

console.log(peri);

//output : 42;

//9.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}
var res = lessThan100(22, 15);

console.log(res);

//output : true

//10.There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1, num2) {
  return num1 % num2;
}
var res = remainder(1, 3);

console.log(res);

//output : 1

//11. Implement a function that returns the total number of legs of all the animals.

function CountAnimals(tur, horse, pigs) {
  return tur * 2 + horse * 4 + pigs * 4;
}
var legs = CountAnimals(2, 3, 5);

console.log(legs);

//output : 36

//12.Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1, num2) {
  return num1 * num2 * 60;
}
var fps = frames(1, 2);

console.log(fps);

//output : 120

//13.Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
  return num1 % 5 === 0;
}
var divisible = divisibleByFive(5);

console.log(divisible);

//output : true

//14.Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
function isEven(num) {
  // your code here
  if (isNaN(parseInt(num))) {
    return -1;
  } else {
    if (num % 2 === 0) return true;
    else return false;
  }
}
var even = isEven(5);

console.log(even);

//15.Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
  // your code here
  return num1 % 2 !== 0 && num2 % 2 !== 0;
}

console.log(areBothOdd(1, 3));

//output : true

//16.Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(firstName, lastName) {
  // your code here
  if (firstName === "") {
    return lastName;
  } else if (lastName === "") {
    return firstName;
  } else if (firstName === "" && lastName === "") {
    return "";
  } else {
    return `${firstName} ${lastName}`;
  }
}

console.log(getFullName("", "GEEK"));

//output : GEEK

//17.Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1) {
  // your code here
  if (word1 === undefined || typeof word1 !== "string") {
    return -1;
  }
  return word1.length;
}

console.log(getLengthOfWord("geek"));

//output : 4

//18.Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2) {
  // your code here
  return word1.length === word2.length;
}

console.log(isSameLength("geek", "gucv"));

//output : true

//19.Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

//output : 360.555

//20.Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array, n) {
  // your code here
  return array[n];
}

console.log(getNthElement([1, 3, 5], 1));

//output : 3

//21.Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

function getLastElement(array) {
  // your code here
  return array.length === 0 ? -1 : array[array.length - 1];
}

console.log(getLastElement([1, 2, 3, 4]));

//output : 4

//22.Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
  mykey: "value",
};
function getProperty(obj, key) {
  // your code here
  return obj[key];
}

console.log(getProperty(obj, "dummykey"));

//output: undefined

//23.Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj = {
  mykey: "value",
};
function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

console.log(addProperty(obj, "mykey"));

//output : { mykey: true }

//24.Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.

function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}

console.log(removeProperty(obj, "mykey"));

//output : {}

//25.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  let ans = [0, 0];
  for (let number of arr) {
    if (number > 0) ans[0]++;
    else if (number < 0) ans[1]++;
  }
  return ans;
};
console.log(ar2(arr));

//output : [5,3]

//26.Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  // your code here
  let positiveNum = [];
  for (let number of ar) {
    if (number > 0) {
      positiveNum.push(number);
    }
  }
  return positiveNum;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//output :  [10, 12, 5, 90, 1 ]

//27.Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  return res.join(",");
}

console.log(powersOfTwo(2));

//output : 1,2,4

//28.Find the maximum number in an array of numbers
function findMax(ar) {
  // your code here
  let max = ar[0];
  for (let number of ar) {
    if (max < number) max = number;
  }
  return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

//output : Max: 90

//29.Print the first 100 prime numbers
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " → ", i);
      n++;
    }

    i++;
  }
}
// Returns true if a number is prime
function isPrime(n) {
  // your code here
  for (let i = 2; i < parseInt(n / 2) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//output :
// 0  →  2
// 1  →  3
// 2  →  5
// 3  →  7
//...

//30.Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
  // your code here
  let i = startAt;
  let ans = [];
  let val = 0;
  while (val < nPrimes) {
    if (isPrime(i)) {
      ans.push(i);
      val++;
    }
    i++;
  }
  return ans;
}
// Returns true if a number is prime
function isPrime(n) {
  // your code here
  for (let i = 2; i < parseInt(n / 2) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// output: [ 101, 103, 107, 109,113, 127, 131, 137,139, 149]

//31.Reverse a string

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s) {
  return s.split("").reverse().join("");
  // your code here
}

//output : tpircSavaJ

//32.Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2) {
  var result = [];
  //this will add the first array to the result array
  for (let el of ar1) {
    result.push(el);
  }

  for (let el of ar2) {
    result.push(el);
  }

  //Some piece of code goes here

  return result;
}

//output : [1,2,3,4,5,6]

//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s) {
  // your code here
  let sum = 0;
  let numbers = s.split(",");
  for (let el of numbers) {
    sum += parseInt(el);
  }
  return sum;
}

//output : 55
