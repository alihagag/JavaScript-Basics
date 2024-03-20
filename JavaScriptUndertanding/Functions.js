// a function is a reuseable lock of code that can be uilied anywhere in the file once made 
// all functions must have a return 
// functions are invoked 
//1. function declaration
function greeting1(arguments) {
    console.log('Hello');
}

// 2. function expression 
const greeting2 = function (arguments) {
    console.log('Hello');
}


// 3. arrow functions - ES6 feature  most used one by far 
const greeting3 = (arguments) => {
    console.log('Hello');
}

//HIGHER ORDER FUNCTIONS 

// 1.  foreach() callback method 

const arrayEX21 = ['John', 'Jane', 'Alex', 'Max'];

arrayEX21.forEach(names => console.log(names.toUpperCase())) // all upper case 


// map () method       returning a same size new array with modified original array elements -> map

const arrayEX22 = [-2, -5, 3, 0, 5, 8, 10]; 
const evenOdd = arrayEX22.map(number => number % 2 === 0 ? 'even' : 'odd');
console.log(evenOdd); // will give you an array if which ones are even or odd for each index

// filter () method      returning some of the elements (subarray of the original) -> filter method
const arrayEX23 = [10, 5, 100, 77, 50, 65, 0]

const numbersLessThan50 = arrayEX23.filter(numbers => numbers < 50)
console.log(numbersLessThan50) // [ 10, 5, 0 ]  printed all the numbers less than 50 



//reduce() method      count, sum, average, min, max, shortest, longest, most expensive simply result being one simple result -> reduce method
const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];

// evens = 4

const evenCounter = numbers.reduce((count, number) => number % 2 === 0 ? count + 1 : count, 0);

console.log(evenCounter); // 4








