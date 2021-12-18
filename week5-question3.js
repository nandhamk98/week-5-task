//1.Print odd numbers in an array

const printOddNum = (array) => {
  return array.filter((x) => x % 2 === 1);
};

//input
let array1 = [1, 2, 3, 4, 5, 7, 8, 9];

console.log(printOddNum(array1));

//output: [ 1, 3, 5, 7, 9 ]

//------------------------------------------------------------------------------

//2.Convert all the strings to title caps in a string array

const stringTitle = (strArray) => {
  let ans = [];
  for (let str of strArray) {
    ans.push(str[0].toUpperCase() + str.slice(1));
  }
  return ans;
};

//input
let strArray = ["aeroplane", "car", "bike", "ship"];

console.log(stringTitle(strArray));

//output :[ 'Aeroplane', 'Car', 'Bike', 'Ship' ]

//------------------------------------------------------------------------------

//3.Sum of all numbers in an array

const arraySum = (array) => {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
};

//input
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arraySum(array3));
//output : 55

//--------------------------------------------------------------------------------------
//4.Return all the prime numbers in an array

const primeNum = (array) => {
  let prime = [];
  for (let num of array) {
    let flag = 0;
    for (let i = 2; i < parseInt(num / 2) + 1; i++) {
      if (num % i === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      prime.push(num);
    }
  }
  return prime;
};

//input
let array4 = [2, 3, 4, 5, 6, 7, 11];

console.log(primeNum(array4));

//output: [ 2, 3, 5, 7, 11 ]

//----------------------------------------------------------------
//5.Return all the palindromes in an array

const getPalindromes = (array) => {
  let palindromes = [];
  for (let str of array) {
    if (str === str.split("").reverse().join("")) {
      palindromes.push(str);
    }
  }
  return palindromes;
};

//input
let array5 = ["arra", "name", "cac", "greerg", "gene"];

console.log(getPalindromes(array5));

//output:[ 'arra', 'cac', 'greerg' ]
