//1.Print odd numbers in an array

//anonymous function
const printOddNum = function (array) {
  return array.filter((x) => x % 2 === 1);
};

//input
let array1 = [1, 2, 3, 4, 5, 7, 8, 9];

console.log(printOddNum(array1));

//IIFE
let oddNums = (function (array) {
  return array.filter((x) => x % 2 === 1);
})(array1);

console.log(oddNums);
//output: [ 1, 3, 5, 7, 9 ]

//------------------------------------------------------------------------------

//2.Convert all the strings to title caps in a string array
//anonymous function
const stringTitle = function (strArray) {
  let ans = [];
  for (let str of strArray) {
    ans.push(str[0].toUpperCase() + str.slice(1));
  }
  return ans;
};

//input
let strArray = ["aeroplane", "car", "bike", "ship"];

console.log(stringTitle(strArray));

//IIFE
let titledArray = (function (strArray) {
  let ans = [];
  for (let str of strArray) {
    ans.push(str[0].toUpperCase() + str.slice(1));
  }
  return ans;
})(strArray);

console.log(titledArray);

//output :[ 'Aeroplane', 'Car', 'Bike', 'Ship' ]

//------------------------------------------------------------------------------

//3.Sum of all numbers in an array
//anonymous function

const arraySum = function (array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
};

//input
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arraySum(array3));

//IIFE
let sumOfEle = (function (array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
})(array3);

console.log(sumOfEle);

//output : 55

//--------------------------------------------------------------------------------------
//4.Return all the prime numbers in an array
//anonymous function
const primeNum = function (array) {
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

//IIFE
let primeNumbers = (function (array) {
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
})(array4);

console.log(primeNumbers);
//output: [ 2, 3, 5, 7, 11 ]

//----------------------------------------------------------------
//5.Return all the palindromes in an array
//anonymous function
const getPalindromes = function (array) {
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

//IIFE
let palindromes = (function (array) {
  let palindromes = [];
  for (let str of array) {
    if (str === str.split("").reverse().join("")) {
      palindromes.push(str);
    }
  }
  return palindromes;
})(array5);

console.log(palindromes);

//output:[ 'arra', 'cac', 'greerg' ]

//--------------------------------------------------------------------------------
//6.Return median of two sorted arrays of same size

//input
let arr1 = [1, 3, 5, 9, 11, 12];
let arr2 = [2, 4, 6, 13, 8, 10];

//anonymous function

const returnMedian = function (array1, array2) {
  let mergedArray = array1.concat(array2);
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] > mergedArray[j]) {
        [mergedArray[i], mergedArray[j]] = [mergedArray[j], mergedArray[i]];
      }
    }
  }

  let middle = parseInt(mergedArray.length / 2);
  return (mergedArray[middle] + mergedArray[middle - 1]) / 2;
};

console.log(returnMedian(arr1, arr2));

//IIFE
const medianVal = (function (array1, array2) {
  let mergedArray = array1.concat(array2);
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] > mergedArray[j]) {
        [mergedArray[i], mergedArray[j]] = [mergedArray[j], mergedArray[i]];
      }
    }
  }

  let middle = parseInt(mergedArray.length / 2);
  return (mergedArray[middle] + mergedArray[middle - 1]) / 2;
})(arr1, arr2);

console.log(medianVal);

//output : 7

//------------------------------------------------------------------------------
//7.Remove duplicates from an array

//input

let duplicates = ["Guvi", "Geek", "Guvi", "Fullstack"];

//anonymous function
const removeDuplicates = function (array) {
  let newArray = [];
  for (let val of array) {
    if (newArray.indexOf(val) === -1) {
      newArray.push(val);
    }
  }
  return newArray;
};

console.log(removeDuplicates(duplicates));

//IIFE
const duplicatesRemoved = (function (array) {
  let newArray = [];
  for (let val of array) {
    if (newArray.indexOf(val) === -1) {
      newArray.push(val);
    }
  }
  return newArray;
})(duplicates);

console.log(duplicatesRemoved);

//output : [ 'Guvi', 'Geek', 'Fullstack' ]

//8.Rotate an array by k times

//input

let array8 = [1, 2, 3, 4, 5];
let rotate = 3;

// anonymous functions

const rotateArray = function (array, rotation) {
  rotation = rotation % array.length;
  let rotatedArray = array.slice(rotation);
  for (let i = 0; i < rotation; i++) {
    rotatedArray.push(array[i]);
  }
  return rotatedArray;
};

console.log(rotateArray(array8, rotate));

//IIFE

const rotatedArray = (function (array, rotation) {
  rotation = rotation % array.length;
  let rotatedArray = array.slice(rotation);
  for (let i = 0; i < rotation; i++) {
    rotatedArray.push(array[i]);
  }
  return rotatedArray;
})(array8, rotate);

console.log(rotatedArray);

//output : [ 4, 5, 1, 2, 3 ]
