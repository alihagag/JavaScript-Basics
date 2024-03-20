// task 1
const noSpace = words => words.trim().split(" ").join("")

console.log(noSpace("                Java script               "))

// task 2
const replaceFirstlast = words => {
    if (words.trim() < 2) {
        return ""
    }
    else {
        words.trim()
        return words[words.length - 1] + words.substring(1, words.length - 1) + words[0]
    }
}

console.log(replaceFirstlast("Tech Global"))

// task 3

const hasVowel = words => {
    words.toLowerCase()
    return words.includes("a") || words.includes("e") || words.includes("o") || words.includes("u") || words.includes("i")
}

console.log(hasVowel("javascript"))

// task 4
const checkAge = DOB => {
    let age = new Date().getFullYear() - DOB
    if (age >= 16 && age < 120) {
        return "age is ALLOWED"
    }
    else if (age > 120) {
        return "age is not valid"
    }
    else {
        return "age is not allowed"
    }
}

console.log(checkAge(1999))


// task 5

const averageOfEdges = (n1, n2, n3) => {
    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)
    return (min + max) / 2
}

console.log(averageOfEdges(3, 4, 7))

// task 6
const noA = array => array.map(words => words[0] === "a" || words[0] === "A" ? "###" : words)


console.log(noA(["javascript", "hello", "123", "xyz"]))


// task 7

const no3and5 = array => {
    return array.map(number => {
        if (number % 5 === 0 && number % 3 === 0) {
            return 101;
        } else if (number % 5 === 0) {
            return 99;
        } else if (number % 3 === 0) {
            return 100;
        } else {
            return number;
        }
    });
};

console.log(no3and5([7, 4, 11, 23, 17]));

// task 8

const isPrime = num => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;

    while (i < num) {
        if (num % i === 0) return false;
        i += 2;
    }

    return true;
}

const countPrimes = arr => arr.reduce((acc, curr) => isPrime(curr) ? acc + 1 : acc, 0);
// task 9
const removeDuplicates = array => array.reduce((newArr, nums) => (!(newArr.includes(nums))) ? newArr.concat(nums) : newArr,[])

// task 10 
const DateFormatValid = words => {
   let wordss =words.split("/")
    return wordss[0].length === 2 && wordss[1].length === 2 && wordss[2].length == 4
}

console.log(DateFormatValid("10/02/2024"))


//task 11

const secondMax = secM => {
    secM = secM.filter(sec => !(sec === Math.max(...secM)))
    return Math.max(...secM)

}


console.log(secondMax([7, 4, 4, 4, 23, 23, 23]) )


// task 12
const secondMin = secM => {
    secM = secM.filter(sec => !(sec === Math.min(...secM)))
    return Math.min(...secM)

}


console.log(secondMin([7, 4, 4, 4, 23, 23, 23]) )


// task 13

const mostRepeated = array => {

}


/* 

new array creation via reduce and what we can do is everytime there is a word that isnt in there we can add it

*/