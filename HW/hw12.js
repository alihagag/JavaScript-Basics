// TASK 1

function makeNegative(num) {
 if (num > 0) {
    return -num;
  } else if (num === 0) {
    return 0;
  } else {
    return num;
  }
}

console.log(makeNegative(-7));
 

// TASK 2

function isSumEVENOrOdd (n1,n2,n3) {
  if ( (n1 + n2 + n3) % 2 === 0) {
    return "sum is even"
  }
  else {
    return "sum is odd"
  }
}

console.log(isSumEVENOrOdd(1,2,3))



// TASK 3

function decimal2 (arr) {
  return arr.map ( el => {
    return el.toFixed(2)

  })
}

console.log(decimal2( [94.356, 8.9752] )  )
console.log(decimal2( [76.62, 128.4, 84] ))
console.log(decimal2( [20987, 3.53245, 12.345, 32.9] ) )
console.log(decimal2( [ ] )  )
console.log(decimal2( [4.35623, 8.9742] ) )


// TASk 4


function myPow (x ,n) {
  return x**n
}

console.log(myPow(2,3))


// TASK 5

const findLongestWord = str => str.split(' ').reduce((word, elem) => elem.length > word.length ? elem : word, '')